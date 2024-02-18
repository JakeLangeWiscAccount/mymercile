import { supabase } from "./supabaseclient.js";

export async function signUpNewUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  
  if(error != null) {
    return error
  }
  return {
    content: data
  }
}

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if(error!=null) {
    console.log(error)
    return error
  }
  return {
    content: data,
    status: 200
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if(error != null) {
    return error
  }
  return {
    message: "success",
    status: 200
  }
}
