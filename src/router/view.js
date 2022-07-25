import HomeView from '../pages/homeView/index.js';
import OrderList from '../pages/orderList/index.js';
import ReturnManage from '../pages/returnManage/index.js';
import ProduceList from '../pages/produceList/index.js';
import ExamineManage from '../pages/examineManage/index.js';

const routerList = [
    {
        path: '/',
        component: <HomeView />,
    },
    {
        path: 'orderList',
        component: <OrderList />,
    },
    {
        path: 'returnManage',
        component: <ReturnManage />,
    },
    {
        path: 'produceList',
        component: <ProduceList />,
    },
    {
        path: 'examineManage',
        component: <ExamineManage />,
    }
]

export { routerList };