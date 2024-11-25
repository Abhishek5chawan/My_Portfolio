'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
    attribute?: 'class' | 'data-theme'; // Allow 'attribute' prop with either 'class' or 'data-theme'
    defaultTheme?: 'light' | 'dark';
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
    children,
    attribute = 'data-theme', // Default value
    defaultTheme = 'light', // Default value
    enableSystem = true, // System theme preference
    disableTransitionOnChange = true, // Option to disable transition on theme change
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
        >
            {children}
        </NextThemesProvider>
    );
}
