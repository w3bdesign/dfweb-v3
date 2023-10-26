import { groq } from "next-sanity"; 

const navigation = groq`
"navigation": *[_type == "Links"]{id, Text, Url} | order(id asc)`;

const projects = groq`
"projects": *[_type == "project"]{  ...,  "categoryname": projectcategory->name, "imageurl": projectimage.asset->url} | order(id asc)
`;

const categories = groq`
"categories": *[_type == "category"]{ id, name } | order(id asc) 
`;

const pageContent = groq`
"pageContent": *[_type == 'page' && title match 'Hjem']{"id": _id, title, hero, content}
`;

export const navigationQuery = groq`
{ 
  ${navigation}
}
`;

export const indexQuery = groq`
{
  ${pageContent},
  ${navigation}
}
`;

export const projectQuery = groq`
  {
    ${projects},
    ${categories},
    ${navigation}
  }
`;
