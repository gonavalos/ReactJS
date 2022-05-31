const products =[
    {
        id: '1',
        name: 'Tomahawk Steak',
        category: 'Signature',
        price: 1800,
        img:'./img/img-eccomerce/tomahawk2.jpg',
        stock: 35,
        description: 'Es un filete grueso con costilla y una presentación impresionante, que poco a poco se ha ido ganando su estatus dentro de la carne de vaca. La gran infiltración de grasa intramuscular (marmoleado) e intermuscular junto con el hueso de la costilla le confiere un gran sabor y una jugosidad excepcional.'
    },
    {
        id: '2',
        name: 'Entraña',
        category: 'Signature',
        price: 1000,
        img:'./img/img-eccomerce/tomahawk2.jpg',
        stock: 20,
        description: 'Otro tipo de carne'
    },
    
    

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}