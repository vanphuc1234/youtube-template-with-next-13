'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

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
          <Fragment key={'item' + value}>
            <button
              className="w-10 h-10 bg-blue-400 mr-2 rounded-full text-white"
              onClick={() => handleOnClick(value)}
            >
              {value}
            </button>
          </Fragment>
        );
      })}
    </>
  );
}
