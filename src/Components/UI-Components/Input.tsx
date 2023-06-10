import { FC, InputHTMLAttributes } from "react";
import { CiSearch } from 'react-icons/ci'

type P = {
  extraClasses: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<P> = ({ extraClasses , ...rest }) => {
  return (
    <div className="flex w-full items-center relative z-5 shadow-md">
      <input {...rest} className={"px-5 py-3 rounded-md " + extraClasses} />
      <CiSearch size={25} className="text-gray-600 absolute right-1   "/>
    </div>
  );
};

export default Input;
