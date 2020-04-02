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

// export const QUERY = gql`
// query{
//   posts{
//     id
//     body
//     createdAt
//   }
// }

// `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post,id }) => {
  console.log("ID ",id)
  return JSON.stringify(post)
}