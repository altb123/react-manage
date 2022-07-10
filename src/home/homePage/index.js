import { createRef } from 'react';
import MenuPage from './components/menu.js';
import Admin from './components/admin.js';
import { Outlet } from 'react-router-dom';
import MainNav from './components/mainNav.js';
import './index.scss';

function Home(props) {
    const menuPageRef = createRef();

    return (
        <>
            <div className="home-page">
                {/* 主菜单栏 */}
                <div className="main-menu-box">
                    <MenuPage onRef={menuPageRef} />
                </div>

                {/* 路由页面 */}
                <div className="home-view">
                    {/* 系统用户账户信息 */}
                    <Admin />

                    {/* 内容路由 */}
                    <div className="router-view">
                        <MainNav />
                        <div className="outlet-box">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;