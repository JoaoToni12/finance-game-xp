import React, { useState } from 'react';

// Mantive o SVG base64 original, mas você pode trocar por um ícone da Lucide depois se preferir
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjNzE3MTdhIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4K';

export function ImageWithFallback({ src, alt, style, className, ...props }) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  return didError ? (
    <div
      className={`inline-block bg-zinc-800 rounded-xl overflow-hidden text-center align-middle ${className || ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full opacity-50">
        <img 
          src={ERROR_IMG_SRC} 
          alt="Erro ao carregar imagem" 
          className="w-1/2 h-1/2 object-contain"
          {...props} 
        />
      </div>
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      onError={handleError}
      {...props} 
    />
  );
}