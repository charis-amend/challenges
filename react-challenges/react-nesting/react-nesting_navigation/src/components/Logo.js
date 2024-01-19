import Image from "./Image.js";
import logo from "../img/logo.jpg"
export default function Logo({ logo }) {
    return (
        <>
            <button>
                <Image src={logo} alt="logo" />
            </button>
        </>
    )
}