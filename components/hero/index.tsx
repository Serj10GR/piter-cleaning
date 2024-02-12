import { RoundImage } from "../roundImage";

export const Hero = () => {
  return (
    <section className="flex flex-col mb-20 pt-10 md:pt-0 px-5 text-center md:text-left md:flex-row-reverse md:items-center">
      <RoundImage />
      <div className="mt-[54px] max-w-[637px] md:mt-0">
        <h2 className="font-bold text-[45px] leading-[67px]">
          {`Hausbesorger: "Callcenter, Betreuer und Techniker"`}
        </h2>
        <p className="leading-6 my-10">
          Als erfahrener Hausbesorger in Graz kümmere ich mich zuverlässig um
          die Pflege und Instandhaltung Ihrer Immobilie. Vertrauen Sie auf meine
          professionellen Dienstleistungen, um eine optimale Betreuung
          sicherzustellen und ein behagliches Zuhause für Ihre Mieter zu
          gewährleisten.
        </p>
      </div>
    </section>
  );
};
