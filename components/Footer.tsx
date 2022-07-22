import dayjs from 'dayjs';
import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center text-xs text-gray-600 p-4 ">
      Copyright © {dayjs().year()} Hyun Sung Kim
    </div>
  );
}