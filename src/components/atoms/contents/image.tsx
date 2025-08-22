interface ImageProps {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function Image({
  className,
  src,
  alt,
  width,
  height,
}: ImageProps) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
