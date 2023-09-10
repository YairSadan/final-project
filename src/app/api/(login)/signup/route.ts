import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';
export const POST = async (request: Request) => {
  try {
    const { username, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'An error occured while registering the user.' },
      { status: 500 }
    );
  }
};
