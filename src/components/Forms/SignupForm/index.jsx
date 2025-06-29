'use client'

import { useActionState, useEffect } from "react"
import PrimaryButton from "../../Buttons/PrimaryButton"
import SignupAction from "@/actions/signup"

import "@/components/Forms/form-style.scss"

export default function SignupForm(){

    const [formState, formAction, isPending] = useActionState(SignupAction, null)

    // useEffect(function() {
    //     console.log("formstate", formState)
    // }, [formState])

    return(
        <form action={formAction} className="form" noValidate>
            
            <label htmlFor="usernameInput">Username</label>
            <input 
                defaultValue={formState?.formData?.username}
                type="text" 
                name="username" 
                placeholder="Enter your username"
            />
            <span className="form-error">{formState?.errors?.username?._errors[0]}</span>

            <label htmlFor="passwordInput">Password</label>
            <input 
                defaultValue={formState?.formData?.password} 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
            />
            <span className="form-error">{formState?.errors?.password?._errors[0]}</span>

            <label htmlFor="confirmPasswordInput">Confirm Password</label>
            <input 
                defaultValue={formState?.formData?.confirmPassword} 
                type="password" 
                name="confirmPassword" 
                placeholder="Re-enter your password" 
            />
            <span className="form-error">{formState?.errors?.confirmPassword?._errors[0]}</span>
            
            <span className="form-error">{formState?.error}</span>

            <PrimaryButton 
                text={isPending ? "Signing up" : "Sign up"} 
                disable={isPending}
            />
        </form>
    )
}