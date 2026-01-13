'use client';

import { Toaster } from 'sonner';
import { ContactProvider } from './context/contact-context';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ContactProvider>
      {children}
      <Toaster position="top-center" richColors />
    </ContactProvider>
  );
}
