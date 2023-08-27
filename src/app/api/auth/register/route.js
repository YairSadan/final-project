import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';
import User from '@/models/User';
export const POST = async (request) => {
  const { name, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse('User has been created', { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
