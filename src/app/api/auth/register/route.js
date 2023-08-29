import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';
import User from '@/models/User';
export const POST = async (request) => {
  try {
    const { name, password } = await request.json();
    console.log(name + password);
    await connect();
    const hashedPassword = await bcrypt.hash(password, 5);
    await User.create({ name, password: hashedPassword });
    return NextResponse.json({ message: 'User has been registered.' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'An error occured while registering the user.' },
      { status: 500 }
    );
  }
};
