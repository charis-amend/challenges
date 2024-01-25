import { useRouter } from "next/router";

export default function VolumeDetail() {
    const routerResult = useRouter()
    console.log(routerResult)
}