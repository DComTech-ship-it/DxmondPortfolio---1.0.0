'use client';

import { AIChat } from '@/components/ai-chat';

export default function ChatPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Assistant</h1>
      <div className="bg-background rounded-xl shadow-lg overflow-hidden">
        <AIChat />
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>You can type your message or use the microphone to speak.</p>
      </div>
    </div>
  );
}
