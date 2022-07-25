import { useState } from 'react';
import { Card, Checkbox, Modal, Form, Input, Select, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './pendingMatter.scss';

const { Option } = Select;

function PendingMatter(props) {

    const [pendForm] = Form.useForm(); // 关联表单实例

    const [formModel, setFormModel] = useState({ // 声明表单默认值
        id: '',
        content: '',
        name: ''
    });

    pendForm.setFieldsValue({ // 表单关联输入框默认值
        content: formModel.content,
        name: formModel.name
    })

    const [isModalVisible, setIsModalVisible] = useState(false); // 控制新增修改弹框显示隐藏

    const [pendList, setPendList] = useState([
        { id: 9, content: '今天要修复100个bug', name: '鲁班七号', updataTime: '2022-06-27' },
        { id: 8, content: '今天开发新需求', name: '鲁班七号', updataTime: '2022-06-27' },
        { id: 7, content: '今天要写100行代码加几个bug吧', name: '韩信', updataTime: '2022-06-27' },
        { id: 6, content: '今天主页功能优化', name: '韩信', updataTime: '2022-06-27' },
        { id: 5, content: '今天redux逻辑优化', name: '韩信', updataTime: '2022-06-27' },
        { id: 4, content: '今天要修复样式bug', name: '韩信', updataTime: '2022-06-27' },
        { id: 3, content: '今天要前后端接口联调', name: '妲己', updataTime: '2022-06-27' },
        { id: 2, content: '今天要修复100个bug', name: '妲己', updataTime: '2022-06-27' },
        { id: 1, content: '今天要修复100个bug', name: '妲己', updataTime: '2022-06-27' },
    ]);

    /**
     * @description 打开弹窗
     * @param {Object}  row 当前选中数据
    */
    const showModal = (row = '') => {
        setIsModalVisible(true);
        if (row) {
            const { id, name, content } = row;
            setFormModel(() => {
                return {
                    ...formModel,
                    id,
                    content,
                    name
                }
            });
        }
    };

    // 点击确定回调(提交数据)
    const handleOk = async () => {
        await pendForm.validateFields().then((res) => {
            if (res) {
                const activeId = formModel.id; // 根据id，判断是新增还是修改
                activeId !== '' && activeId !== undefined && activeId !== null
                    ? handleEditItem(res) // 调用修改方法
                    : handleAddItem(res); // 调用新增方法

            }
        })
            .catch((err) => { });

        handleCancel(); // 关闭弹窗
    };

    // 新增一条数据
    const handleAddItem = (res) => {
        const id = pendList[0].id + 1;
        const { content, name } = res;
        const updataTime = getToday();
        const obj = { id, content, name, updataTime };
        const arr = [...pendList];
        arr.unshift(obj);
        setPendList(arr);
    };

    // 编辑一条数据
    const handleEditItem = (res) => {
        const { content, name } = res;
        const arr = [...pendList];
        arr.forEach(item => {
            if (item.id === formModel.id) {
                item.content = content;
                item.name = name;
                item.updataTime = getToday();
            }
        })
        setPendList(arr);
    };

    // 获取当天日期
    const getToday = () => {
        const date = new Date();
        const year = date.getFullYear();
        let mounth = date.getMonth() + 1;
        if (mounth.toString().length < 2) { mounth = `0${mounth}`; }
        let datas = date.getDay();
        if (datas.toString().length < 2) { datas = `0${datas}`; }
        return `${year}-${mounth}-${datas}`;
    }

    /**
     * @description 删除数据
     * @param {Object} row 选中数据
    */
    const handleDelItem = (row) => {
        const activeIndex = pendList.findIndex(item => item.id === row.id);
        if (activeIndex !== -1) {
            const arr = [...pendList];
            delete arr[activeIndex];
            setPendList(arr);
        }
    };


    // 点击取消按钮回调
    const handleCancel = () => {
        setIsModalVisible(false);
        setFormModel(() => { // 清楚表单信息
            return {
                ...formModel,
                id: '',
                content: '',
                name: ''
            }
        });
    };

    // 发送成功后回调
    const onFinish = (values) => {
        console.log('Success:', values);
    };


    const list = pendList.map(item => {
        return (
            <div className="pand-box" key={item.id}>
                <div className="pend-item">
                    <div className="check-box"><Checkbox /></div>
                    <div className="item-content">{item.content}</div>
                    <div className="opate-button">
                        <span className="button-item" onClick={() => { showModal(item) }}><EditOutlined /></span>
                        <span className="button-item">
                            <Popconfirm
                                title="确定删除当前数据?"
                                onConfirm={() => { handleDelItem(item) }}
                                okText="确定"
                                cancelText="取消">
                                <DeleteOutlined />
                            </Popconfirm>
                        </span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="pending-box">
            <Card
                title="代办事项"
                extra={<span className="add-pending" onClick={showModal}>添加</span>}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                {list}
            </Card>


            {/* 新增修改弹窗 */}
            <Modal
                title={formModel.id !== '' && formModel.id !== undefined ? '编辑' : '新增'}
                visible={isModalVisible}
                destroyOnClose="true"
                okText="确定"
                cancelText="取消"
                onOk={handleOk}
                onCancel={handleCancel}>
                <Form
                    form={pendForm}
                    name="basic"
                    labelCol={{ span: 6, }}
                    wrapperCol={{ span: 18, }}
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    autoComplete="off">
                    <Form.Item label="任务内容" name="content"
                        rules={[{ required: true, message: '请填写任务内容!', }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="负责成员" name="name"
                        rules={[{ required: true, message: '请填写负责成员信息!', }]}>
                        <Select
                            style={{
                                width: '100%',
                            }}>
                            <Option value="鲁班七号">鲁班七号</Option>
                            <Option value="韩信">韩信</Option>
                            <Option value="妲己">妲己</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default PendingMatter;