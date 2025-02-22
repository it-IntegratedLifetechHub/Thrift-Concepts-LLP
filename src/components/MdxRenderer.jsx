import React from "react";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => <h1 className="mdx-title" {...props} />,
  h2: (props) => <h2 className="mdx-subtitle" {...props} />,
  p: (props) => <p className="mdx-paragraph" {...props} />,
  img: (props) => <img className="mdx-image" {...props} />,
};

const MdxRenderer = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxRenderer;
