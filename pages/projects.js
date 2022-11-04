import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { DATABASE_ID, TOKEN } from "../config";

export default function Projects({ projects }) {
  console.log(`projectIds: ${projects}`);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
          <title>minsan porfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-4xl font-bold sm:text-6xl">
          <span className="pr-4 text-blue-500">{projects.results.length}</span>
          Projects
        </h1>

        <div className="p-12 m-4 grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-full">
          {projects.results.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// ? 빌드 타임(처음 렌더링 될 때)에만 호출
export async function getStaticProps(context) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await response.json();

  const projectNames = projects.results.map(
    (project) => project.properties.Name.title[0].plain_text
  );
  // console.log(projectIds);
  console.log(projectNames);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}