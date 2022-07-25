import React from 'react';
import "../../styles/CartCircle.modules.scss";

const CartCircle = ({
  quantity=0
}) => {
  return (quantity > 0 )?(
    <div className="cart-circle">
      {quantity}
    </div>
  ): null;
};

export default CartCircle;