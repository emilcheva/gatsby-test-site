import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {data.allMdx.nodes.map((item) => (
        <article key={item.id}>
          <h2>{item.frontmatter.title}</h2>
          <p>Posted: {item.frontmatter.date}</p>
          <p>
              <MDXRenderer>{item.body}</MDXRenderer>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
