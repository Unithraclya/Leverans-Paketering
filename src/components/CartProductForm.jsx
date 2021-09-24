import React from 'react'
import CartStyle from '../css/Cart.module.css'
import PreviewPic from '../icons/previewpic.svg'


export default function CartProductForm() {
    return (
        <div className ={CartStyle.ProductGrid}>
        <span>Produkt</span><span className={CartStyle.Size}>Storlek</span>
        <span>Antal</span><span>Pris</span>
        <hr className={CartStyle.HeaderLine}/>

        <img src={PreviewPic} className={CartStyle.Previewimg} alt = 'preview'/>
        <h2 className={CartStyle.ProductTitle}>Bitter Canpari</h2>
       
        <h3 className={CartStyle.ProductPayment}>Totalt:139 kr</h3>
   </div>
    )
}
