import { CursoFetch } from "@/apiFetch/cursos";
import Link from "next/link";

type ParamsProps = {
  params: {
    curso: string;
  }
}

export default async function CursoPage({ params }: ParamsProps) {
  const data = await CursoFetch(params.curso);


  return (
    <div>
      {
        <div>
          <div style={{ marginBottom: '20px' }}>
            <h4>{data.nome}</h4>
            <h4>{data.descricao}</h4>
          </div>
          {
            data.aulas.map((aula) => (
              <div key={aula.id}>
                <p>
                  {aula.nome} -
                  <span><Link href={`/cursos/${params.curso}/${aula.slug}`}>Informações da aula</Link></span>
                </p>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}
