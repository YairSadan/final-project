import connect from '@/utils/db';
import { NextResponse } from 'next/server';
import User from '@/models/User';

export const GET = async (request, { params }) => {
  try {
    await connect();
    const user = await User.findById(params.id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
