import React from "react"
import Card from "./card"
import CardSmall from "./cardSmall"

const Search = ({ markdown, query }) => {
  const blogPosts = markdown.edges

  const filteredPosts = blogPosts.filter(({ node }) => {
    const { frontmatter } = node

    const titleMatch = frontmatter.title
      .toLowerCase()
      .includes(query.toLowerCase())
    const topicMatch = frontmatter.category
      .toLowerCase()
      .includes(query.toLowerCase())
    const tagsMatch = frontmatter.tags
      .map(tag => tag.toLowerCase())
      .some(tag => tag.includes(query.toLowerCase()))
    const descriptionMatch = frontmatter.description
      .toLowerCase()
      .includes(query.toLowerCase())

    return titleMatch || topicMatch || tagsMatch || descriptionMatch
  })

  return (
    <div>
      <div>
        <h2 className="page-header">
          {filteredPosts.length > 0 ? "Search results " : "No results "}
          for "<strong>{query.replace("%20", " ")}</strong>"
        </h2>
        <div className="flex-layout">
          <div className="cards">
            <h2 id="articles-title">Últimos roles</h2>
            {filteredPosts.map(({ node }, index) => {
              return (
                <Card
                  key={node.id}
                  slug={node.fields.slug}
                  frontmatter={node.frontmatter}
                />
              )
            })}
          </div>
          <div className="sidebar">
            <h2 className="sidebar-header">Receba por e-mail</h2>
            <div className="sidebar-emails">
              {/* <h2>Mailing list here</h2> */}
              <p>Fique sabendo de tudo via e-mail</p>
              <form name="contact" method="POST" data-netlify="true">
                <input type="text" id="email" aria-label="email" />
                <input
                  type="submit"
                  value="Subscribe"
                  aria-label="subscribe"
                />{" "}
                <input type="hidden" name="form-name" value="contact"></input>
              </form>
              <span>Receba promoções, noticias e muito mais...</span>
            </div>
            <h2 className="sidebar-header">Os mais populares</h2>
            <div className="sidebar-popular">
              {markdown.edges.map(({ node }, index) => {
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
      </div>
    </div>
  )
}
export default Search
