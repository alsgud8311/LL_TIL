'use client';

import React, { useState } from 'react';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import './editor.css';

import postApi from '@/api/post';

import MDEditor from '@uiw/react-md-editor';
import { useRouter } from 'next/navigation'; // 'next/router'에서 'next/navigation'으로 변경됨

export default function Posting() {
  const [posting, setPosting] = useState<string>('#학습한 것들을 공유해보세요');
  const [passwd, setPasswd] = useState<string>('비밀번호를 입력해주세요');
  const [track, setTrack] = useState<string>('frontend');
  const [author, setAuthor] = useState<string>('작성자를 입력해주세요');

  const router = useRouter();

  function onChangePosting(value: string | undefined) {
    if (value !== undefined) {
      setPosting(value);
    }
  }

  function handleTrackChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setTrack(event.target.value);
  }

  async function handleSubmit() {
    try {
      await postApi.newPost(author, posting, passwd, track);
      alert('글이 작성되었습니다.');
      router.push('/'); // router.push를 클라이언트 측에서만 실행되도록 보장
    } catch (error) {
      alert('업로드 중 오류가 발생했습니다.');
    }
  }

  function onClickSubmit() {
    if (!author.length) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (passwd.length <= 4) {
      alert('비밀번호는 4자 이상이어야 합니다.');
      return;
    }
    handleSubmit();
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div>
            <span>트랙 : </span>
            <select
              name="track"
              value={track}
              onChange={handleTrackChange}
              className="border-orange-200 border-2"
            >
              <option value="frontend">frontend</option>
              <option value="backend">backend</option>
              <option value="computer science">computer science</option>
              <option value="algorithm">algorithm</option>
            </select>
          </div>
          <div>
            <span>이름 : </span>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              className="border-orange-200 border-2"
            />
          </div>
          <div>
            <span>비밀번호 : </span>
            <input
              type="password" // 비밀번호 입력란에 적절한 type 설정
              onChange={(e) => setPasswd(e.target.value)}
              className="border-orange-200 border-2"
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-orange-300 p-2 rounded-lg"
          onClick={onClickSubmit}
        >
          글 쓰기
        </button>
      </div>
      <MDEditor value={posting} onChange={onChangePosting} height={800} />
    </div>
  );
}
