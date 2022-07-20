import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { getComments } from 'services/index';

type Props = {
  slug: string;
};

type Comment = {
  name: string;
  email: string;
  createdAt: string;
  comment: string;
};

const Comments = ({ slug }: Props) => {
  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);

  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((commentObj) => {
            const { name, createdAt, comment, email } = commentObj;

            return (
              <div
                key={createdAt}
                className="border-b border-gray-100 pb-4 mb-4"
              >
                <p className="mb-4">
                  <span className="font-semibold">{name}</span> on{' '}
                  <span>{dayjs(createdAt).format('MMM DD, YYYY')}</span>
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">
                  {parse(comment)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
