import { Col, Row } from 'antd';
import { UserOutlined, BellOutlined, ShoppingOutlined } from '@ant-design/icons';
import { red, green, blue } from '@ant-design/colors';
import './noticeMessage.scss';

function NoticeView() {
    return (
        <div className="notive-box">

            <Row gutter={16}>
                <Col span={8}>
                    <div className="notice-item">
                        <div className="item-icon" style={{ backgroundColor: blue[4] }}><UserOutlined /></div>
                        <div className="item-conent">
                            <div className="item-value" style={{ color: blue[4] }}>1593</div>
                            <div className="item-name">用户点击量</div>
                        </div>
                    </div>
                </Col>

                <Col span={8}>
                    <div className="notice-item">
                        <div className="item-icon" style={{ backgroundColor: green[4] }}><BellOutlined /></div>
                        <div className="item-conent">
                            <div className="item-value" style={{ color: green[4] }}>36</div>
                            <div className="item-name">系统消息</div>
                        </div>
                    </div>
                </Col>

                <Col span={8}>
                    <div className="notice-item">
                        <div className="item-icon" style={{ backgroundColor: red[4] }}><ShoppingOutlined /></div>
                        <div className="item-conent">
                            <div className="item-value" style={{ color: red[4] }}>2687</div>
                            <div className="item-name">数量</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default NoticeView;