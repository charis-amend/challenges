import { useRouter } from "next/router";
import { volumes } from "@/resources/lib/data.js";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import next from "next";

export default function VolumeDetailPage() {
    // creating variable for the result of the useRouter() function, then checking the log:
    const routerResult = useRouter()
    // then defining the key prop {slug} by taking the router.query of the routerResult variable:
    const { slug } = routerResult.query
    console.log("current slug of volume:", slug)
    // getting the currentVolume if the slug from query() matches the slug from the volumes Data
    const currentVolume = volumes.find((volume) => volume.slug === slug)
    // if not, then:
    if (!currentVolume) {
        return (
            <>
                <h1>
                    ⚠️ This Volume does not exist!
                </h1>
                <Link href="/volumes"> Back to all Volumes </Link>
            </>
        )
    }
    // previous and next button:
    const indexCurrentVolume = volumes.findIndex((volume) => volume.slug === slug)
    const indexPreviousVolume = indexCurrentVolume - 1
    const indexNextVolume = indexCurrentVolume + 1


    const previousVolume = volumes[indexPreviousVolume]
    const nextVolume = volumes[indexNextVolume]
    console.log(
        "index of current volume:", indexCurrentVolume,
        "index of previous volume:", indexPreviousVolume,
        "previous volume:", previousVolume,
        "index next volume", indexNextVolume,
        "next volume:", nextVolume)



    // creating  the page in detail: 
    const { title, description } = currentVolume;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Link href="../volumes">
                🔙 All Volumes
            </Link>
            <h1>{title}</h1>
            <p>{description}</p>

            <p>These Books are part of the Volume {title}:</p>
            <ul>
                {currentVolume.books.map(book => (
                    <li key={book.title}>
                        <p>{book.title}</p>
                        <p>{book.ordinal}</p>
                    </li>
                ))
                }
            </ul >
            <Image
                src={`/../public/images/${slug}.png`}
                alt={title}
                width={140}
                height={230}
            />
            <div>

                <button type="button" onClick={() => {
                    if (indexCurrentVolume === 0) {
                        return;
                    }
                    if (indexCurrentVolume === 1 || indexCurrentVolume === 2) {
                        return (
                            routerResult.push(`/volumes/${previousVolume.slug}`))
                    }
                }}>
                    Previous Volume
                </button>

                <button type="button" onClick={() => {
                    if (indexCurrentVolume === 2) {
                        return;
                    }
                    if (indexCurrentVolume === 0 || indexCurrentVolume === 1) {
                        return (
                            routerResult.push(`/volumes/${nextVolume.slug}`)
                        )
                    }
                }}>
                    Next Volume
                </button>

            </div>
        </>
    )



}