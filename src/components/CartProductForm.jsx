import React from 'react'
import CartStyle from '../css/Cart.module.css'
import PreviewPic from '../icons/previewpic.svg'


export default function CartProductForm() {
    return (
        <div className ={CartStyle.ProductGrid}>
        <span>Product</span><span className={CartStyle.Size}>Size</span>
        <span>Quantity</span><span>Price</span>
        <hr className={CartStyle.HeaderLine}/>

        <img src={PreviewPic} className={CartStyle.Previewimg} alt = 'preview'/>
        <h2 className={CartStyle.ProductTitle}>Bitter Canpari</h2>
       
        <h3 className={CartStyle.ProductPayment}>Total:139 Sek</h3>
   </div>
    )
}
