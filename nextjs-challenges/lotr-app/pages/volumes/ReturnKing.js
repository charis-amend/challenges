import { volumes } from "@/resources/lib/data.js"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function ReturnKing() {
    const volume = volumes.find(({ slug }) => {
        return slug === "the-return-of-the-king"
    })
    return (
        <>
            <Head>
                <title> The Return of the King</title>
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
                <Link href="/volumes/TwoTowers">
                    <button type="button">
                        Previous Volume
                    </button>
                </Link>
                <Link href="/volumes/FellowshipRing">
                    <button type="button">Next Volume</button>
                </Link>
            </div >
        </>
    )
}