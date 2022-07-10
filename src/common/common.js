// 获取路由链接和路由参数;
const getRouteInfo = () => {
    const { hash } = window.location;
    let path = '';
    const query = {};
    if (hash.indexOf('#') !== -1) {
        let search = hash.substr(1);
        const searchNum = search.indexOf('?');
        if (searchNum !== -1) {
            path = search.substring(0, searchNum);
            let str = search.substring(searchNum + 1, search.length);
            const strs = str.split('&');;
            for(let i=0; i<strs.length; i++) {
                const strsNum = strs[i].indexOf('=');
                if (strsNum !== -1) {
                    const key = strs[i].substring(0, strsNum);
                    const value = strs[i].substring(strsNum + 1, strs[i].length);
                    query[key] = value;
                }
                
            }
        } else {
            path = search;
        }

        return {path, query}
    }
}

export {
    getRouteInfo
}