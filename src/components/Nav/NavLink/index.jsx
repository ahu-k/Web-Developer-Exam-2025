"use client"

import Link from "next/link";

export default function NavLink({ href, children }) {
    const closeNav = () => {
        const checkbox = document.getElementById("active");
        checkbox.checked = false;
    };

    return (
        <li>
            <Link href={href} onClick={closeNav}>
                {children}
            </Link>
        </li>
    );
}

//Overstående kode er fra en af mine tidligere opgaver.