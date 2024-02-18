import { supabase } from "./supabaseclient.js";

export async function getInterests(session) {
    if (session != null) {
        const { data, error } = await supabase
          .from("interests")
          .select()
          .eq("email", session.email);
        if (error != null) {
          console.log(error);
          return error.message;
        }
        return data;
      } else {
        return {
            message: "Unauthorized",
            status: 401,
          };
      }
}

export async function modifyInterests(data) { 
    const { error } = await supabase
    .from('courses')
    .insert({ 
        email: data.email,
        course: data.course
    })
    if(error){
        return error
    } else {
        return "SUCCESS"
    }
}

export async function createInterests(interests_data, session) {
    if(session != null) {
        const { error } = await supabase
        .from('interests')
        .insert({ 
            email: session.email,
            interest: interests_data.interest
        })
        
        if(error != null){
            console.log(error)
            return error.message
        } else {
            return {
                message: "Successfully added interest",
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