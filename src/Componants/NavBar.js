import './Navbar.css'
const Homepage=()=>{
    return(
        <div className='navHead'>
            <p className='nav_head'>Shopping Cart</p>
            <div className='cart_div'>
            <i className="fa-solid fa-cart-shopping cart"></i>
            <span className='countItem'>0</span>
            </div>
        </div>
    )
    }
    export default Homepage;