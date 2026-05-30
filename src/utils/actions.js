import { toast } from "react-toastify";
import { customFetch, formatPrice } from ".";
import { redirect } from "react-router-dom";
import { loginUser, logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errmsg =
      error?.response?.data?.error?.message ||
      "please double check your credential ";
    toast.error(errmsg);
  }
  return null;
};

export const loginAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local ", data);
      toast.success("logged in successfully");
      store.dispatch(loginUser(response.data));
      return redirect("/");
    } catch (error) {
      const errmsg =
        error?.response?.data?.error?.message ||
        "please double check your credential ";
      toast.error(errmsg);
    }
    return null;
  };

export const checkoutAction =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      const errmsg =
        error?.response?.data?.error?.message ||
        "please double check your credential ";
      toast.error(errmsg);
      console.log(error);
      if (error.response.status === 401 || error.response.status === 403) {
        store.dispatch(logoutUser());
        store.dispatch(clearCart());
        return redirect("/login");
      }
      return null;
    }
  };
