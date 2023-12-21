// we will be working with react query so we are settting things upin here

"use client"

import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NextUIProvider } from "@nextui-org/react";
import { type ThemeProviderProps } from "next-themes/dist/types"

const queryClient = new QueryClient()


export function Provider({ children, ...props }: ThemeProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </NextThemesProvider>
        </QueryClientProvider>
    )
}