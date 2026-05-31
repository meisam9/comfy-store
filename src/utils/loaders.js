import { redirect } from "react-router-dom";
import { customFetch } from "./index";
import { toast } from "react-toastify";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
const url = "/products?featured=true";
// Add this helper at the top of loaders.js
const shouldFetch =
  import.meta.env.VERCEL_SKIP_LOADERS !== "true" &&
  typeof window !== "undefined";
const featuredProductQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};
export const landingLoader = (queryClient) => async () => {
  const res = await queryClient.ensureQueryData(featuredProductQuery);
  const products = res.data.data;
  return { products };
};

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};
export const singleProductLoader =
  (queryClient) =>
  async ({ params }) => {
    const res = await queryClient.ensureQueryData(
      singleProductQuery(params.id),
    );
    return { product: res.data.data };
  };

const allProductsQuery = (queryparams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryparams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch("/products", {
        params: queryparams,
      }),
  };
};
export const productsLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const res = await queryClient.ensureQueryData(allProductsQuery(params));
    const products = res.data.data;
    const meta = res.data.meta;
    return { products, meta, params };
  };

export const checkoutLoader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) return redirect("/login");
  return null;
};
const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};
export const ordersLoader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) return redirect("/login");
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user),
      );
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errmsg =
        error?.response?.data?.error?.message ||
        "please double check your credential ";
      toast.error(errmsg);
      console.log(error);
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        store.dispatch(logoutUser());
        store.dispatch(clearCart());
        return redirect("/login");
      }
      return null;
    }
  };

export const loginLoader = (store) => () => {
  const user = store.getState().userState.user;
  if (user) return redirect("/");
  return null;
};
export const registerLoader = (store) => () => {
  const user = store.getState().userState.user;
  if (user) return redirect("/");
  return null;
};
