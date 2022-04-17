import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

import type { NextApiRequest, NextApiResponse } from "next";

interface IData {
  toString: () => string;
}

interface ILinks {
  url: string;
  changefreq: string;
  priority: number;
}

const siteMapGenerator = async (req: NextApiRequest, res: NextApiResponse) => {
  // An array with your links
  const links: ILinks[] = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/prosjekter", changefreq: "daily", priority: 0.3 },
    { url: "/cv", changefreq: "daily", priority: 0.3 },
    { url: "/kontakt", changefreq: "daily", priority: 0.3 }
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml"
  });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data: IData) =>
    data.toString()
  );

  res.end(xmlString);
};

export default siteMapGenerator;
