"use server"
import { auth, signIn , signOut} from '@/auth'

export const login = async () => (
    await signIn('id-server' , {callbackUrl : "/"} ,{prompt : 'login'}))

export const getCurrentUser = async () => {
    try{
        const session = await auth()
        if(!session) return null;
        return session.user
    }
    catch{
        return null
    } 
}