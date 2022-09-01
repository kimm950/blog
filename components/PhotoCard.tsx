import React, { useState } from 'react';
import dayjs from 'dayjs';
import { MdCalendarToday } from 'react-icons/md';
import { GalleryNode } from 'types';
import { Modal } from 'components';

type Props = {
  photo: GalleryNode;
};

const PhotoCard = ({ photo }: Props): JSX.Element => {
  const {
    node: { title, createdAt, photo: galleryPhoto, description },
  } = photo;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div
      className="align-middle mb-8 shadow-md p-5 rounded-lg flex flex-col justify-between column cursor-pointer"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      <img className="pb-4" src={galleryPhoto.url} alt={title} />
      <div>
        <p className="capitalize">{title}</p>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(!isModalOpen)} title={title}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <img
              src={galleryPhoto.url}
              alt={title}
              width="auto"
              height="100%"
            />
            <div>
              <div className="flex items-center font-medium text-gray-700 mb-2">
                <MdCalendarToday className="mr-2" />
                <span>{dayjs(createdAt).format('MMM DD YYYY')}</span>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PhotoCard;
