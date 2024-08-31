import Link from 'next/link';

export default function PostNav() {
  return (
    <div className="flex flex-col box-border p-5 min-h-full border-r-2 border-r-orange-300">
      <ul className="flex flex-col font-bold text-l">
        <Link href="/til/frontend">📕 Frontend</Link>
        <Link href="/til/backend">📗 Backend</Link>
        <Link href="/til/cs">📘 Computer Science</Link>
        <Link href="/til/algo">📒 Algorithm</Link>
      </ul>
    </div>
  );
}
