import { NextResponse } from 'next/server';
import prisma from '@/utils/prismadb'

export const GET = async () => {
  try {

    const users = await prisma.User.findMany();

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
