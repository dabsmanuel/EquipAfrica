import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import './blog.css'

const query = `
{
  equipBlogCollection {
    items {
      blogTitle
      blogImage{
        title
        url
      }
      blogSummary
      createdDate
      blogAuthor
      publish
      postContent
    }
  }
}
`;

function BlogList() {
  const [page, setPage] = useState(null);

  useEffect(() => {

    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/34t7a7gxwkpm/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.equipBlogCollection.items);
      });
  }, []);

  if (!page) {
    return "Loading...";
  };

  // render the fetched Contentful data
  return (
    <div className="blog containers">
      <h1>Welcome to Equip Blog</h1>
      <div className="blog-body">
        {page.map((el) => {
          return (
            <article className="blog-card" key={el.id}>
              <div className="image-cont">
                <img
                  src={el.blogImage.url}
                  className="App-logo"
                  title={el.blogImage.title}
                  alt="logo"
                  // height="260"
                  // width="250"
                />
              </div>
              <div className="blog-content">
                <h1>{el.blogTitle}</h1>
                <small>{el.createdDate}</small>
                <Link className="btn-sec">Read</Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
