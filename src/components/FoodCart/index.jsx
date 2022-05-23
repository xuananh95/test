import React from 'react';
import { SFoodCart } from './styles';

const FoodCart = ({ name, description, price, img }) => {
    return (
        <SFoodCart className='item'>
            <div className="item-left">
                <img className="image" src={img} alt={name} width="100" height="100" />
                <div className='info'>
                    <span className='food-name'>{name}</span>
                    <span className='food-desc'>{description}</span>
                    <span className='food-price'>$ {price}</span>
                </div>

            </div>

            <div className='item-right'>
                <div className="amount">
                    <label>Amount</label>
                    <input type="number" />
                </div>
                <button className="button-add">+ Add</button>
            </div>

        </SFoodCart>
    )
}

export default FoodCart