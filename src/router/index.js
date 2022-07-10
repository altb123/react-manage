import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { routerList } from './view.js';
import Login from '../home/login/index.js';
import Home from '../home/homePage/index.js';
import Error from '../home/error/index.js';

function RouterView(props) {

    return (
        <Router>
            <Routes>
                {/* 主页 */}
                <Route path="/" element={<Home />}>
                    { // 配置主页子路由
                        routerList.map(item => {
                            return (
                                <Route path={item.path} key={item.path} element={item.component} />
                            )
                        })
                    }
                </Route>

                {/* 登录页 */}
                <Route path="/login" element={<Login />} />

                {/* 404页面 */}
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default RouterView