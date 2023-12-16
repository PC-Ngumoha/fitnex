import {z} from "zod";

export const registerUserSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3).max(100),
    // avatar: z.string().url().optional(),
    password: z.string().min(8).max(100),
})

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
})