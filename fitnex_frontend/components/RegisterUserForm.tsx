"use client"


import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { z } from "zod";
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerUserSchema } from '@/lib/validators';
import axios from "axios";
import { Auth } from '@/lib/network';
import { useForm } from 'react-hook-form';
import { toast } from './ui/use-toast';
import Link from 'next/link';

type Props = {}

type UserRegInput = z.infer<typeof registerUserSchema>


const RegisterUserForm = (props: Props) => {

    const router = useRouter();

    const { mutate: registerUser, isPending } = useMutation({
        mutationFn: async (userData: UserRegInput) => {
            const response = await axios.post(Auth.register, userData)
            return response.data
        }
    });

    const form = useForm<UserRegInput>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    function onSubmit(userData: UserRegInput) {
        
        registerUser(userData, {
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "User registered successfully",
                });
                
                router.push('/login');
            },
            onError: (error: any) => {
                
                
                toast({
                    title: "Error",
                    description: "An error occured trying to register you",
                    variant: "destructive",
                })
                console.log(error)
                form.reset()
                return;
            }
        });
    }
    return (
        <div className='w-full max-w-md mx-auto'>
            <Form {...form}>
                <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='mb-4'>
                                <FormLabel className='text-xl'>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your full name' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='mb-4'>
                                <FormLabel className='text-xl'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your email' {...field} />
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
                                    <Input placeholder='Enter a secret password' {...field} type='password' autoComplete='false' />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button type='submit' size='lg' className='w-full mt-6' disabled={isPending}>
                        Register
                    </Button>
                </form>
                <p className='mt-4 text-center'>Have an account?<Link href="/login" className='text-foreground/60 text-sm cursor-pointer'>click here</Link></p>
            </Form>
        </div>

    )
}

export default RegisterUserForm