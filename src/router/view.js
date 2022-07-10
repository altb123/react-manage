import HomeView from '../pages/homeView/index.js';
import OrderList from '../pages/orderList/index.js';

const routerList = [
    {
        path: '/',
        component: <HomeView />,
    },
    {
        path: 'orderList',
        component: <OrderList />,
    }
]

export { routerList };