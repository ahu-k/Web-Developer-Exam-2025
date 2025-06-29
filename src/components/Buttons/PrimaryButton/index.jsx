import "./primarybtn-style.scss"

export default function PrimaryButton({text, className, type = 'submit', disable}){
    return(
        <button 
            className={`primary-btn${ className ? ` ${className}` : ''}`}
            type={ type }
            disabled={disable}
        >
            <p>{text}</p>
        </button>
    )
}

//Overstående kode er fra en af mine tidligere opgaver.