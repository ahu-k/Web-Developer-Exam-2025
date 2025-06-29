import Image from "next/image";
import Link from "next/link";

import "./featuredclass-style.scss"

export default function FeaturedClass({ classInfo }){

    return(
        <Link href={"/class/" + classInfo.id} className="featured-class-container">
            <Image
                alt= { classInfo?.className }
                src={ classInfo?.asset?.url }
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    zIndex: "-2",
                }}
            />
            <h1>{ classInfo?.className }</h1>
        </Link>
    )
}