// we will be working with react query so we are settting things upin here

"use client"

import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NextUIProvider } from "@nextui-org/react";
import { type ThemeProviderProps } from "next-themes/dist/types"
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
const queryClient = new QueryClient()


export function Provider({ children, ...props }: ThemeProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
               <HydrationOverlay>
                    {children}
                </HydrationOverlay>
            </NextThemesProvider>
        </QueryClientProvider>
    )
}