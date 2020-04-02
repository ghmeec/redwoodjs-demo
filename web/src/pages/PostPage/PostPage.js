// import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

import PostCell from 'src/components/PostCell'

const PostPage = ({ id }) => {
  return (
    <BlogLayout>
      <PostCell id={id} />
    </BlogLayout>
  )
}

export default PostPage
