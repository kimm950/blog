import React from 'react';
import type { GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { PostNode } from 'types';
import { PostCard, Categories, Spinner } from 'components';
import { getCategories, getCategoryPost } from 'services/index';
import path from 'path';

type Props = {
  posts: PostNode[];
};

const CategoryPost = ({ posts }: Props): JSX.Element => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;

export async function getStaticProps({
  params,
}: any): Promise<GetStaticPropsResult<Props>> {
  const posts = (await getCategoryPost(params.slug)) || [];

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map(({ slug }: any) => ({ params: { slug } })),
    fallback: true,
  };
}
