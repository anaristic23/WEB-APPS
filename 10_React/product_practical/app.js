const products = [
    "apples",
    "banana",
    "kiwi",
    "orange",
    "grejp"
]

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Products: </p>
        </div>
    )
}

const ProductList = (props) => {

    const myProducts = props.productList.map((product, index) => {
        return <ProductItem key={index} productName={product} />
    })

    return (
        <div>
            <Title />
            {myProducts}
        </div>
    )
}

const Title = () => {
    return <h3>Product list</h3>
}

const ProductItem = (props) => {
    return (<h4>{props.productName}</h4>)
}

const App = () => {
    return (
        <div>
            <Header title="bla" />
            <ProductList productList={products} />
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root)