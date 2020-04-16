export const QUERY = gql`
  query($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post,id }) => {
  console.log("ID ",id)
  return(
    <div className="rw-scaffold">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <p>{post.createdAt}</p>
    </div>
  )
}