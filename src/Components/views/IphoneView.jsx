import React from 'react'
// import ProductsList from '../ProductsList'
import { useParams } from "react-router-dom";
import ItemListContainer from '../Item/ItemListContatiner';

const IphoneView = () => {
  const{categoryId}=useParams();

  return (
    <div>
      <h2>iphone</h2>
      <section><ItemListContainer/></section>
    </div>
  )
}

export default IphoneView
