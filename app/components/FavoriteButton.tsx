"use client";

import { useFavorites } from '@/contexts/FavoritesContext';

interface FavoriteButtonProps {
  slug: string;
  className?: string;
}

export default function FavoriteButton({ slug, className = '' }: FavoriteButtonProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(slug);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFavorite(slug);
    } else {
      addFavorite(slug);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative ${className}`}
      title={favorite ? '取消收藏' : '添加收藏'}
    >
      <svg
        className={`w-6 h-6 transition-all ${
          favorite
            ? 'fill-red-500 text-red-500'
            : 'fill-none text-gray-400 hover:text-red-500 hover:fill-red-100'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
