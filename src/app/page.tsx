'use client';

import { useState } from 'react';

import Header from '@/container/header/main_header';
import PostNav from '@/container/postNav/postNav';
import Posts from '@/container/posts/posts';

export default function Home() {
  const [track, setTrack] = useState<string>('frontend');
  return (
    <>
      <Header />
      <main className="flex w-full h-screen items-center">
        <PostNav setTrack={setTrack} />
        <Posts track={track} />
      </main>
    </>
  );
}
