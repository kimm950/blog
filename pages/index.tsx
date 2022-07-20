import type { NextPage, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { PostCard, Categories, PostWidget } from 'components';
import { getPosts } from 'services';

export type Photo = {
  url: string;
};

export type Author = {
  bio: string;
  id: string;
  name: string;
  photo: Photo;
};

export type Category = {
  name: string;
  slug: string;
};

export type FeaturedImage = {
  url: string;
};

export type Node = {
  author: Author;
  categories: Category[];
  createdAt: string | Date;
  excerpt: string;
  featuredImage: FeaturedImage;
  slug: string;
  title: string;
};

export type PostNode = {
  node: Node;
};

type Props = {
  posts: PostNode[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Kimm's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => {
            return <PostCard post={post.node} key={post.node.title} />;
          })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories />
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps(): Promise<
  Promise<GetStaticPropsResult<Props>>
> {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
