export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// Faz o fetch dos episódios do lado do servidor usando a abordagem de SSG para fazer cache do retorno
// No retorno a chave 'revalidate' é o tempo que ele vai cachear até fazer o request novamente
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
