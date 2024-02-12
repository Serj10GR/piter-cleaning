import { Service } from "@/types/service";

export const SERVICES: Array<Service> = [
  {
    id: 1,
    name: "REINIGUNG UND PFLEGE VON INNEN UND AUßENBEREICHEN",
    link: "reinigung-und-plege-von-innen-und-außenbereichen",
    included: [
      {
        name: "Büroreinigung",
        subItems: [
          "Fensterreinigung",
          "Staubsaugen",
          "Küchenreinigung",
          "Grundreinigung",
        ],
      },
      {
        name: "Hausreinigung",
        subItems: [
          "Stiegenhausreinigung",
          "Gänge und Keller",
          "Waschküchen",
          "Trockenräum Lifte in Wohngebäuden",
          "Sauberhalten von Müllätzen",
        ],
      },
      {
        name: "Reinigungsservice",
        subItems: [
          "Glasreinigung",
          "Eingänge und Vorhäuser",
          "Fußmatten",
          "Keller sowie Kellerstiegen",
          "Fensterscheiben",
          "Glastüren/ Glasdach",
          "Glasfassaden/ Wintergärten",
          "Auslagenfenste",
        ],
      },
    ],
    shortDescription: "",
  },
  {
    id: 2,
    name: "HAUSTECHNIK TÄTIGKEITEN UND KONTROLLEN",
    link: "haustechnik-tätigkeiten-und-kontrollen",
    included: [
      { name: "Kleinere Haushaltsreparaturen" },
      { name: "Wände Malen" },
      { name: "Möbelmontage / Demontage alter Möbel" },
      { name: "Austausch von Glühbirnen und Fassungen" },
    ],
    shortDescription: "",
  },
  {
    id: 3,
    name: "EINFACHE GÄRTNERISCHE TÄTIGKEITEN",
    link: "einfache-gärtnerische-tätigkeiten",
    included: [
      { name: "Entsorgung von Gärtenabfallen" },
      {
        name: "Laubentfernung im Herbst",
      },
      {
        name: "Rasenmähen, Hochgrasmähen",
      },
      {
        name: "Baum-, Strauch- und Heckenschnitt",
      },
    ],
    shortDescription: "",
  },
  {
    id: 4,
    name: "VERKEHRSFLÄCHENREINIGUNG",
    link: "verkehrsflächenreinigung",
    included: [
      { name: "Wege" },
      {
        name: "Gehsteige",
      },
      {
        name: "Parkplätze",
      },
      {
        name: "Garagen",
      },
    ],
    shortDescription: "",
  },
];
