'use client';

import { useEffect, useState } from 'react';

import postApi from '@/api/post';
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
      const data = await postApi.getPosts(track);
      setPostData(data ?? null);
    };
    fetchData();
  }, [track]); // 의존성 배열에 `track` 추가

  return (
    <div className="w-full h-full flex flex-col overflow-auto p-5 gap-5">
      {postData ? (
        postData.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <p className="text-xl">📖 {post.author}의 학습공유</p>
            <div
              className="flex flex-col w-full max-h-96 overflow-auto rounded-xl border-2 border-orange-300 p-3"
              // eslint-disable-next-line react/no-array-index-key
            >
              <MDEditor.Markdown className="prose" source={post.detail} />
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
