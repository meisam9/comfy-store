import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartItemList = useSelector((state) => state.cartState.cartItems);

  return (
    <>
      {cartItemList.map((cartItem) => {
        return <CartItem key={cartItem.cartID} cartItem={cartItem} />;
      })}
    </>
  );
};
export default CartItemList;
