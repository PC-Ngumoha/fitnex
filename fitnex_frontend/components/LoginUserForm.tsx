"use client"


import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { z } from "zod";
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginUserSchema } from '@/lib/validators';
import axios from "axios";
import { Auth } from '@/lib/network';
import { useForm } from 'react-hook-form';
import { toast } from './ui/use-toast';
import Link from 'next/link';
import { useStore } from '@/store';

type Props = {}

type UserRegInput = z.infer<typeof loginUserSchema>


const LoginUserForm = (props: Props) => {

    const router = useRouter();
    const store = useStore();

    const { mutate: registerUser, isPending } = useMutation({
        mutationFn: async (userData: UserRegInput) => {
            const response = await axios.post(Auth.login, userData)
            console.log(response.data)
            const token = response.data.access_token
            console.log(token)
            return response.data
        }
    });

    const form = useForm<UserRegInput>({
        resolver: zodResolver(loginUserSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    function onSubmit(userData: UserRegInput) {
        registerUser(userData, {
            onSuccess: (token) => {
                store.setAuthUser(token)
                toast({
                    title: "Success",
                    description: "Logged In successfully",
                });
                router.push('/exercise');
            },
            onError: (error: any) => {
                toast({
                    title: "Error",
                    description: "Invalid Credidentials",
                    variant: "destructive",
                })
                console.log(error)
                form.reset()
                return;
            }
        });
        const user = store.authUser;
        console.log(user)
    }
    return (
        <div className='w-full max-w-md mx-auto'>
            <Form {...form}>
                <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)}>

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='mb-4'>
                                <FormLabel className='text-xl'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your email' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem className='mb-4'>
                                <FormLabel className='text-xl'>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter a secret password' {...field} type='password' autoComplete='off'/>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button type='submit' size='lg' className='w-full mt-6' disabled={isPending}>
                        Sign In
                    </Button>
                </form>
                <p className='mt-4 text-center'>Forgot password? <Link href="/" className='text-foreground/60 text-sm cursor-pointer'>click here</Link></p>
                <p className='mt-4 text-center'>Don&apos;t have an account? <Link href="/register" className='text-foreground/60 text-sm cursor-pointer'>click here</Link></p>
            </Form>
        </div>

    )
}

export default LoginUserForm