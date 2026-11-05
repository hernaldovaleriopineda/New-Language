import Link from "next/link";

export default function Navegacion() {
  return (
    <nav
      aria-label="Navegación principal"
      className="flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-slate-950/20 backdrop-blur-sm sm:px-6"
    >
      <Link
        href="/"
        className="text-lg font-bold tracking-tight text-white transition hover:text-violet-200"
      >
        New Language
      </Link>

      <ul className="flex items-center gap-2">
        <li>
          <Link
            href="/NewWord"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Datos
          </Link>
        </li>
        <li>
          <Link
            href="/Contacto"
            className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-900/30 transition hover:bg-violet-400"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}