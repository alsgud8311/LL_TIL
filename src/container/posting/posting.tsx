'use client';

import React from 'react';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import MDEditor from '@uiw/react-md-editor';

export default function Posting({
  posting,
  setPosting,
}: {
  posting: string;
  setPosting: React.Dispatch<React.SetStateAction<string>>;
}) {
  // Correct the onChange handler to accept the new value directly
  function onChangePosting(value: string | undefined) {
    if (value !== undefined) {
      setPosting(value);
    }
  }

  return (
    <div>
      <MDEditor value={posting} onChange={onChangePosting} />
    </div>
  );
}
