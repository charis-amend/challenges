import Head from "next/head";
import Link from "next/link";
import { introduction } from "../../resources/lib/data.js"
import { volumes } from "../../resources/lib/data.js";
import { useRouter } from "next/router.js";

export default function Volumes() {
    const router = useRouter()

    function getRandomVolume(volumes) {
        return volumes[Math.floor(Math.random() * volumes.length)];
    }
    let randomVolume = getRandomVolume(volumes)

    return (
        <>
            <Head>
                <title>Volumes of the Lord of the Rings Triologie</title>
            </Head>
            <h1>Lord of the Rings</h1>
            <h2>All Volumes</h2>
            <ul>
                {volumes.map((volume) => {
                    return (
                        <li key={volume.slug}>
                            <Link href={`/volumes/${volume.slug}`}>
                                {volume.title}
                            </Link>
                        </li>
                    )
                })}

            </ul>

            <p>{introduction}</p>
            <button onClick={() => {

                if (confirm("Choose a random volume?")) {
                    return (
                        router.push(`/volumes/${randomVolume.slug}`)
                    )
                }
            }}>
                Random Volume
            </button >
        </>
    )
}