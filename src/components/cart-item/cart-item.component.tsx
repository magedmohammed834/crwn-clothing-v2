import { CartItem as TCartItem } from "../../store/cart/cart.types";
import { FC } from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
export type CartItemProp = {
  cartItem: TCartItem;
};
const CartItem: FC<CartItemProp> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
