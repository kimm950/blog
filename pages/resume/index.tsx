import React from 'react';
import { workExperiences, skillSet, educations, languages } from './data';

type ResumeProps = {
  // TODO: IMPLEMENT FUNCTIONALITY TO MAKE data.ts ADJUSTABLE FROM THE HEADLESS CMS
};

export default function Resume({}: ResumeProps) {
  return (
    <main className="container mx-auto px-10 mb-8">
      <header>
        <h1 className="font-bold text-4xl">Hyun Sung Kim</h1>
      </header>

      <section className="work-experience my-5">
        <h2 className="font-bold text-xl uppercase">Work experiences</h2>
        {workExperiences.map((work) => {
          return (
            <>
              <h3 className="font-bold text-lg">{work.name}</h3>
              {work.details.map((detail) => {
                return (
                  <div className="mb-2">
                    <p className="font-bold text-red-600 ">{detail.position}</p>
                    <time className="font-bold text-gray-500">
                      {detail.time}
                    </time>
                    <p>{detail.description}</p>
                  </div>
                );
              })}
            </>
          );
        })}
      </section>

      <section className="skill my-5">
        <h2 className="font-bold text-xl uppercase">Skills</h2>
        <div className="flex justify-between">
          {skillSet.map((skill) => {
            return (
              <div>
                <h3 className="font-bold text-lg">{skill.area}</h3>
                <ul>
                  {skill.techStacks.map((techStack) => {
                    return <li>{techStack}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="education my-5">
        <h2 className="font-bold text-xl uppercase">Education</h2>
        {educations.map((school) => {
          return (
            <>
              <h3 className="font-bold text-lg">{school.name}</h3>
              <time className="font-bold text-gray-500">{school.time}</time>
              <p>{school.degree}</p>
            </>
          );
        })}
      </section>

      <section className="language my-5">
        <h2 className="font-bold text-xl uppercase">Languages</h2>
        <ul>
          {languages.map((lang) => {
            return <li>{lang}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}

// export async function getStaticProps(): Promise<
//   GetStaticPropsResult<GalleryProps>
// > {
//   const photos = (await getPhotos()) || [];

//   return {
//     props: { photos },
//     revalidate: 10,
//   };
// }
