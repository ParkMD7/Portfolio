import Image from "next/image";

type Props = {
  src: string;
  className: string;
};

const ImageComponent = ({ src, className }: Props) => {
  return (
    <Image
      src={src}
      width={100}
      height={100}
      className={className}
      alt="Picture of the author"
    />
  );
};

export default ImageComponent;
