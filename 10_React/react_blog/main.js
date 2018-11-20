
const Posts = (props) => {
    return (
        <div>
            <h3>{props.postName}</h3>
            <p>{props.postBody}</p>
        </div>
    )
}

const MainContent = (props) => {
    const myPost = props.blogPost.map((blog, index) => {
        return <Posts key={index} postName={blog.title} postBody={blog.body} />
    })

    return (
        <div>
            <Posts />
            {myPost}
        </div>
    )
}

const Header = () => {
    return (
        <h1>My React Blog</h1>
    )
}


const App = (props) => {
    return (
        <div>
            <Header />
            <MainContent blogPost={props.podaci} />
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App podaci={data} />, root)