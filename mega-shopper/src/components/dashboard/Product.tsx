import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemType } from '../../models/item'
import { GlobalContext } from '../../context/GlobalState'

export const Product = () => {
    const products = useContext(GlobalContext)
    const params = useParams();
    const product = products.find((p: ItemType) => `${p.id}` === params.id);
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.title} />
        <span>{product.price}</span>
    </div>
  )
}
