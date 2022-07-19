import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Category } from '../pages';
import { getRecentPosts, getSimilarPosts } from '../services';
import { Node } from '../pages';

type Props = {
  categories?: string[] | undefined;
  slug?: string | undefined;
};

function PostWidget({ categories, slug }: Props) {
  const [relatedPosts, setRelatedPosts] = useState<Node[]>([]);

  useEffect(() => {
    if (slug && categories) {
      getSimilarPosts({ categories, slug }).then((res) => setRelatedPosts(res));
    }
    getRecentPosts().then((res) => setRelatedPosts(res));
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'related' : 'recent'}
      </h3>
      {relatedPosts.map((post) => {
        return (
          <div key={post.title} className="flex items-center w-full">
            <div className="w-16 flex-none">
              <img
                className="align-middle rounded-full"
                src={post.featuredImage.url}
                alt={post.title}
                height="60px"
                width="60px"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {dayjs(post.createdAt).format('MMM DD YYYY')}
              </p>
              <Link
                className="text-md"
                href={`/post/${post.slug}`}
                key={post.title}
              >
                {post.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostWidget;
