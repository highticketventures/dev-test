'use client'

import { useEffect, useState } from 'react'
import { pusherClient } from '@/lib/pusher'
import type { RequestUpdateEvent } from '@/types'

export function useRealtime(companyId: string) {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const channel = pusherClient.subscribe(`company-${companyId}`)
    
    channel.bind('pusher:subscription_succeeded', () => {
      setIsConnected(true)
    })

    channel.bind('pusher:subscription_error', () => {
      setIsConnected(false)
    })

    return () => {
      pusherClient.unsubscribe(`company-${companyId}`)
      setIsConnected(false)
    }
  }, [companyId])

  const subscribe = (event: string, callback: (data: any) => void) => {
    const channel = pusherClient.channel(`company-${companyId}`)
    if (channel) {
      channel.bind(event, callback)
      return () => channel.unbind(event, callback)
    }
  }

  return { isConnected, subscribe }
}

export function useRequestUpdates(companyId: string, onUpdate: (event: RequestUpdateEvent) => void) {
  const { isConnected, subscribe } = useRealtime(companyId)

  useEffect(() => {
    if (!isConnected) return

    const unsubscribe = subscribe('request-updated', onUpdate)
    return unsubscribe
  }, [isConnected, subscribe, onUpdate])

  return { isConnected }
}