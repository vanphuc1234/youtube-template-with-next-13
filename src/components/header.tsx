import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MyBtn from './my_btn';

export default function AppHeader() {
  return (
    <div className="flex justify-between w-full min-h-12 py-2 px-4 bg-white">
      <BuildLogo />
      <BuildInput />
      <div>Account</div>
    </div>
  );
}

function BuildLogo() {
  return (
    <div className="flex justify-center">
      <MyBtn icon={faBars} />
      <div className="leading-10 ml-5">
        <Link href="/">
          <FontAwesomeIcon
            className="mr-1 text-red-600 text-xl inline-block"
            icon={faYoutube}
          />
          <p className="inline-block text-lg">Youtube</p>
        </Link>
      </div>
    </div>
  );
}

function BuildInput() {
  return (
    <form className="flex w-2/6 relative">
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="w-10/12 border-solid border rounded-l-full focus:outline-none focus:border-blue-600 px-4"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 w-2/12 h-full text-black bg-gray-500/20 rounded-r-full hover:bg-gray-500/40 focus:outline-none"
      >
        <FontAwesomeIcon
          // className="mr-1 text-red-600 text-xl inline-block"
          icon={faSearch}
        />
      </button>
    </form>
  );
}
