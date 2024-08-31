import Link from 'next/link';

import Header from '@/container/header/header';
import PostNav from '@/container/postNav/postNav';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full h-screen items-center">
        <PostNav />
        <Link href="/about">letsgo</Link>
      </main>
    </>
  );
}
