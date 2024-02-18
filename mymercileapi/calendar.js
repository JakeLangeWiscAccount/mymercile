import { supabase } from "./supabaseclient.js";

export async function getCalendar(session) {
    if (session != null) {
        const { data, error } = await supabase
          .from("calendar")
          .select()
          .eq("created_by", session.email);
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

export async function modifyCalendar(data) { 
    const { error } = await supabase
    .from('courses')
    .insert({ 
        email: data.email,
        calendar: data.event
    })
    if(error){
        return error
    } else {
        return "SUCCESS"
    }
}

export async function createCalendar(calendar_data, session) {
    if(session != null) {
        const { error } = await supabase
        .from('calendar')
        .insert({ 
            created_by: session.email,
            event: calendar_data.event,
            date: calendar_data.date,
            time: calendar_data.time
        })
        
        if(error != null){
            console.log(error)
            return error.message
        } else {
            return {
                message: "Successfully added calendar",
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