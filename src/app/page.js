import getSession from "@/actions/getSession";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  if (session) redirect('contact')
  redirect ('signin')
}
