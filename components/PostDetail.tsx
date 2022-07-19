import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import { Post } from './../pages/post/[slug]';

export enum ContentType {
  HeadingThree = 'heading-three',
  HeadingFour = 'heading-four',
  Paragraph = 'paragraph',
  Image = 'image',
}

const PostDetail = ({ post }: Post) => {
  const getContentFragment = (
    index: number,
    text: string,
    obj: any,
    type?: string
  ) => {
    let modifiedText: any = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case ContentType.HeadingThree:
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
        );
      case ContentType.Paragraph:
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        );
      case ContentType.HeadingFour:
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h4>
        );
      case ContentType.Image:
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white shodow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-mb mb-6">
        <img
          className="object-top h-full w-full rounded-t-lg"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex item-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
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
            <span className="align-middle">
              {dayjs(post.createdAt).format('MMM DD YYYY')}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((obj, idx) => {
          const children = obj.children.map((item, itemIdx) => {
            return getContentFragment(itemIdx, item.text, item);
          });
          return getContentFragment(idx, children, obj, obj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
