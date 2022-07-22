import React, { useState } from 'react';
import dayjs from 'dayjs';
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
      key={title}
      className="align-middle mb-8 shadow-md p-8 rounded-lg flex flex-col justify-between column"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      <img className="pb-4" src={galleryPhoto.url} alt={title} />
      <div>
        <p>{title}</p>
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
              <div className="flex font-medium text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
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
