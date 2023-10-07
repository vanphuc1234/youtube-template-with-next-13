import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faSearch,
  faVideo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import MyBtn from './my_btn';

export default function AppHeader() {
  return (
    <div className="flex justify-between w-full h-14 py-2 px-4 bg-white">
      <BuildLogo />
      <BuildInput />
      <BuildAction />
    </div>
  );
}

function BuildLogo() {
  return (
    <div className="w-5/12 flex justify-start lg:w-2/12 sm:w-3/12">
      <MyBtn icon={faBars} />
      <div className="leading-10 ml-1 md:ml-3 sm:ml-2 lg:ml-5">
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
    <form className="flex w-3/6 relative xl:w-5/12 2xl:w-4/12">
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="w-9/12 border-solid border rounded-l-full focus:outline-none focus:border-blue-600 px-4"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 w-3/12 h-full text-black bg-gray-500/20 rounded-r-full hover:bg-gray-500/40 focus:outline-none"
      >
        <FontAwesomeIcon
          // className="mr-1 text-red-600 text-xl inline-block"
          icon={faSearch}
        />
      </button>
    </form>
  );
}

function BuildAction() {
  return (
    <div className="w-3/12 flex justify-end md:w-2/12">
      <MyBtn icon={faVideo} />
      <MyBtn icon={faBell} />
      <button>
        <FontAwesomeIcon className="w-10 h-10 text-xl " icon={faUser} />
      </button>
    </div>
  );
}
