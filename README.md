This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Connect to a DB 

In order to use the app you'll have to connect it to a mongo DataBase

1. Create an account with mongo atlas

2. Create a new Free Database

3. In the root folder of this project add a .env file

4. Add the connection string mongo provide you and assign it to MONGO variable

## Configure OAuth

1. In order to secure the tokens, add a NEXTAUTH_SECRET instance and give it a random value with a decent amount of characters

2. Add another instance with the name: NEXTAUTH_URL and input the root url you are using (http://localhost:3000 by default) 

## You are good to go!!