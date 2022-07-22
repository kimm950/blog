import React from 'react';
import { PhotoCard } from 'components';
import { getPhotos } from 'services';
import { GetStaticPropsResult } from 'next';
import { GalleryNode } from 'types';

type GalleryProps = {
  photos: GalleryNode[];
};

export default function Gallery({ photos }: GalleryProps) {
  if (!photos) return undefined;
  return (
    <div className="container mx-auto px-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {photos?.map((photo) => {
        return <PhotoCard photo={photo} />;
      })}
    </div>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<GalleryProps>
> {
  const photos = (await getPhotos()) || [];

  return {
    props: { photos },
  };
}
