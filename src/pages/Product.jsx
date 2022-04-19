import NavbarComp from "../components/Navbar/Navbar"
import "../styles/product.css"
import pic1 from "../assets/images/p1.png"
import pic2 from "../assets/images/p2.png"

const ProductList = [{ src: pic1, name: "Product title", price: "300" },
{ src: pic1, name: "Product title", price: "400" },
{ src: pic2, name: "Product title", price: "500" },
{ src: pic1, name: "Product title", price: "600" },
{ src: pic2, name: "Product title", price: "700" },
{ src: pic1, name: "Product title", price: "800" }]

const ProductView = ({src,name,price}) => {
    return (
        <div className="card_wp">
            <img src={src} alt="" />
            <h4>pro{name}</h4>
            <p>Price: ${price}</p>
        </div>
    )
}

const ProductPage = () => {
    return (
        <>
            <NavbarComp />

            <div className="main-wrap">
                {ProductList.map((data, index) => {
                    return (
                        <ProductView key={index} src={data.src} name={data.name} price={data.price} />
                    )
                })}
            </div>
        </>
    )
}

export default ProductPage