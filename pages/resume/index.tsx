import React from 'react';
import {
  workExperiences,
  skillSet,
  educations,
  languages,
} from 'lib/resumeData';

type ResumeProps = {
  // TODO: IMPLEMENT FUNCTIONALITY TO MAKE data.ts ADJUSTABLE FROM THE HEADLESS CMS
};

export default function Resume({}: ResumeProps): JSX.Element {
  return (
    <main className="container mx-auto px-10 mb-8">
      <header className="">
        <h1 className="font-bold text-4xl text-white p-2 bg-red-600 w-fit">
          Hyun Sung Kim
        </h1>
      </header>

      <section className="education mb-5 mt-10">
        <h2 className="font-bold text-xl uppercase">Education</h2>
        {educations.map((school) => {
          return (
            <>
              <h3 className="font-bold text-lg">{school.name}</h3>
              <time className="font-bold text-gray-500 text-sm">
                {school.time}
              </time>
              <p>{school.degree}</p>
            </>
          );
        })}
      </section>

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
                    <time className="font-bold text-gray-500 text-sm">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          {skillSet.map((skill) => {
            return (
              <div>
                <h3 className="font-bold text-lg">{skill.category}</h3>
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

// TODO: IMPLEMENT FUNCTIONALITY TO MAKE resumeData.ts ADJUSTABLE FROM THE HEADLESS CMS
// export async function getStaticProps(): Promise<
//   GetStaticPropsResult<ResumeProps>
// > {
//   const photos = (await getResumeData()) || [];

//   return {
//     props: { resumeData },
//     revalidate: 10,
//   };
// }
