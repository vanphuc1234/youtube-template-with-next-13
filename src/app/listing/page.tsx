'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const data: Array<number> = [1, 2, 3, 4, 5];

export default function ListingPage() {
  const route = useRouter();
  const handleOnClick = (value: number) => {
    route.push('/listing/detail/' + value);
  };

  return (
    <>
      <p>Listing page</p>
      {data.map((value) => {
        return (
          <>
            <button key={value} onClick={() => handleOnClick(value)}>
              {value}
            </button>
          </>
        );
      })}
    </>
  );
}
