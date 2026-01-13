'use client';

import { Toaster } from 'sonner';
import { ContactProvider } from './context/contact-context';
import { ReactNode } from 'react';
import AudioPlayer from '@/components/audio-player';
import Link from 'next/link';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ContactProvider>
      {children}
      <Toaster position="top-center" richColors />
      {/* WhatsApp Floating Button */}
      <Link 
        href="https://wa.me/yourwhatsappnumber" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-32 right-6 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg z-[9999] hover:scale-105 transition-transform duration-300 hover:shadow-xl group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.498 14.382v3.301c0 .989-1.078 1.548-1.964 1.105-1.586-.789-3.3-1.23-5.063-1.305-2.704-.12-5.102-1.454-6.577-3.66C1.563 11.128 1.8 6.854 4.15 4.16c1.312-1.5 3.136-2.34 5.052-2.34h.014c3.52.022 6.453 2.49 6.47 5.63.01 1.8-.88 3.47-2.405 4.52.11.31.185.63.22.96.14 1.31-.29 2.61-1.15 3.55.34.1.7.15 1.05.15z"/>
            <path d="M12.38 12.02c.23 0 .46-.02.68-.06.25-.04.47-.15.64-.32.17-.17.27-.39.3-.63.03-.24-.02-.48-.13-.69-.12-.21-.3-.38-.51-.49-.21-.11-.45-.15-.69-.12-.24.04-.47.15-.64.32-.17.17-.27.39-.3.63-.03.24.02.48.13.69.11.21.29.38.5.49.2.1.43.14.65.12z" fill="#fff"/>
            <path d="M16.3 9.14c-.24-.12-.5-.2-.77-.24-.25-.04-.5-.03-.75.02-.24.06-.46.17-.65.32-.19.15-.34.34-.45.56-.11.22-.17.46-.18.7-.01.25.03.49.11.72.08.23.2.44.36.62.16.18.35.33.56.44.21.11.44.17.67.19.24.02.48-.02.71-.1.23-.09.44-.22.62-.38.18-.17.33-.37.43-.6.1-.23.15-.48.15-.73 0-.31-.06-.62-.18-.9-.12-.29-.3-.55-.53-.76-.23-.21-.5-.36-.8-.46z" fill="#fff"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-white text-[#25D366] text-xs font-bold rounded-full border-2 border-[#25D366] group-hover:animate-ping opacity-75"></span>
        </div>
      </Link>
      
      <AudioPlayer />
    </ContactProvider>
  );
}
