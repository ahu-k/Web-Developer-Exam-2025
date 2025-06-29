'use server'

import { redirect } from "next/navigation"

export async function signupClassAction( userId, userToken, classId ){ 
	try {
		if(
			userId == undefined || null &&
			userToken == undefined || null &&
			classId == undefined || null 
		){
			throw new Error('userId, userToken or classId is not defined ')
		}

		const response = await fetch(`${ process.env.API_BASE_URL }/users/${ userId }/classes/${ classId }`, {
			"method": "POST",
			"headers": {
				"content-type": "application/json",
				"Authorization": `Bearer ${ userToken }`
			}
		})

        if (!response.ok){
            throw new Error( 'Error: ' + response.statusText )
        }

		const data = await response.json()
        // console.log(data)
		
	} catch (error) {
		throw new Error(error) 
	}
	redirect( `/class/${ classId }` )
}


export async function leaveClassAction( userId, userToken, classId ){ 
	try {
		if(
			userId == undefined || null &&
			userToken == undefined || null &&
			classId == undefined || null 
		){
			throw new Error('userId, userToken or classId is not defined ')
		}

		const response = await fetch(`${ process.env.API_BASE_URL }/users/${ userId }/classes/${ classId }`, {
			"method": "DELETE",
			"headers": {
				"content-type": "application/json",
				"Authorization": `Bearer ${ userToken }`
			}
		})

        if (!response.ok){
            throw new Error( 'Error: ' + response.statusText )
        }

		// const data = await response.json()
        // console.log(data)

	} catch (error) {
		throw new Error(error) 
	}
	redirect( `/class/${ classId }` )
}