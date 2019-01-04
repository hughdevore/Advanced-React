// import { mount } from 'enzyme';
// import wait from 'waait';
// import toJSON from 'enzyme-to-json';
// import NProgress from 'nprogress';
// import Router from 'next/router';
// import { MockedProvider } from 'react-apollo/test-utils';
// import { ApolloConsumer } from 'react-apollo';
// import TakeMyMoney, { CREATE_ORDER_MUTATION } from '../components/TakeMyMoney';
// import { CURRENT_USER_QUERY } from '../components/User';
// import { fakeUser, fakeCartItem } from '../lib/testUtils';

// Router.router = { push() {} };

// const mocks = [
//   {
//     request: {
//       query: CREATE_ORDER_MUTATION
//     },
//     result: {
//       data: {
//         me: {
//           ...fakeUser(),
//           cart: [fakeCartItem()]
//         }
//       }
//     }
//   }
// ];

// describe('<TaleMyMoney />', () => {
//   it('renders and matches the snapshot', async () => {
//     const wrapper = mount(
//       <MockedProvider mocks={mocks}>
//         <TakeMyMoney />
//       </MockedProvider>
//     );
//   });
//   await wait();
//   wrapper.update();

// });
