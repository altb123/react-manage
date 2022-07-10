import { useState, useEffect } from 'react';
import { Affix, Button, message, Popconfirm } from 'antd';
import { PoweroffOutlined, Html5TwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './admin.scss';

function Admin(props) {
    const navigate = useNavigate();
    useEffect(() => {
        const useInfo = JSON.parse(sessionStorage.getItem('useInfo'));
        if (useInfo) {
            const { userName, userImg } = useInfo;
            setUserInfo({ userName, userImg })
            props.setAdminInfo(useInfo);
        }
    });

    const [userInfo, setUserInfo] = useState({
        userName: '',
        userImg: ''
    });

    const top = 0;

    // 退出登录
    const handleLoginOut = () => {
        navigate('/login');
        message.success('已退出当前账号');
        sessionStorage.removeItem('useInfo');
    };

    return (
        <>
            <Affix offsetTop={top}>
                <div className="admin-box">
                    <div className="system-name">
                        <Html5TwoTone style={{
                            fontSize: '26px',
                            marginRight: '4px'
                        }} />
                        后台管理系统
                    </div>

                    {/* 账号信息 */}
                    <div className="userinfo-box">
                        {/* 用户头像 */}
                        <div className="user-img">
                            <div className="img-box">
                                <img src={userInfo.userImg} />
                            </div>

                        </div>

                        {/* 用户昵称 */}
                        <div className="user-name">{userInfo.userName}</div>

                        {/* 退出登录 */}
                        <div className="login-out-box">
                            <Popconfirm
                                title="请确认退出当前账号"
                                onConfirm={handleLoginOut}
                                okText="确定"
                                cancelText="取消">
                                <Button
                                    type="link"
                                    icon={<PoweroffOutlined />}
                                    loading={false}>
                                    退出登录
                                </Button>
                            </Popconfirm>
                        </div>
                    </div>
                </div>
            </Affix>
        </>
    );
};

const mapStateToProps = (dispatch) => {
    return {
        setAdminInfo: (data) => {
            dispatch({
                type: 'CHANGE_ADMIN',
                data
            })
        }
    }
};

export default connect(null, mapStateToProps)(Admin);