/**
 * 数值属性展示组件
 * 显示数码兽的数值和雷达图
 */

import React from 'react';

interface Stats {
  hp?: number;
  sp?: number;
  atk?: number;
  def?: number;
  int?: number;
  spd?: number;
  abi?: number;
  cam?: number;
}

interface StatsDisplayProps {
  stats: Stats;
  memoryCost?: number;
  equipSlots?: number;
  locale?: 'en' | 'ja';
  showRadar?: boolean;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  memoryCost,
  equipSlots,
  locale = 'en',
  showRadar = true
}) => {
  if (!stats || Object.keys(stats).length === 0) {
    return (
      <div className="text-gray-500 text-center py-8">
        {locale === 'ja' ? 'ステータスデータなし' : 'No stats data available'}
      </div>
    );
  }

  // 数值名称映射
  const statNames: Record<string, { en: string; ja: string; color: string }> = {
    hp: { en: 'HP', ja: 'HP', color: 'text-red-600' },
    sp: { en: 'SP', ja: 'SP', color: 'text-blue-600' },
    atk: { en: 'ATK', ja: '攻撃', color: 'text-orange-600' },
    def: { en: 'DEF', ja: '防御', color: 'text-green-600' },
    int: { en: 'INT', ja: '賢さ', color: 'text-purple-600' },
    spd: { en: 'SPD', ja: '素早', color: 'text-cyan-600' },
    abi: { en: 'ABI', ja: 'ABI', color: 'text-yellow-600' },
    cam: { en: 'CAM', ja: 'CAM', color: 'text-pink-600' }
  };

  // 计算最大值（用于进度条）
  const maxValues: Record<string, number> = {
    hp: 2000,
    sp: 300,
    atk: 350,
    def: 350,
    int: 350,
    spd: 350,
    abi: 100,
    cam: 100
  };

  // 计算总和
  const total = Object.entries(stats).reduce((sum, [key, value]) => {
    if (['hp', 'sp', 'atk', 'def', 'int', 'spd'].includes(key)) {
      return sum + (value || 0);
    }
    return sum;
  }, 0);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">
        {locale === 'ja' ? 'ステータス' : 'Stats'}
      </h3>

      {/* 数值列表 */}
      <div className="space-y-3">
        {Object.entries(stats).map(([key, value]) => {
          const statInfo = statNames[key];
          if (!statInfo || value === undefined) return null;

          const percentage = (value / maxValues[key]) * 100;

          return (
            <div key={key} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className={`font-semibold ${statInfo.color}`}>
                  {locale === 'ja' ? statInfo.ja : statInfo.en}
                </span>
                <span className="font-bold text-lg">{value}</span>
              </div>

              {/* 进度条 */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    statInfo.color.replace('text-', 'bg-')
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 总和 */}
      {total > 0 && (
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>{locale === 'ja' ? '合計' : 'Total'}</span>
            <span className="text-2xl text-indigo-600">{total}</span>
          </div>
        </div>
      )}

      {/* 附加信息 */}
      {(memoryCost !== undefined || equipSlots !== undefined) && (
        <div className="pt-4 border-t grid grid-cols-2 gap-4">
          {memoryCost !== undefined && (
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">
                {locale === 'ja' ? 'メモリ' : 'Memory'}
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {memoryCost}
              </div>
            </div>
          )}

          {equipSlots !== undefined && (
            <div className="text-center p-3 bg-amber-50 rounded-lg">
              <div className="text-sm text-gray-600">
                {locale === 'ja' ? '装備スロット' : 'Equip Slots'}
              </div>
              <div className="text-2xl font-bold text-amber-600">
                {equipSlots}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 简单的雷达图（CSS版本） */}
      {showRadar && stats.hp && stats.atk && (
        <div className="pt-4">
          <h4 className="text-sm font-semibold mb-3 text-center">
            {locale === 'ja' ? 'ステータスバランス' : 'Stats Balance'}
          </h4>
          <div className="relative w-full h-48 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* 背景网格 */}
              <polygon
                points="100,20 170,60 170,140 100,180 30,140 30,60"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <polygon
                points="100,50 145,75 145,125 100,150 55,125 55,75"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
              />

              {/* 数据多边形 */}
              {(() => {
                const hp = ((stats.hp || 0) / maxValues.hp) * 80;
                const atk = ((stats.atk || 0) / maxValues.atk) * 80;
                const def = ((stats.def || 0) / maxValues.def) * 80;
                const int = ((stats.int || 0) / maxValues.int) * 80;
                const spd = ((stats.spd || 0) / maxValues.spd) * 80;
                const sp = ((stats.sp || 0) / maxValues.sp) * 80;

                const points = [
                  [100, 100 - hp],           // HP (上)
                  [100 + atk * 0.866, 100 + atk * 0.5],  // ATK (右上)
                  [100 + def * 0.866, 100 - def * 0.5],  // DEF (右下)
                  [100, 100 + int],          // INT (下)
                  [100 - spd * 0.866, 100 - spd * 0.5],  // SPD (左下)
                  [100 - sp * 0.866, 100 + sp * 0.5]     // SP (左上)
                ];

                return (
                  <polygon
                    points={points.map(p => p.join(',')).join(' ')}
                    fill="rgba(99, 102, 241, 0.3)"
                    stroke="rgb(99, 102, 241)"
                    strokeWidth="2"
                  />
                );
              })()}

              {/* 标签 */}
              <text x="100" y="15" textAnchor="middle" fontSize="10" fill="#6b7280">
                HP
              </text>
              <text x="180" y="65" textAnchor="start" fontSize="10" fill="#6b7280">
                ATK
              </text>
              <text x="180" y="145" textAnchor="start" fontSize="10" fill="#6b7280">
                DEF
              </text>
              <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#6b7280">
                INT
              </text>
              <text x="20" y="145" textAnchor="end" fontSize="10" fill="#6b7280">
                SPD
              </text>
              <text x="20" y="65" textAnchor="end" fontSize="10" fill="#6b7280">
                SP
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDisplay;
