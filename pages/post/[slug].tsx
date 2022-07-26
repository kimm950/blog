import React from 'react';
import type { NextPage, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from 'services';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  CommentsForm,
  Comments,
  Spinner,
} from 'components';

import { Author as AuthorType, Category, FeaturedImage } from 'types';

type Content = {
  raw: any;
};

type PostItem = {
  author: AuthorType;
  categories: Category[];
  content: Content;
  createdAt: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  slug: string;
  title: string;
};

export type Post = {
  post: PostItem;
};

const PostDetails: NextPage<Post> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    <Spinner />;
  }
  if (!post) return undefined;
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              categories={post.categories.map((category) => category.slug)}
              slug={post.slug}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({
  params,
}: any): Promise<GetStaticPropsResult<Post>> {
  const res = (await getPostDetails(params.slug)) || null;
  return {
    props: { post: res },
  };
}

export async function getStaticPaths() {
  const posts = (await getPosts()) || [];
  return {
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: true,
  };
}
