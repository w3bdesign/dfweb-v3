const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

interface IData {
  toString: () => string;
}

interface IReq {
  headers: { host: any };
}

interface IRes {
  writeHead: (arg0: number, arg1: { "Content-Type": string }) => void;
  end: (arg0: any) => void;
}

interface ILinks {
  url: string;
  changefreq: string;
  priority: number;
}

const siteMapGenerator = async (req: IReq, res: IRes) => {
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
