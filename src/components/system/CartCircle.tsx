import "@/styles/CartCircle.modules.scss";

import React from 'react';

const CartCircle = ({
  quantity=0
}) => {
  return (quantity > 0 )?(
    <div className="cart-circle cursor-p">
      {quantity}
    </div>
  ): null;
};

export default CartCircle;