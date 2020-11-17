import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import CardSmall from "../components/cardSmall"
import Featured from "../components/featured"
import Search from "../components/search"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      tagsGroup: allMarkdownRemark(limit: 100) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              category
              tags
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const [queryType, query] = props.location.search.split("=")

  if (queryType === "?s" && query.length > 0) {
    return (
      <Layout>
        <Search
          markdown={data.allMarkdownRemark}
          tagsGroup={data.tagsGroup}
          query={query}
        />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Home" slug="/" />
        <Featured markdown={data.allMarkdownRemark} />
        <div className="flex-layout">
          <div className="cards">
            <h2 id="articles-title">Últimas noticias</h2>
            {data.allMarkdownRemark.edges.map(({ node }, index) => {
              if (index < 3) {
                return null
              } else {
                return (
                  <Card
                    key={node.id}
                    slug={node.fields.slug}
                    frontmatter={node.frontmatter}
                  />
                )
              }
            })}
          </div>
          <div className="sidebar">
            <h2 className="sidebar-header">Receba por E-mail</h2>
            <div className="sidebar-emails">
              <h2>Saiba tudo em primeira mão</h2>
              <p>Receba promoções, materias e muito mais</p>
              <form name="contact" method="POST" data-netlify="true">
                <input type="text" id="email" aria-label="email" />
                <input
                  type="submit"
                  value="Subscribe"
                  aria-label="subscribe"
                />{" "}
                <input type="hidden" name="form-name" value="contact"></input>
              </form>
              <span>Receba atualizações semanais, podendo cancelar a sua inscrição a qualquer momento</span>
            </div>
            <h2 className="sidebar-header">Mais populares</h2>
            <div>
              {data.allMarkdownRemark.edges.map(({ node }, index) => {
                if (index > 2 && index < 5) {
                  return (
                    <CardSmall
                      key={node.id}
                      slug={node.fields.slug}
                      frontmatter={node.frontmatter}
                    />
                  )
                } else return null
              })}
            </div>
          </div>
        </div>
        <Link to="/archive/2" id="archive-link">
          Leia mais
          <FaAngleDoubleRight className="icon-right" />
        </Link>{" "}
        <br />
      </Layout>
    )
  }
}

export default IndexPage
