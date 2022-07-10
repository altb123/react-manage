import { useState } from 'react';
import { Col, Row, Input, Select, DatePicker, Form, Tooltip, Space, Button, Popover } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import './SearchBox.scss';

function SearchBox(props) {

    const { Option } = Select;

    const { RangePicker } = DatePicker;

    const [config] = useState(props.config);

    // 选择框选择回调
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    // 生成搜索框项
    const createSearchItem = (config, isAllList = false) => {
        const searchList = config.map(item => {
            const { type, span, label, name, tips, options, format, placeholder } = item;
            const itemView = (function () {
                if (type === 'input') {
                    return (
                        <Tooltip title={tips || name || ''}>
                            <Input placeholder={name} allowClear={true} />
                        </Tooltip>
                    );
                } else if (type === 'select') {
                    return (
                        <Tooltip title={tips || name || ''}>
                            <Select
                                style={{ width: '100%' }}
                                placeholder={name}
                                allowClear={true}
                                onChange={handleChange}>
                                {
                                    options.map(option => {
                                        return (
                                            <Option value={option.value} key={option.key}>{option.key}</Option>
                                        );
                                    })
                                }
                            </Select>
                        </Tooltip>
                    );
                } else if (type === 'datetimerange') {
                    return (
                        <Space direction="vertical" size={12}>
                            <RangePicker
                                format={format || 'YYYY-MM-DD'}
                                placeholder={placeholder || ['开始时间', '结束时间']} />
                        </Space>
                    );
                }
            }());

            return (
                <Col span={isAllList ? 12 : span || 4} key={label}>
                    <Form.Item
                        label={isAllList ? name : null}
                        name={label}
                        labelCol={{ span: isAllList ? 6 : 0 }}
                        wrapperCol={{ span: isAllList ? 18 : 24 }}>
                        {itemView}
                    </Form.Item>
                </Col>
            )
        })
        return searchList;
    };

    const fixedList = createSearchItem(config.filter(item => item.isFixed));

    const allList = createSearchItem(config, true);

    const allListView = () => {
        return (
            <>
                <div style={{ width: '60vw', maxHeight: '50vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                    <Row gutter={10} >
                        {/* fixed搜索项 */}
                        {allList}
                    </Row>
                </div>

                <div style={{
                    width: '100%', height: '50px', display: 'flex',  justifyContent: 'space-around', flex: 1, marginTop: '10px', paddingTop: '10px',
                    borderWidth: '1px', borderColor: '#f1f1f1', borderTopStyle: 'solid' }}>
                    <Button style={{ width: '26%', height: '100%' }} type="primary" danger>重置</Button>
                    <Button style={{ width: '26%', height: '100%' }} type="primary">搜索</Button>
                </div>
            </>
        )
    };

    return (
        <Form
            name="searchBox"
            className="SEARCH-BOX"
            wrapperCol={{ span: 24 }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off">
            <div className="search-row-box">
                <Row gutter={10} className="search-row">
                    {/* fixed搜索项 */}
                    {fixedList}
                    {/* 高级搜索入口 */}
                    <Col span="3" className="search-operate">
                        <Popover trigger="click" placement="bottomRight" title="高级搜索" content={allListView}>
                            <Tooltip title="高级搜索">
                                <FilterOutlined className="icon-text" />
                            </Tooltip>
                        </Popover>

                        <Button type="primary" value="small">搜索</Button>
                    </Col>
                </Row>
            </div>
        </Form>
    );
};

export default SearchBox;