import { z } from "zod";



export const usernameValidation=z
.string()
.min(2,{message:"Username must be atleast 2 characters"})
.max(30,{message:"Username can't be more than 30 characters"})
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"Password must be atleast 6 character"}),    
})