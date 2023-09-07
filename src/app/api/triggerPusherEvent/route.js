import { pusherServer } from '@/lib/pusher';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();

  const { event, channel, data } = body;
  try {
    await pusherServer.trigger(channel, event, data);
    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}
