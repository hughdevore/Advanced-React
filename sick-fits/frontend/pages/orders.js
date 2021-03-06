import { Fragment } from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

const OrdersPage = props => (
  <Fragment>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </Fragment>
);

export default OrdersPage;
