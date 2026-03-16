'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/solaradmin');

  return (
    <>
      {!isAdmin && <Navigation />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}