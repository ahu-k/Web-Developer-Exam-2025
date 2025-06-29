import LinkButton from '@/components/Buttons/LinkButton'
import SplashImage from '@/components/SplashScreen/SplashImage'

import "@/styles/error-page-style.scss"

export default function NotFound() {

    return (
        <main className="error-container">
            <div className="error-heading">
                <h1>Page Not Found!</h1>
            </div>
            <div className='error-button-container'>
                <LinkButton link='/home' linkText="Home"/>
            </div>
            <SplashImage />
        </main>
    )
}

//Overstående kode er kopiret fra en af mine tidligere opgaver.