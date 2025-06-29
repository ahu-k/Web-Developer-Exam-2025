'use client'

import { useActionState, useEffect } from "react"
import PrimaryButton from "../../Buttons/PrimaryButton"
import LoginAction from "@/actions/login"

import "@/components/Forms/form-style.scss"

export default function LoginForm(){
    
    const [formState, formAction, isPending] = useActionState(LoginAction, null)

    // useEffect(function() {
    //     console.log("formstate", formState)
    // }, [formState])

    return(
        <form action={formAction} className="form" noValidate>

            <input 
                defaultValue={formState?.formData?.username}
                type="text" 
                name="username" 
                placeholder="username"
            />
            <span className="form-error">{formState?.errors?.username?._errors[0]}</span>

            <input 
                defaultValue={formState?.formData?.password} 
                type="password" 
                name="password" 
                placeholder="password" 
            />
            <span className="form-error">{formState?.errors?.password?._errors[0]}</span>
            
            <span className="form-error">{formState?.error}</span>

            <PrimaryButton 
                text={isPending ? "Logging in" : "Log in"} 
                disable={isPending}
            />
        </form>
    )
}

//Overstående kode er fra en af mine tidligere opgaver.