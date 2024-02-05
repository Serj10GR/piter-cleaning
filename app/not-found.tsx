import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold">Nicht gefunden</h2>
      <p className="mt-5">
        Die angeforderte Ressource konnte nicht gefunden werden
      </p>

      <Button asChild variant="link" className="mt-10">
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  );
}
