import Image from 'next/image'
import splashImage from '@/assets/images/splashBackground.jpg'

export default function SplashImage(){
    return(
        <>
            <Image
                alt="splash image"
                src={splashImage}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                objectFit: 'cover',
                zIndex: "-2"
                }}
            />
        </>
    )
}