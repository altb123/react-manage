import { Space, Tag } from 'antd';

export default {
    name: 'orderList',

    searchFields: [
        {
            label: 'proName',
            name: '商品名称',
            type: 'input',
            isFixed: true,
            tips: '商品名称',
            span: 3
        },
        {
            label: 'proName1',
            name: '商品名称1',
            type: 'input',
            isFixed: false,
            tips: '商品名称1',
            span: 3
        },
        {
            label: 'proName2',
            name: '商品名称2',
            type: 'input',
            isFixed: false,
            tips: '商品名称2',
            span: 3
        },
        {
            label: 'proName3',
            name: '商品名称3',
            type: 'input',
            isFixed: false,
            tips: '商品名称3',
            span: 3
        },
        {
            label: 'proName4',
            name: '商品名称4',
            type: 'input',
            isFixed: false,
            tips: '商品名称4',
            span: 3
        },
        {
            label: 'proName5',
            name: '商品名称5',
            type: 'input',
            isFixed: false,
            tips: '商品名称5',
            span: 3
        },
        {
            label: 'proName6',
            name: '商品名称6',
            type: 'input',
            isFixed: false,
            tips: '商品名称6',
            span: 3
        },
        {
            label: 'proNumber',
            name: '商品编号',
            type: 'input',
            isFixed: true,
            tips: '商品编号',
            span: 4
        },
        {
            label: 'proNumber1',
            name: '商品编号1',
            type: 'input',
            isFixed: false,
            tips: '商品编号1',
            span: 4
        },
        {
            label: 'proStatue',
            name: '商品状态',
            type: 'select',
            isFixed: true,
            tips: '商品状态',
            span: 3,
            options: [
                {
                    key: '正常',
                    value: '正常'
                },
                {
                    key: '已下架',
                    value: '已下架'
                }
            ]
        },
        {
            label: 'proType',
            name: '商品类型',
            type: 'select',
            isFixed: true,
            tips: '商品类型',
            span: 3,
            options: [
                {
                    key: '互联网产品',
                    value: '互联网产品'
                },
                {
                    key: '纸质产品',
                    value: '纸质产品'
                },
                {
                    key: '电子产品',
                    value: '电子产品'
                },
                {
                    key: '五金产品',
                    value: '五金产品'
                }
            ]
        },
        {
            label: 'createTime',
            name: '创建时间',
            type: 'datetimerange',
            isFixed: true,
            tips: '创建时间',
            placeholder: ['开始时间', '结束时间'],
            span: 6
        },
        // {
        //     label: 'createTime',
        //     name: '创建时间',
        //     type: 'datetimerange',
        //     startPlaceholder: '创建开始时间',
        //     endPlaceholder: '创建结束时间',
        //     isFixed: true,
        //     tips: '创建时间',
        //     span: 6
        // },
    ],

    columns: [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 150,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            width: 120,
        },
        {
            title: '联系电话',
            dataIndex: 'phone',
            key: 'phone',
            width: 180,
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
            width: 280,
        },
        {
            title: '标签',
            key: 'tags',
            dataIndex: 'tags',
            width: 280,
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';

                        if (tag === 'loser') {
                            color = 'volcano';
                        }

                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {},
        {
            title: '操作',
            key: 'action',
            dataIndex: 'action',
            width: 150,
            fixed: 'right',
            render: (record) => (
                <Space>
                    <span>编辑</span>
                    <span>删除</span>
                </Space>
            ),
        }
    ]
};