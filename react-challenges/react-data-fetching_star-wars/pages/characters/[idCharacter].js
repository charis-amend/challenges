import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useState } from "react";
import Router, { useRouter } from "next/router";

export default function Character() {

  const router = useRouter()
  const { idCharacter } = router.query
  // const [idCharacter, setIdCharacter] = useState(1);

  const { data, error, isLoading } = useSWR(`https://swapi.dev/api/people/${idCharacter}`)



  // If it's still loading the initial data, there is nothing to display.
  // We return a spinner here.
  if (isLoading) return <div className="spinner" />;
  if (error) return <div className="error" />
  console.log("data from useSWR():----", data)

  return (
    <Layout>
      <Card
        id={idCharacter}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
