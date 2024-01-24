import { volumes } from "@/resources/lib/data.js"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image";

export default function FellowshipRing() {
    const volume = volumes.find(({ slug }) => {
        return slug === "the-fellowship-of-the-ring"
    })
    return (
        <>
            <Head>
                <title>The Fellowship of the Ring</title>
            </Head>
            <Link href="../volumes">
                🔙 All Volumes
            </Link>
            <h1>{volume.title}</h1>
            <p>{volume.description}</p>

            <p>These Books are part of the Volume {volume.title}</p>
            <ul>

                {volume.books.map(book => (
                    <li key={book.title}>
                        <p>{book.title}</p>
                        <p>{book.ordinal}</p>
                    </li>
                ))
                }
            </ul >
            <Image
                src={`/../public/images/${volume.slug}.png`}
                alt={volume.title}
                width={140}
                height={230}
            />

            <div>
                <Link href="/volumes/ReturnKing">
                    <button type="button">
                        Previous Volume
                    </button>
                </Link>
                <Link href="/volumes/TwoTowers">
                    <button type="button">Next Volume</button>
                </Link>
            </div>
        </>
    )
}