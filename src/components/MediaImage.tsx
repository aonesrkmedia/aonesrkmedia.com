import React, { useState } from 'react';

interface MediaImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatioClass?: string;
  className?: string;
}

export const MediaImage: React.FC<MediaImageProps> = ({
  src,
  alt,
  caption,
  aspectRatioClass = 'aspect-video',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`group relative overflow-hidden bg-neutral-100 border border-neutral-200 ${className}`}>
      <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-neutral-900`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-neutral-950 p-8 text-white">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 text-xs tracking-wider text-neutral-400">
              <span>A ONE SRK MEDIA</span>
              <span>EDITORIAL VISUAL</span>
            </div>
            <div className="my-auto py-6">
              <p className="font-editorial text-2xl italic text-neutral-200">{alt}</p>
              <p className="mt-2 text-xs text-neutral-400">
                Strategic Media · Powerful Connections · Measurable Growth
              </p>
            </div>
            <div className="border-t border-neutral-800 pt-3 text-xs text-red-500">
              Corporate Media Division — India
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="flex items-center justify-between border-t border-neutral-200 bg-white px-4 py-2.5 text-xs text-neutral-500">
          <span>{caption}</span>
          <span className="font-mono-tabular text-neutral-400">A ONE SRK MEDIA</span>
        </figcaption>
      )}
    </figure>
  );
};
