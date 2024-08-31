/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

export default function PostNav({
  setTrack,
}: {
  setTrack: React.Dispatch<React.SetStateAction<string>>;
}) {
  function changeTrack(track: string) {
    setTrack(track);
    console.log(track);
  }
  return (
    <div className="flex flex-col box-border p-5 min-h-full border-r-2 border-r-orange-300">
      <ul className="flex flex-col font-bold text-l">
        <div
          className="hover:cursor-pointer"
          onClick={() => changeTrack('frontend')}
        >
          📕 Frontend
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => changeTrack('backend')}
        >
          📗 Backend
        </div>
        <div className="hover:cursor-pointer" onClick={() => changeTrack('cs')}>
          📘 Computer Science
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => changeTrack('algo')}
        >
          📒 Algorithm
        </div>
      </ul>
    </div>
  );
}
