import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer(): JSX.Element {
  return (
    <div className="static bottom-0 w-full flex justify-between text-xs text-gray-600 p-4">
      <div></div>
      <div>Copyright © {dayjs().year()} Hyun Sung Kim</div>
      <div className="flex">
        <Link href="https://github.com/kimm950">
          <a target="_blank">
            <BsGithub size={25} className="cursor-pointer mr-3" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/hyun-sung-kim-67ab65128/">
          <a target="_blank">
            <BsLinkedin size={25} className="cursor-pointer" />
          </a>
        </Link>
      </div>
    </div>
  );
}
