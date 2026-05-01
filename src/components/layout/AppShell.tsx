'use client';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SideNav } from '@/components/layout/SideNav';
import { ChatModal } from '@/components/modals/ChatModal';
import { ChatProvider } from '@/context/ChatContext';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  const pathname = usePathname();
  const openChat = () => setChatOpen(true);

  return (
    <ChatProvider openChat={openChat}>
      <Navbar onChatOpen={openChat} />
      {pathname === '/' && <SideNav />}
      <main>{children}</main>
      <Footer />
      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
    </ChatProvider>
  );
}
