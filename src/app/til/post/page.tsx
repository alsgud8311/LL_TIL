'use client';

import Posting from '@/container/posting/posting';
import PostHeader from '@/container/header/post_header';

export default function Til() {
  return (
    <main className="flex flex-col h-screen">
      <PostHeader />
      <Posting />
    </main>
  );
}
