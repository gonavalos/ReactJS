import './css/Card.css'
import ItemCount from '../ItemCount/ItemCount'

const Card = () => {


  return(
    <div class="product">

      <img class="product__image" src="./img/img-eccomerce/tomahawk2.jpg"></img>
      <h1 class="product__title">Tomahawk Steak</h1>
      <hr />
      <p>Es un filete grueso con costilla y una presentación impresionante, que poco a poco se ha ido ganando su estatus dentro de la carne de vaca. La gran infiltración de grasa intramuscular (marmoleado) e intermuscular junto con el hueso de la costilla le confiere un gran sabor y una jugosidad excepcional.</p>
      <ItemCount />
    </div>

  )
}

export default Card
