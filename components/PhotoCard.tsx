import React from 'react';
import dayjs from 'dayjs';
import { GalleryNode } from 'types';

type Props = {
  photo: GalleryNode;
};

const PhotoCard = ({ photo }: Props): JSX.Element => {
  const {
    node: { title, createdAt, photo: galleryPhoto },
  } = photo;

  return (
    <div key={title} className="align-middle rounded-full">
      <h1 className="mb-8 text-3xl font-semibold">{title}</h1>
      <img src={galleryPhoto.url} alt={title} width="50%" height="50%" />
      <span>{dayjs(createdAt).format('MMM DD YYYY')}</span>
    </div>
  );
};

export default PhotoCard;
