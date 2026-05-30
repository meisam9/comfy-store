import { useLoaderData } from "react-router-dom";
import {
  ComplexPaginationContainer,
  OrderList,
  SectionTitle,
} from "../components";

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta?.pagination?.total < 1) {
    return <SectionTitle text="please make an order" />;
  }
  return (
    <>
      <SectionTitle text="your orders" />
      <OrderList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
