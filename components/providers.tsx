'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load AuthProvider to prevent SSR issues
const AuthProvider = dynamic(() => import('@/lib/auth-context').then(mod => mod.AuthProvider), {
  ssr: false,
  loading: () => null
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Suspense fallback={null}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </Suspense>
    </ThemeProvider>
  );
}