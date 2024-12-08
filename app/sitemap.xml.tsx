import { glob } from "glob";

const Sitemap = () => {
  return null;
};

//export const getServerSideProps = async ({ res }) => {
  //const BASE_URL = "http://localhost:3000";

  //const pagesDir = "pages/**/*.tsx";
  /*let pagesPaths = await glob.sync(pagesDir);

  pagesPaths = pagesPaths
  .filter((path: any) => !path.includes("["))
  .filter((path: any) => !path.includes("/_"))
  .filter((path: any) => !path.includes("404"));

  const dynamicPaths = [`${BASE_URL}/product/1`, `${BASE_URL}/product/2`];

  const allPaths = [...pagesPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};*/

export default Sitemap;