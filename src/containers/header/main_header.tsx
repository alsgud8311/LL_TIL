import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex p-4 bg-orange-400 justify-between">
      <span>멋쟁이기록자처럼</span>
      <span>
        <Link href="/til/post">기록하기</Link>
      </span>
    </header>
  );
}
