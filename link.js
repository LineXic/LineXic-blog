import YML from 'yamljs'
import fs from 'fs'

const blacklist = ["承挨博客"]; // 由于某种原因，不想订阅的列表

let friends = [],
    data_f = YML.parse(fs.readFileSync('./public/link.yml').toString().replace(/(?<=rss:)\s*\n/g, ' ""\n'));

// 兼容不同的 YAML 结构：
// 1. 每个 entry 包含 link_list（分组结构）
// 2. 平铺的友链数组（每个元素为对象，含 name/link/avatar）
// 3. 每个元素为数组 [name, link, avatar]
if (Array.isArray(data_f)) {
    if (data_f.length > 0 && data_f[0] && data_f[0].link_list) {
        data_f.forEach(entry => {
            if (Array.isArray(entry.link_list)) {
                const filteredLinkList = entry.link_list.filter(linkItem => linkItem && !blacklist.includes(linkItem.name));
                friends = friends.concat(filteredLinkList);
            }
        });
    } else {
        data_f.forEach(item => {
            if (!item) return;
            // 如果是数组形式 [name, link, avatar]
            if (Array.isArray(item)) {
                const obj = { name: item[0] || null, link: item[1] || null, avatar: item[2] || null };
                if (!blacklist.includes(obj.name)) friends.push(obj);
                return;
            }
            // 如果是对象形式 { name, link, avatar }
            if (typeof item === 'object') {
                if (!blacklist.includes(item.name)) friends.push(item);
            }
        });
    }
}

// 根据规定的格式构建 JSON 数据
const friendData = {
    friends: friends.map(item => {
        return [item.name, item.link, item.avatar];
    })
};

// 将 JSON 对象转换为字符串
const friendJSON = JSON.stringify(friendData, null, 2);

// 写入 friend.json 文件
fs.writeFileSync('./public/friend.json', friendJSON);

console.log('friend.json 文件已生成。');
