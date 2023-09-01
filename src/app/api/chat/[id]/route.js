import { NextResponse } from 'next/server';
import prisma from '@/utils/prismadb'
export const GET = async (request, {params}) => {
  try {
    const user = await prisma.User.findUnique({
      where: {
        id: params.id,
      },
    });
    console.log(user)
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
