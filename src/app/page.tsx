import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>Home page</p>
      <Link href="/listing">Listing Page</Link>
      <br />
      <Link href="/about">About Page</Link>
    </>
  );
}
