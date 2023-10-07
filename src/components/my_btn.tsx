'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IProps {
  // onClick: VoidFunction;
  icon: any;
  // textColor is not require
  textColor?: String;
}
//                                       set default textColor
export default function MyBtn({ icon, textColor = 'text-black' }: IProps) {
  return (
    <>
      <button
        className={
          'w-10 h-10 bg-transparent hover:bg-gray-500/20 rounded-full text-xl ' +
          textColor
        }
        // onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
}
