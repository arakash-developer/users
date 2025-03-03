"use server";
import { redirect } from "next/navigation";
const loginaction = async (formdata) => {
  const user = Object.fromEntries(formdata);
  console.log(user.email);
  redirect("/dashboard");
};

export default loginaction;
