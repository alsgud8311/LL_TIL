'use client';

import { useState } from 'react';

import Posting from '@/container/posting/posting';
import PostHeader from '@/containers/header/post_header';

export default function Til() {
  const [posting, setPosting] = useState<string>('#학습한 것들을 공유해보세요');

  return (
    <main className="flex flex-col">
      <PostHeader />
      <Posting posting={posting} setPosting={setPosting} />
    </main>
  );
}
