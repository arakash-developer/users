"use server";
import { redirect } from "next/navigation";
const loginaction = async (formdata) => {
  let reguser = {
    email: "example",
    password: "example",
  };
  const { email, password } = Object.fromEntries(formdata);
  if (email === reguser.email && password === reguser.password) {
    redirect("/dashboard");
  } else {
    throw new Error("Invalid credentials");
  }
};

export default loginaction;
