import Link from "next/link";
import useSWR from "swr";

export default function Products() {
    const fetcher = url => fetch(url).then(r => r.json())
    const { data: products, error } = useSWR(`/api/products/`, fetcher)
    console.log("------ data: products ", products)
    if (error) {
        return <div>Error loading</div>
    }

    return (
        <>
            <h2>List of all dead Fish, you can buy:</h2>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            <h4>{product.name}</h4>
                        </Link>
                        <p>{product.category}</p>
                    </li>
                ))
                }
            </ul>
        </>
    )
}
