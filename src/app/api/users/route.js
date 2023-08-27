import connect from '@/utils/db';
import { NextResponse } from 'next/server';
import User from '@/models/User';

export const GET = async (request) => {
  try {
    await connect();

    const users = await User.find();

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};