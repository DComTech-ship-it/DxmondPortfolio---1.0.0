import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Dxmond</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/forex"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Forex
            </Link>
            <Link
              href="/chat"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              AI Chat
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/chat">
            <Button size="sm">Try AI Assistant</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
