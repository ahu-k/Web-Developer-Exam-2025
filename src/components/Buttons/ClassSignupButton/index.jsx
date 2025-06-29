'use client';

import {signupClassAction} from "@/actions/classSignup";

import "@/components/Buttons/PrimaryButton/primarybtn-style.scss"

export default function ClassSignupButton({text, className, type = 'button', userId, userToken, classId}){

    return(
        <button
            className={`primary-btn${ className ? ` ${className}` : ''}`}
            type={ type }
            onClick={ () => signupClassAction( userId, userToken, classId)}
        >
            <p>{text}</p>
        </button>
    )
}