/**
 * 技能展示组件
 * 显示数码兽的技能列表
 */

import React from 'react';

interface SkillEffect {
  type: 'Damage' | 'Heal' | 'Buff' | 'Debuff' | 'Status';
  stat?: string;
  value?: number;
  duration?: number;
  chance?: number;
}

interface Skill {
  name_en: string;
  name_ja?: string;
  type: 'Signature' | 'Support' | 'Passive' | 'Special';
  element?: string;
  power?: number;
  accuracy?: number;
  sp_cost?: number;
  target?: string;
  description?: string;
  inheritance_type?: string;
  learned_at?: number;
  effects?: SkillEffect[];
}

interface SkillsDisplayProps {
  skills: Skill[];
  locale?: 'en' | 'ja';
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ skills, locale = 'en' }) => {
  if (!skills || skills.length === 0) {
    return (
      <div className="text-gray-500 text-center py-8">
        {locale === 'ja' ? 'スキルデータなし' : 'No skill data available'}
      </div>
    );
  }

  // 元素对应的颜色
  const elementColors: Record<string, string> = {
    Fire: 'text-red-600 bg-red-50',
    Water: 'text-blue-600 bg-blue-50',
    Plant: 'text-green-600 bg-green-50',
    Electric: 'text-yellow-600 bg-yellow-50',
    Earth: 'text-amber-600 bg-amber-50',
    Wind: 'text-cyan-600 bg-cyan-50',
    Light: 'text-yellow-500 bg-yellow-50',
    Dark: 'text-purple-600 bg-purple-50',
    Neutral: 'text-gray-600 bg-gray-50'
  };

  // 技能类型图标
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Signature':
        return '⭐';
      case 'Support':
        return '🛡️';
      case 'Passive':
        return '🔄';
      case 'Special':
        return '✨';
      default:
        return '⚡';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">
        {locale === 'ja' ? 'スキル' : 'Skills'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
          >
            {/* 技能名称 */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getTypeIcon(skill.type)}</span>
                  <h4 className="font-bold text-lg">
                    {locale === 'ja' && skill.name_ja ? skill.name_ja : skill.name_en}
                  </h4>
                </div>
                {locale === 'en' && skill.name_ja && (
                  <div className="text-sm text-gray-500 ml-8">{skill.name_ja}</div>
                )}
              </div>

              {/* 元素标签 */}
              {skill.element && (
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    elementColors[skill.element] || elementColors.Neutral
                  }`}
                >
                  {skill.element}
                </span>
              )}
            </div>

            {/* 技能描述 */}
            {skill.description && (
              <p className="text-sm text-gray-700 mb-3">{skill.description}</p>
            )}

            {/* 技能属性 */}
            <div className="grid grid-cols-2 gap-2 text-sm">
              {skill.type && (
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'ja' ? 'タイプ:' : 'Type:'}
                  </span>
                  <span className="font-semibold">{skill.type}</span>
                </div>
              )}

              {skill.power !== undefined && skill.power > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'ja' ? '威力:' : 'Power:'}
                  </span>
                  <span className="font-semibold text-red-600">{skill.power}</span>
                </div>
              )}

              {skill.sp_cost !== undefined && (
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'ja' ? 'SP:' : 'SP Cost:'}
                  </span>
                  <span className="font-semibold text-blue-600">{skill.sp_cost}</span>
                </div>
              )}

              {skill.accuracy !== undefined && (
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'ja' ? '命中:' : 'Accuracy:'}
                  </span>
                  <span className="font-semibold">{skill.accuracy}%</span>
                </div>
              )}

              {skill.target && (
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'ja' ? '対象:' : 'Target:'}
                  </span>
                  <span className="font-semibold">{skill.target}</span>
                </div>
              )}

              {skill.inheritance_type && (
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'ja' ? '取得:' : 'Type:'}
                  </span>
                  <span className="font-semibold text-purple-600">
                    {skill.inheritance_type}
                  </span>
                </div>
              )}
            </div>

            {/* 学会等级 */}
            {skill.learned_at && (
              <div className="mt-2 text-xs text-gray-500">
                {locale === 'ja' ? 'Lv.' : 'Learned at Lv.'}
                {skill.learned_at}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDisplay;
