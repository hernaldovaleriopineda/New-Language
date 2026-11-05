"use client";

import {useActionState} from "react";
import {guardarPalabra, type EstadoGuardarPalabra} from "./actions";

const estadoInicial: EstadoGuardarPalabra = {status: "", message: ""};

function FormularioNewWord() {

  const [estado, formAction, pending] = useActionState(guardarPalabra, estadoInicial);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-violet-50 to-indigo-100 p-6">
      <form
        action={formAction}
        className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-violet-100 backdrop-blur-sm"
      >
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Nueva palabra</h2>
          <p className="mt-2 text-sm text-slate-500">Agrega una palabra nueva para ampliar tu vocabulario.</p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="palabra" className="mb-2 block text-sm font-medium text-slate-700">
              Palabra
            </label>
            <input
              type="text"
              id="palabra"
              name="palabra"
              required
              placeholder="Ej: serendipity"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label htmlFor="traduccion" className="mb-2 block text-sm font-medium text-slate-700">
              Traducción
            </label>
            <input
              type="text"
              id="traduccion"
              name="traduccion"
              required
              placeholder="Ej: sorpresa agradable"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label htmlFor="ejemplo" className="mb-2 block text-sm font-medium text-slate-700">
              Ejemplo
            </label>
            <input
              type="text"
              id="ejemplo"
              name="ejemplo"
              placeholder="Ej: The sunset was a serendipity."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label htmlFor="referencia" className="mb-2 block text-sm font-medium text-slate-700">
              Referencia
            </label>
            <input
              type="text"
              id="referencia"
              name="referencia"
              required
              placeholder="Ej: Diccionario / contexto"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>
        </div>

        {estado.message && (
          <p
            className={`mt-4 text-sm ${
              estado.status === "success" ? "text-green-700" : "text-red-700"
            }`}
            role={estado.status === "error" ? "alert" : "status"}
          >
            {estado.message}
          </p>
        )}

        <button
          type="submit"
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-violet-200 transition hover:from-violet-500 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-violet-200"
          disabled={pending}
        >
          {pending ? "Guardando..." : "Guardar palabra"}
        </button>
      </form>
    </div>
  );
}

export default FormularioNewWord;