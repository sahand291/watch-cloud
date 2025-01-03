"use client"
import { useState, useEffect } from 'react'

/**
 * check online status of network
 *
 * this hook will listen online and offline events and shows it in a state
 */
export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(false)

    function onOnline(){
        setIsOnline(true)
    }

    function onOffline(){
        setIsOnline(false)
    }

    useEffect(() => {

        window.addEventListener('online', onOnline)
        window.addEventListener('offline', onOffline)

        return () => {
            window.removeEventListener('online', onOnline)
            window.removeEventListener('offline', onOffline)
        }
    }, []);

    return isOnline
}
