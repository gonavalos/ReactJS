import { useState, useEffect } from "react";

const CountFunction = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
            
            setCount((count) => count - 500)
    }

    const increment = () => {
        setCount(count + 500)
    }
    
    



    return(
        <div className="product__btn btn">

            <span onClick={count > 0 ? decrement : ''} >-</span>
        

            <a href="#"> {count} Grs. </a>

            
             
            <span onClick={increment}>+</span>
        </div>

    )

}

export default CountFunction