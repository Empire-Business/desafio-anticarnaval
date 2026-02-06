import { redirect } from "next/navigation";

export default function InscricaoPage() {
  // This is the main landing page - actually the content is at root
  // But we can also make this a dedicated page
  redirect("/");
}
