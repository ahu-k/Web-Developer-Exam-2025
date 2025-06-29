'use client';

import {leaveClassAction} from "@/actions/classSignup";

import "@/components/Buttons/PrimaryButton/primarybtn-style.scss"

export default function ClassLeaveButton({text, className, type = 'button', userId, userToken, classId}){

    return(
        <button
            className={`primary-btn${ className ? ` ${className}` : ''}`}
            type={ type }
            onClick={ () => leaveClassAction( userId, userToken, classId)}
        >
            <p>{text}</p>
        </button>
    )
}