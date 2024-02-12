import { cn } from "@/lib/utils";
import Image from "next/image";

type RoundImageProps = {
  isPlp?: boolean;
  src?: string;
};

export const RoundImage = ({
  isPlp,
  src = "/hero_img.jpg",
}: RoundImageProps) => {
  return (
    <div className="relative mx-auto">
      <Image
        alt="Hero"
        className="aspect-square overflow-hidden rounded-full object-cover"
        height="386"
        src={src}
        width="386"
      />
      <div
        className={cn(
          "absolute bottom-0 left-18 w-[188px] h-[188px] bg-primary rounded-full",
          { "-z-10 opacity-50": isPlp }
        )}
      />
      <div
        className={cn(
          "absolute top-16 right-[-5px] w-[106px] h-[106px] bg-secondary rounded-full",
          { "-z-10": !isPlp }
        )}
      />
    </div>
  );
};
