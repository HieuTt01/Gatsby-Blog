import React from "react";
import "./layout.css";
import Menu from "./menu";
// import Sidebar from "./sidebar";
// import PrismCode from "../templates/prism"
import { StaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          },
          topics: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
            edges {
              node {
                frontmatter {
                  categories
                  tags
                }
                }
            }
          }
        }
      `}
      render={data => (
        <div className="app">
          <Menu title={data.site.siteMetadata.title} />
          <div className="main">
            <div className="content">
              {children}
            </div>
            {/* <div className="slidebar">
              <Sidebar edges={data.topics.edges}/>
            </div> */}
          </div>
          <div className="footer">
            <div className="footer__icon"> Home16 © 2 0 2 0</div>
           </div>
        </div>
      )}
    />
  )
}