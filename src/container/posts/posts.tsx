'use client';

import { useEffect, useState } from 'react';

import getPosts from '@/api/post';
import MDEditor from '@uiw/react-md-editor';

interface PostDataType {
  author: string;
  detail: string;
  track: string;
  passwd: string;
}
type PostListType = PostDataType[] | null;

export default function Posts({ track }: { track: string }) {
  const [postData, setPostData] = useState<PostListType>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts(track);
      setPostData(data ?? null);
    };
    fetchData();
  }, [track]); // 의존성 배열에 `track` 추가

  return (
    <div className="w-full h-full flex flex-col overflow-auto p-5">
      {postData ? (
        postData.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <>
            <h3>{post.author}의 학습공유</h3>
            <div
              className="flex flex-col w-full h-96 overflow-auto rounded-xl border-2 border-orange-300"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <MDEditor.Markdown className="prose" source={post.detail} />
            </div>
          </>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
