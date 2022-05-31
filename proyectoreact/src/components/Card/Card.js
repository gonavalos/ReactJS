import './css/Card.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState,useEffect } from 'react'
import { getProducts } from '../../asyncmock'

const Card = ({id, name, price, img , description}) => {
  const[ product, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(response =>{
      setProducts(response)
    })

  }, [])
  return(
    <div className="product">

      {/* <img class="product__image" src="./img/img-eccomerce/tomahawk2.jpg"></img> */}
      {product.map(product => <img key={product.id} className="product__image" src={product.img}></img>)}
      {/* <h1 class="product__title">Tomahawk Steak</h1> */}
      {product.map(product => <h1 key={product.id} className="product__title">{product.name}</h1>)}
      <hr />
      {/* <p>Es un filete grueso con costilla y una presentación impresionante, que poco a poco se ha ido ganando su estatus dentro de la carne de vaca. La gran infiltración de grasa intramuscular (marmoleado) e intermuscular junto con el hueso de la costilla le confiere un gran sabor y una jugosidad excepcional.</p> */}
      {product.map(product => <p key={product.id} className="product__title">{product.description}</p>)}
      <ItemCount />
    </div>

  )
}
export default Card
