import FormularioNewWord from "./formularioNuevaPalabra";

function NewWord() {
  return (
    <div>
        <section className="text-center py-8 px-4 bg-gray-100">
            <h2 >Bienvenido a nuestro sitio web para gestionar tu conocimiento de nuevos idiomas</h2>
            <h3>Explora nuestras funciones y servicios para mejorar tu aprendizaje.</h3>
        </section>      
      <FormularioNewWord />
    </div>
  );
}

export default NewWord;