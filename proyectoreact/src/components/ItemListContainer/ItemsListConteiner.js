
import React, { useState } from 'react'
import '../NavBar.css'
import '../div.css'

const ItemListConteiner = (props) => {

    return(
        <div>
            <h2>
                {props.gretting}
            </h2>
            <div className='div2'></div>
            <div className='div2'></div>
            <div className='div2'></div>
            <div className='div2'></div>
            <div className='div2'></div>
            <div className='div2'></div>
        </div>
    )
}

export default ItemListConteiner