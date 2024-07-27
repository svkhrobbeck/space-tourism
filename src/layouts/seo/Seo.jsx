import { Helmet } from "react-helmet";

const Seo = ({ children, title = "Space Tourism", favicon = "/favicon.png" }) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta
          name="description"
          content="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {children}
    </>
  );
};

export default Seo;
