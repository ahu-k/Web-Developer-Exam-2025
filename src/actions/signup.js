'use server'

import { z } from "zod"
import { redirect } from "next/navigation"

export default async function SignupAction(prevState, formData){ 

    const username = formData.get("username")
    const password = formData.get("password")
    const confirmPassword = formData.get("confirmPassword")

    const schema = z.object({
        username: z.string().min(1, {message: "You need to enter a username"}),
        password: z.string().min(1, {message: "You need to enter a password"}),
        confirmPassword: z.string().min(1, {message: "You need to re-enter the password"})
    })

    const validate = schema.safeParse({
        username,
        password,
		confirmPassword
    })
    
    if(!validate.success){
        return{
            formData: {
                username,
                password,
				confirmPassword
            },
            errors: validate.error.format()
        }  
    }

	if ( password !== confirmPassword ){
		return{
			formData: {
				username,
                password,
				confirmPassword
			},
			error: 'Passwords does not match'
		}
	}

	try {
		const response = await fetch(`${ process.env.API_BASE_URL }/users`, {
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"body": JSON.stringify({
				"username": username, 
				"password": password,
			})
		})

        if (!response.ok){
            throw new Error( 'Error: ' + response.statusText )
        }

		const data = await response.json()
        // console.log(data) 

	} catch (error) {
		throw new Error(error) 
	}
	redirect("/login")
}