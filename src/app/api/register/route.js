import { NextResponse } from 'next/server';
import prisma from '@/utils/prismadb'
import bcrypt from 'bcryptjs';
export const POST = async (request) => {
  try {
    const { name, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await prisma.user.create({
      data: {
        name, 
        hashedPassword
      }
    });
    return NextResponse.json({ message: 'User:  has been registered.' }, { status: 201 }, user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'An error occured while registering the user.' },
      { status: 500 }
    );
  }
};
