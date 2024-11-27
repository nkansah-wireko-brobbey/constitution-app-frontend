"use client"

import { type ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
const AppThemeProvider = ({children, ...props}: ThemeProviderProps) => {
  return (
   <NextThemesProvider {...props}>
    {children}
   </NextThemesProvider>
  )
}

export default AppThemeProvider