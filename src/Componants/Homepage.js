import './Homepage.css'
import Products from '../Data/Products'
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../Redux/Slices/CartList';


const Homepage=()=>{
    let navigate=useNavigate()
    const dispatch=useDispatch()
    const { cart }=useSelector( state => state.cart||{})
return(
    <div>
    <p className="our_items_head">Our Items</p>
    <div className='parent'>
            {
                Products.map((product,index)=><div key={index} className='child'>
                <img src={product.image} className='imageCard'/>
                <p className='title'>{product.title}</p>
                <p className='des'>{product.description}</p>
                <p className='price'>Price: {product.price}
                <span className='total'>{product.total}</span>
                </p>
                 <button className='add_to_cart' onClick={()=>{
                     console.log('click',product);
                     dispatch(updateCart(product))
                     console.log('sedwef',cart);
                 }}>ADD TO CART</button> 
                </div>)
        
            }
    </div>
</div>
)
}
export default Homepage;