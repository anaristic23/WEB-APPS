
const App = (props) => {
    return (
        <div>
            <Header />
            <MainContent listOfUsers={props.data} />
            <Footer />
        </div>
    )
}

const Header = () => {
    return <h1>React Users</h1>
}

const MainContent = (props) => {
    const user = props.listOfUsers.map((list, email) => {
        return <Posts key={email} userName={list.name.first} userEmail={list.email} userAge={list.dob.age} userPicture={list.picture.thumbnail} />
    })
    return (
        <div>
            <Posts />
            {user}
        </div>
    )
}

const Posts = (props) => {
    return (
        <div>
            <p>{props.userName}</p>
            <p>{props.userEmail}</p>
            <p>{props.userAge}</p>
            <img src={props.userPicture} width="50" height="50" />
        </div>
    )
}

const Footer = () => {
    return <p>text</p>
}

const root = document.querySelector(".root");
ReactDOM.render(<App data={results} />, root);
