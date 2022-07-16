import { request } from "graphql-request";

const url =
  "https://api-eu-central-1.hygraph.com/v2/cl5nrcohx12eh01ulef16f1sf/master";

export const getProjects = async () => {
  const { projects } = await request(
    url,
    `
    {
      projects {
        title
        description
        image {
          url
        }
        tags
        color
      }
    }    
    `
  );
  return projects;
};

export const getTags = async () => {
  const { __type } = await request(
    url,
    `
    {
      __type(name: "Tags") {
        enumValues {
          name
        }
      }
    }
    `
  );

  const data = __type.enumValues.sort((a, b) => {
    return a.name.toLowerCase() < b.name.toLowerCase()
      ? -1
      : a.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : 0;
  });
  return data;
};
