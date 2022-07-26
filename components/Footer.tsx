import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import gitHubIcon from 'public/github.svg';

export default function Footer(): JSX.Element {
  return (
    <div className="static bottom-0 w-full flex justify-between text-xs text-gray-600 p-4">
      <div></div>
      <div>Copyright © {dayjs().year()} Hyun Sung Kim</div>
      <Link href="https://github.com/kimm950">
        <Image
          src={gitHubIcon}
          alt="ny github"
          width="20px"
          height="20px"
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
}
