import { supabase } from "./supabaseclient.js";

export async function getProfile(session) {
    if(session != null) {
        const { data, error } = await supabase
        .from('user_data')
        .select()
        .eq('email', session.email)
        if(error!=null) {
            console.log(error)
            return error.message
        }
        return {
            content: data,
            status: 200
        }
    } else { 
        return {
            message: "Unauthorized",
            status: 401
        }
    }
}

export async function createProfile(profile_data, session) {
    if(session != null) {
        const { error } = await supabase
        .from('user_data')
        .insert({ 
            first_name: profile_data.first_name,
            last_name: profile_data.last_name, 
            email: session.email,
            major: profile_data.major,
            hometown: profile_data.hometown,
            cohort: profile_data.cohort
        })
        
        if(error != null){
            console.log(error)
            return error.message
        } else {
            return {
                message: "Successfully created user profile",
                status: 200
            }
        }
    } else { 
        return {
            message: "Unauthorized",
            status: 401
        }
    }
}

export function modifyProfile() { 
    
}