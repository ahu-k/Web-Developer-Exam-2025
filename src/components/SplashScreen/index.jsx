import LinkButton from '../Buttons/LinkButton'
import SplashImage from './SplashImage'

import "./splash-style.scss"

export default function SplashScreen(){
    return(
        <main className='splash-container'>
            <div className='splash-heading'>
                <SplashImage />
                <h1>Believe Yourself</h1>
                <p> <span></span> Train like a pro</p>
            </div>
            <div className='splash-button-container'>
                <LinkButton link='/home' linkText="Start Training"/>
            </div>
        </main>
    )
}