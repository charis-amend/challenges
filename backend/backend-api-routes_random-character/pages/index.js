import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())


export default function HomePage() {

  const { data: randomCharacters, error, isLoading } = useSWR("/api/random-character", fetcher)
  if (error) return <div>error</div>
  if (isLoading) return <div>is Loading...</div>

  console.log(randomCharacters)
  return (
    <>
      <h1>randomCharacter:</h1>
      <p>{randomCharacters.firstName}</p>
      <p>{randomCharacters.lastName}</p>
      <p>{randomCharacters.age}</p>
      <p>{randomCharacters.city}</p>
      <p>{randomCharacters.school}</p>
      <p>{randomCharacters.hobby}</p>
    </>
  )
}
