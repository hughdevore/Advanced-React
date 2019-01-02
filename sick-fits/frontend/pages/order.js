import { Fragment } from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
import Order from '../components/Order';

const OrderPage = props => (
  <Fragment>
    <PleaseSignIn>
      <Order id={props.query.id} />
    </PleaseSignIn>
  </Fragment>
);

export default OrderPage;
