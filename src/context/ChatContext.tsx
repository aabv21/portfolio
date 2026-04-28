'use client'

import { createContext, useContext, type ReactNode } from 'react'

interface ChatContextValue {
  openChat: () => void
}

const ChatContext = createContext<ChatContextValue | null>(null)

export function ChatProvider({
  children,
  openChat,
}: {
  children: ReactNode
  openChat: () => void
}) {
  return <ChatContext.Provider value={{ openChat }}>{children}</ChatContext.Provider>
}

export function useChat(): ChatContextValue {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error('useChat must be used inside <ChatProvider>')
  return ctx
}
