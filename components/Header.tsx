import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getCategories } from 'services';
import { Category } from 'types';

const Header = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <div className="contianer mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-bvlack-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">
              My blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => {
            return (
              <Link key={category.name} href={`/category/${category.slug}`}>
                <span className="cursor-pointer md:float-right mt-2 align-middle text-black ml-4">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
