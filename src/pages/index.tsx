import { GetStaticProps } from 'next';

//Tipagem de cada episódio
type Episode = {
  id: string;
  title: string;
  members: string;
}

//Tipagem das propriedades (que vai ser um array de episódios)
type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// Faz o fetch dos episódios do lado do servidor usando a abordagem de SSG para fazer cache do retorno
// No retorno a chave 'revalidate' é o tempo que ele vai cachear até fazer o request novamente
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
