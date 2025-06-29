import Image from "next/image"

import "./trainercard-style.scss"

export default function TrainerCard({trainerInfo}){
    return(
        <article className="trainer-card">
            <h2>Trainer</h2>
            <div>
                <Image
                    alt= { trainerInfo?.trainerName }
                    src={ trainerInfo?.asset?.url }
                    quality={100}
                    width={60}
                    height={70}
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: "-2",
                    }}
                />
                <p>{ trainerInfo?.trainerName }</p> 
            </div>
        </article>
    )
}