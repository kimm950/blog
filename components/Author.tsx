import React from 'react';
import Image from 'next/image';
import { Author as AuthorType } from './../pages';

type AuthorProps = {
  author: AuthorType;
};
const Author = ({ author }: AuthorProps) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          className="align-middle rounded-full"
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
        />
      </div>
      <h3 className="text-black my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-black text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
