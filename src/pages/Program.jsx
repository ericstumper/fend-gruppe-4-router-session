import { useParams } from "react-router-dom";

function Program() {
  const { id } = useParams();
  return (
    <div className="Program">
      <header className="Program-header">
        <h1 className="text-3xl font-bold underline">Program {id}</h1>
        <a href={`/`}>Home</a>
        <a href={`/programs`}>Programs</a>
      </header>
    </div>
  );
}

export default Program;
