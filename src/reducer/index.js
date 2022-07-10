const initialState = {
    adminInfo: { // 默认账号、密码为空
        userName: '',
        passWord: ''
    },

    routeTabList: [], // tag页签列表默认为空

    activeRouteTab: { // 当前选中tag页签(默认为空)
        title: '',
        router: '',
        key: '',
    }
}


/**
 * @descriotion 管理用户账户信息
 * @param {Object} state 默认账号信息
 * @param {Function} action 回调方法
*/
export const todoApp = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'CHANGE_ADMIN':
            return Object.assign({}, state, {
                adminInfo: data
            });
        case 'SET_TAB_LIST':
            const arr = [...state.routeTabList];
            const ones = arr.findIndex(item => item.key === data.key);
            if (ones === -1) {
                arr.push(data);
            }
            return Object.assign({}, state, {
                routeTabList: arr
            });
        case 'SET_ACTIVE_TAB':
            return Object.assign({}, state, {
                activeRouteTab: data
            });
        case 'DEL_ROUTE_LIST':
            return Object.assign({}, state, {
                routeTabList: data
            });
        default:
            return state;
    }
} 