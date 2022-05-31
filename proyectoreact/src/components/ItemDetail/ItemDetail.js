import Item from '../Item/Item'

const ItemDetail = (products) => {

    const { id ,name, img, price, stock, description } = product
    


    return (
        
            
        <div className="product">
            <img className="product__image" src={img}></img>
            <h1 className="product__title">{name}</h1>
            <hr />
            <p> Precio $ {price} </p>
            <p>{description}</p>
            <ItemCount stock={stock}/>
        </div>




    )

}
export default ItemDetail