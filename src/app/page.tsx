import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold ">Home page</h1>
      <Link href="/listing">
        <button>Listing Page</button>
      </Link>
      <br />
      <Link href="/about">
        <button>About Page</button>
      </Link>
    </>
  );
}
