import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background/60 backdrop-blur">
      <div className="container mx-auto h-16 flex items-center justify-between gap-8">
        <Link href="/" className="font-semibold text-xl">
          Catalog
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-primary transition">
            Каталог
          </Link>
        </nav>
      </div>
    </header>
  );
}
