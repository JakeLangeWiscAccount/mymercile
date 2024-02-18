import { supabase } from "./supabaseclient.js";

export async function getCourses(session) {
  if (session != null) {
    const { data, error } = await supabase
      .from("courses")
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

export async function modifyCourses(course_data, session) {
  const { error } = await supabase.from("courses").insert({
    email: course_data.email,
    course: course_data.course,
  });

  console.log(error);
}

export async function createCourses(course_data, session) {
  if (session != null) {
    const { error } = await supabase.from("courses").insert({
      email: session.email,
      course: course_data.course,
    });

    if (error != null) {
      console.log(error);
      return {
        message: error.message,
        status: 500,
      };
    } else {
      return {
        message: "Successfully added course",
        status: 200,
      };
    }
  } else {
    return {
      message: "Unauthorized",
      status: 401,
    };
  }
}