import { Col, Row } from 'antd';
import './index.scss';
import UserMessage from './components/userMessage.js';
import LanguageView from './components/language.js';
import NoticeMessage from './components/noticeMessage.js';
import PendingMatter from './components/pendingMatter.js';
import SalesVolume from './components/salesVolume.js';
import SalesTrends from './components/salesTrends.js';

function HomeView() {
    return (
        <>
            <div id="homeView" className="home-view-box">
                <div className="system-message">
                    <Row gutter={20}>
                        <Col span={8}>
                            <div className="system-message-l">
                                {/* 账号信息 */}
                                <UserMessage />

                                {/* 语言详情 */}
                                <LanguageView />
                            </div>
                        </Col>
                        <Col span={16}>
                            <div className="system-message-r">
                                {/* 系统通知 */}
                                <NoticeMessage />

                                {/* 待办事项 */}
                                <PendingMatter />
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* 销量信息 */}
                <div className="sale-message-box">
                    <Row gutter={20}>
                        <Col span={12}>
                            <SalesVolume />
                        </Col>
                        <Col span={12}>
                            <SalesTrends />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default HomeView;