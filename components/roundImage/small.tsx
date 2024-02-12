import { cn } from "@/lib/utils";
import Image from "next/image";

export const SmallRoundImage = () => {
  return (
    <div className="relative mx-auto">
      <Image
        alt="Kotact uns"
        className="aspect-square overflow-hidden rounded-full object-cover"
        height="280"
        src="/contact_img.png"
        width="280"
      />
      <div
        className={cn(
          "absolute top-0 left-18 w-[90px] h-[90px] bg-[#A3D2CA] rounded-full"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 right-0 w-[120px] h-[120px] bg-primary rounded-full",
          "-z-10"
        )}
      />
    </div>
  );
};
