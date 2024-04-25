import { AulaFetch } from "@/apiFetch/cursos";

type ParamsProps = {
  params: {
    curso: string;
    aula: string;
  }
}

export default async function AulaPage({ params }: ParamsProps) {
  const data = await AulaFetch(params.curso, params.aula);

  return (
    <div>
      {
        <div>
          <h2>{data.nome}</h2>
          <p>{data.descricao}</p>
          <p>{data.tempo}</p>
        </div>
      }
    </div>
  )
}
