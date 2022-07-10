import { useState } from 'react';
import SearchBox from '../../common/components/SearchBox.js';
import TableBox from '../../common/components/TableBox.js';
import configData from './indexConfig.js';
import './index.scss';

function OrderList() {
    const [config] = useState(configData);
    return (
        <div className="order-list-box">
            {/* 搜索栏 */}
            <div className="search-box">
                <SearchBox config={ config.searchFields } />
            </div>
            
            {/* 表格内容 */}
            <div className="main-table">
                <TableBox columns={ config.columns }></TableBox>
            </div>
        </div>
    )
};

export default OrderList;