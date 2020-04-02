// web/src/components/BlogPostsCell/BlogPostsCell.js
import { Link, routes } from '@redwoodjs/router'
export const QUERY = gql`
query{
  posts{
    title
    id
    body
    createdAt
  }
}
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  // return JSON.stringify(blogPosts)
  console.log(posts)
  return posts.map((post) => (
    <article key={post.id}>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
    </article>
  ))

}