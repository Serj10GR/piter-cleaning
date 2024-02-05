import { Service } from "@/types/service";

export const SERVICES: Array<Service> = [
  {
    id: 1,
    name: "REINIGUNG UND PLEGE VON INNEN UND AUßENBEREICHEN",
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
    ],
    shortDescription: "",
  },
  {
    id: 2,
    name: "HAUSTECHNIK TÄTIGKEITEN UND KONTROLLEN",
    included: [{ name: "" }],
    shortDescription: "",
  },
  {
    id: 3,
    name: "EINFACHE GÄRTNERISCHE TÄTIGKEITEN",
    included: [{ name: "Entsorgung von Gärtenabfallen" }],
    shortDescription: "",
  },
  {
    id: 4,
    name: "VERKEHRSFLÄCHENREINIGUNG",
    included: [{ name: "Wege" }],
    shortDescription: "",
  },
];
