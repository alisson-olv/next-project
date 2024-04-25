interface CursoProps {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
}

interface AulaProps {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

export default async function CursosFetch() {
  const response = await fetch('https://api.origamid.online/cursos/');
  const data = (await response.json()) as CursoProps[];

  return data;
}

export async function CursoFetch(curso: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  const data = (await response.json()) as CursoProps & {
    aulas: AulaProps[];
  };

  return data;
}

export async function AulaFetch(curso: string, aula: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`
  );
  const data = (await response.json()) as AulaProps;

  return data;
}
