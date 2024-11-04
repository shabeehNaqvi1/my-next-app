import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link> |
        <Link href="/posts/1">Post 1</Link> |
        <Link href="/posts/2">Post 2</Link>
      </nav>
    </div>
  );
}