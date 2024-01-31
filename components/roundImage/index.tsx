import Image from "next/image";

export const RoundImage = () => {
  return (
    <div className="relative mx-auto">
      <Image
        alt="Hero"
        className="aspect-square overflow-hidden rounded-full object-cover"
        height="386"
        src="/hero_img.jpeg"
        width="386"
      />
      <div className="absolute bottom-0 left-18 w-[188px] h-[188px] bg-primary rounded-full" />
      <div className="absolute top-16 right-[-5px] w-[106px] h-[106px] bg-secondary rounded-full -z-10" />
    </div>
  );
};
