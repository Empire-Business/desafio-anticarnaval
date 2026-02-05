import { redirect } from 'next/navigation';

export default function HomePage() {
  // Server-side redirect - instantâneo, melhor para SEO e PageSpeed
  redirect('/pagina-inscricao');
}
