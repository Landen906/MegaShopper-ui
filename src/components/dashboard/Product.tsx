import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import { ItemType } from '../../models/item'

export const Product = () => {
    const products = useContext(GlobalContext)
    const params = useParams();
    const product = products.find((p: ItemType) => `${p.id}` === params.id);
    console.log(product)
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.title} />
        <span>{product.price}</span>
    </div>
  )
}
