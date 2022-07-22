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

export type GalleryPhoto = {
  id: string;
  url: string;
};

export type GalleryNode = {
  node: {
    createdAt: string;
    photo: GalleryPhoto;
    title: string;
  };
};
