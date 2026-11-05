"use server";

import { prisma } from "@/app/lib/prisma";

export type EstadoGuardarPalabra = {
  status: "" | "success" | "error";
  message: string;
};

export async function guardarPalabra(
  _estadoAnterior: EstadoGuardarPalabra,
  formData: FormData,
): Promise<EstadoGuardarPalabra> {
  const word = formData.get("palabra");
  const translate = formData.get("traduccion");
  const reference = formData.get("referencia");
  const ejemplo = formData.get("ejemplo");

  if (
    typeof word !== "string" ||
    typeof translate !== "string" ||
    typeof reference !== "string" ||
    (typeof ejemplo !== "string")
  ) {
    return { status: "error", message: "Los datos del formulario no son válidos." };
  }

  const datos = {
    word: word.trim(),
    translate: translate.trim(),
    reference: reference.trim(),
    ejemplo: ejemplo.trim(),
  };

  if (!datos.word || !datos.translate || !datos.reference|| !datos.ejemplo) {
    return {
      status: "error",
      message: "Completa la palabra, la traducción y la referencia.",
    };
  }

  try {
    await prisma.newWord.create({ data: datos });
    return { status: "success", message: "La palabra se guardó correctamente." };
  } catch (error) {
    console.error("Error al guardar la palabra:", error);
    return {
      status: "error",
      message: "No se pudo guardar la palabra. Inténtalo de nuevo.",
    };
  }
}
