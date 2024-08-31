'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function PostHeader() {
  return (
    <header className="flex p-4 bg-orange-400 justify-between h-14 items-center">
      <span>멋쟁이기록자처럼</span>
      <FontAwesomeIcon
        icon={faPenToSquare}
        className="text-lg"
        size="lg" // 크기를 'sm'으로 줄입니다.
      />
    </header>
  );
}
