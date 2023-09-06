'use client';

import { pusherClient } from "@/lib/pusher";

export default function GameRequetsProvider({ children, currentUserId }) {
  pusherClient.subscribe(currentUserId);
  pusherClient.bind('game-request', (data) => { 
    window.alert(data)
    console.log(data)
  });
  return <div>{children}</div>;
}