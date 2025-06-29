import Image from "next/image";
import Link from "next/link";

import "./classcard-style.scss"

export default function ClassCard({ classInfo }){

    return(
        <Link href={"/class/" + classInfo.id}>
            <article className="class-card">
                    <Image
                        alt={ classInfo?.className }
                        src={ classInfo?.asset?.url }
                        quality={100}
                        width={150}
                        height={150}
                        sizes="100%"
                        style={{
                            objectFit: 'cover',
                            zIndex: "-2",
                        }}
                    />
                <p>{ classInfo?.className }</p>
            </article>
        </Link>
    )
}