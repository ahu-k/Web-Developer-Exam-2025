import Link from "next/link"

import "./linkbtn-style.scss"

export default function LinkButton({link, linkText, className}){
    return(
        <Link 
            href={link} 
            className={`link-btn${ className ? ` ${className}` : ''}`}
        >
            {linkText}
        </Link>
    )
}