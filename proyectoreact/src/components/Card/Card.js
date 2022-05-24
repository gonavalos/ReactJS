import './css/Card.css'
import ItemCount from '../ItemCount/ItemCount'

const Card = () => {


  return(
    <div class="product">

      <img class="product__image" src="./img/img-eccomerce/tomahawk2.jpg"></img>
      <h1 class="product__title">Tomahawk</h1>
      <hr />
      <p>The Nike Roshe One Print Men's Shoe offers breathability, lightweight cushioning and bold style with an injected unit midsole and colorful mesh upper. </p>
      <ItemCount />
    </div>

  )
}

export default Card
