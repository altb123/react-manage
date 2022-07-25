import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './mainNav.scss';
const { TabPane } = Tabs;

const MainNav = (props) => {
    const { activeRouteTab, routeTabList } = props;

    const navigate = useNavigate(); // 声明路由跳转函数

    const remove = (targetKey) => {
        const panes = [...routeTabList];
        let lastIndex = -1;
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1 < 0 ? i + 1 : i-1;
            }
        });

        if (panes.length && activeRouteTab.key === targetKey) {
            const newActiveRouter = lastIndex >= 0 ? panes[lastIndex].router : panes[0].router ;
            navigate(newActiveRouter);
        }

        const newPanes = panes.filter((pane) => pane.key !== targetKey);
        props.delRouteList(newPanes);
    };

    const onEdit = (targetKey, action) => {
        if (action === 'add') {
        } else {
            remove(targetKey);
        }
    };

    // 导航栏点击回调
    const onChange = (key) => {
        const activeTab = routeTabList.find(item => item.key === key);
        navigate(activeTab.router);
    };

    return (
        <div className="nav-tab-box">
            <Tabs hideAdd onChange={onChange} activeKey={activeRouteTab.key} type="editable-card" onEdit={onEdit}>
                {routeTabList.map((item) => (
                    <TabPane tab={item.title} key={item.key}>
                        {item.content}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state
};

const setMapStateToProps = (dispatch) => {
    return {
        delRouteList: (data) => {
            dispatch({
                type: 'DEL_ROUTE_LIST',
                data
            })
        }
    }
};

export default connect(mapStateToProps, setMapStateToProps)(MainNav);