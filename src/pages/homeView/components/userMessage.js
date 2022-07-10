import { Card } from 'antd';
import { connect } from 'react-redux';
import './userMessage.scss'

function UserMessage(props) {
    const { adminInfo } = props;

    return (
        <Card
            bordered={false}
            style={{
                width: '100%',
                height: 260
            }}>
            <div className="user-box">
                <div className="user-message">
                    <div className="user-img">
                        <img src={adminInfo.userImg} alt=""></img>
                    </div>

                    <div className="user-info">
                        <div className="user-name">{adminInfo.userName}</div>
                        <div className="user-role">{adminInfo.userRole}</div>
                    </div>
                </div>

                <div className="login-message">
                    <div className="login-time">
                        <span className="login-message-title">上次登录时间：</span>
                        <span>{adminInfo.upDateTime}</span>
                    </div>

                    <div className="login-address">
                        <span className="login-message-title">上次登录地点：</span>
                        <span>{adminInfo.upDateAddress}</span>
                    </div>
                </div>
            </div>

        </Card>
    )
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(UserMessage);