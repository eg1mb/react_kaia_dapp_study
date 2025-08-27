interface ImageProps {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export default function Image({
  className,
  src,
  alt,
  width,
  height,
  loading = 'lazy',
}: ImageProps) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
    />
  );
}
