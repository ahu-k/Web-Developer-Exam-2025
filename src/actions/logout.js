'use server'

import { cookies } from "next/headers"

export async function getSession() {
    const cookieStore = await cookies();
    return cookieStore?.get('trainer_token') && cookieStore.get('trainer_uid')
}

export async function logoutUserAction() {
    
    const cookieStore = await cookies();

    cookieStore?.set( 'trainer_token',"", { maxAge: 0 })
    cookieStore?.set( 'trainer_uid',"", { maxAge: 0 })
}