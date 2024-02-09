import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailPage() {
    const fetcher = url => fetch(url).then(r => r.json())
    const router = useRouter()
    const { id } = router.query
    console.log(id)
    const { data, error } = useSWR(`/api/products/${id}`, fetcher)
    if (!data) {
        return
    }
    console.log("------ data: products ", data)
    if (error) return <div>ERROR: No Products anymore!</div>

    return (
        <>
            <h4>{data.name}</h4>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.currency}</p>
            <p>{data.category}</p>
        </>

    )


}



