import Head from "next/head";
import Link from "next/link";
import { introduction } from "../../resources/lib/data.js"
import FellowshipRing from "./FellowshipRing.js";
import ReturnKing from "./ReturnKing.js";
import TwoTowers from "./TwoTowers.js";

export default function Volumes() {
    return (
        <>
            <Head>
                <title>Volumes of the Lord of the Rings Triologie</title>
            </Head>
            <h1>Lord of the Rings</h1>
            <h2>All Volumes</h2>
            <ul>
                <li>
                    <Link href="/volumes/FellowshipRing">
                        The Fellowship of the Ring
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/volumes/TwoTowers">
                        The Two Towers
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/volumes/ReturnKing">
                        The Return of the King
                    </Link>
                </li>
            </ul>

            <p>{introduction}</p>


        </>
    )
}