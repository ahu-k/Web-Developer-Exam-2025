import "./heading-style.scss"

export default function PageHeading({text, className}){

    return(
        <h1 className={`heading${ className ? ` ${className}` : ''}`}>
            {text}
        </h1>
    )
}