import { Fragment } from 'react';
import Reset from '../components/Reset';

const ResetPage = props => (
  <Fragment>
    <p>Reset Your Password</p>
    <Reset resetToken={props.query.resetToken} />
  </Fragment>
);

export default ResetPage;
