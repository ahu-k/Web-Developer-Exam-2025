import Link from "next/link";
import Nav from "../Nav";
import { RxTriangleLeft } from "react-icons/rx";

import "./header-style.scss"

export default function Header(){

    return(
        <header className="main-header">
            <Link href={"/home"} className="home-icon"> 
                <RxTriangleLeft /> Home 
            </Link>
            <Nav />
        </header>
    )
}