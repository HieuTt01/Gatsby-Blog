import React,{ useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Prism from "prismjs";
// import Prismcode from "./prism" 

export default ({ data }) => {
  const post = data.markdownRemark;
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Layout>
    {/* <Prismcode language="js" code={post.html}/> */}
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`