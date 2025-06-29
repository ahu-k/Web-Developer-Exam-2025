'use server'

import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function LoginAction(prevState, formData){ 

    const username = formData.get("username")
    const password = formData.get("password")

    const schema = z.object({
        username: z.string().min(1, {message: "You need to enter a username"}),
        password: z.string().min(1, {message: "You need to enter a password"})
    })

    const validate = schema.safeParse({
        username,
        password
    })
    
    if(!validate.success){
        return{
            formData: {
                username,
                password
            },
            errors: validate.error.format()
        }  
    }

	try {
		const response = await fetch(`${ process.env.API_BASE_URI }/auth/token`, {
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"body": JSON.stringify({
				"username": username, 
				"password": password
			})
		})
        
		if (response.status === 401) { // status 401 = Unauthorized  
			return {
				formData: {
					username,
					password
				},
				error: "Wrong username or password"
			}
		}

        if (!response.ok){
            throw new Error( 'Error: ' + response.statusText )
        }

		const data = await response.json()
        // console.log(data)

		const cookieStore = await cookies() 
		cookieStore.set("trainer_token", data.token, { maxAge: data.validUntil })
		cookieStore.set("trainer_uid", data.userId, { maxAge: data.validUntil }) 

	} catch (error) {
		throw new Error(error) 
	}
	redirect("/home")
}

//Overstående kode er kopiret fra en af mine tidligere opgaver.