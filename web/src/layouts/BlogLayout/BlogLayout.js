import { Link, routes,usePageLoadingContext } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const {loading}=usePageLoadingContext()
  console.log("Loading ",loading)
  return (

    <div className="bg-gray-300 text-gray-700">
      <header>
        <h1 className="">Redwood JS Blog Test </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.posts()}>Posts</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-40 pb-4">
        <div>
          {loading&&  <div>Spinner in here</div>}
          </div>
          <div>
            {children}</div>
            </main>
    </div>
  )
}

export default BlogLayout