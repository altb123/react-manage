import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import { Menu } from 'antd';
import {
    AppstoreOutlined, ContainerOutlined, SettingOutlined,
    HomeOutlined, ExceptionOutlined, AppstoreAddOutlined,
    AuditOutlined
} from '@ant-design/icons';

function getItem(
    label = null,
    key = null,
    icon = null,
    children = null,
    type = null,
    router = null) {
    return {
        label,
        key,
        icon,
        children,
        type,
        router
    };
}

const items = [
    getItem('首 页', '', <HomeOutlined />, null, null, '/'),
    getItem('订单管理', 'orderManage', <AppstoreOutlined />, [
        getItem('订单列表', 'orderList', <ContainerOutlined />, null, null, '/orderList'),
        getItem('退货管理', 'returnManage', <ExceptionOutlined />, null, null, '/returnManage'),
        getItem('生产管理', 'produceManage', <AppstoreAddOutlined />, [
            getItem('生产列表', 'produceList', <ContainerOutlined />, null, '/produceList',),
            getItem('审核管理', 'examineManage', <AuditOutlined />, null, '/examineManage',)
        ]),
    ]),
    getItem('Navigation Two', 'sub2', <SettingOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
];

function MenuView(props) {
    const routeLocation = useLocation();
    const { setTabList, setActiveTab } = props;
    const { pathname } = routeLocation; // 获取路由信息

    const navigate = useNavigate(); // 声明路由跳转函数

    useEffect(() => {
        const useInfo = sessionStorage.getItem('useInfo');
        if (!useInfo) {
            navigate('/login')
            return;
        }
        pathname && findMenuInfo(pathname);
    });

    const [selectedKeys, setSelectedKeys] = useState(['']);
    const [collapsed, setCollapsed] = useState(false); // 菜单目录是否收起

    // 菜单勾选回调
    const onSelect = (item) => {
        const { key } = item;
        navigate(`/${key}`);
    };

    const setNavTab = (data, key) => {
        const obj = {}
        if (key === data.key || key === data.router) {
            obj.title = data.label || 'New Tab';
            obj.router = data.router || '';
            obj.key = data.key;
            setSelectedKeys(data.key);
            setTabList(obj);
            setActiveTab(obj);
        } else if (data.children && data.children.length > 0) {
            data.children.forEach(item => {
                if (obj.length > 0) return;
                setNavTab(item, key);
            })
        }
    };

    const findMenuInfo = (key) => {
        items.forEach(item => {
            setNavTab(item, key);
        })
    };

    // 点击收起菜单回调
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Menu
                onSelect={onSelect}
                style={{
                    width: 200,
                    // height: 'calc(100% - 30px)'
                    height: '100%'
                }}
                defaultSelectedKeys={['sub0']}
                defaultOpenKeys={['OrderManage']}
                selectedKeys={selectedKeys}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}>
            </Menu>

        </>
    )
}

const mapStateToProps = (dispatch) => {
    return {
        setTabList: (data) => {
            dispatch({
                type: 'SET_TAB_LIST',
                data
            })
        },

        setActiveTab: (data) => {
            dispatch({
                type: 'SET_ACTIVE_TAB',
                data
            })
        }
    }
};

export default connect(null, mapStateToProps)(MenuView)