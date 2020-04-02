import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({id}) => {
  console.log("The page is ",id)
  return (
    <BlogLayout>
      <BlogPostCell id={id}/>
    </BlogLayout>
  )
}

export default BlogPostPage