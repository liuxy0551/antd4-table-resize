import type { ColumnsType } from 'antd/es/table';
import { Form, Checkbox } from 'antd';

/**
 * 造数据
 * @param length 数据条数
 */
const getDataSource = (length = 5) => {
  const list = [
    {
      key: '',
      name: '业务中心',
      children: [
        {
          key: '1',
          name: '用户管理',
          admin1: false,
          admin2: true,
          admin3: false,
          admin4: true,
          admin5: true,
          admin6: true,
          admin7: false,
          admin8: true,
          admin9: false,
          admin10: false,
          admin11: false,
          admin12: false,
          admin13: false,
          admin14: false,
          admin15: false,
        },
        {
          key: '2',
          name: '角色管理',
          children: [
            {
              key: '21',
              name: '角色列表',
              children: [
                {
                  key: '211',
                  name: '查看',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
                {
                  key: '212',
                  name: '编辑',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
              ],
            },
          ],
        },
        {
          key: '3',
          name: '租户管理',
          children: [
            {
              key: '31',
              name: '租户列表',
              children: [
                {
                  key: '311',
                  name: '查看',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
                {
                  key: '312',
                  name: '编辑',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
              ],
            },
          ],
        },
        {
          key: '4',
          name: 'license管理',
          children: [
            {
              key: '41',
              name: 'license列表',
              children: [
                {
                  key: '411',
                  name: '查看',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
                {
                  key: '412',
                  name: '编辑',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
              ],
            },
          ],
        },
        {
          key: '5',
          name: '用户对接',
          children: [
            {
              key: '51',
              name: '用户列表',
              children: [
                {
                  key: '511',
                  name: '查看',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
                {
                  key: '512',
                  name: '编辑',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
              ],
            },
          ],
        },
        {
          key: '6',
          name: '日志管理',
          children: [
            {
              key: '61',
              name: '日志列表',
              children: [
                {
                  key: '611',
                  name: '查看',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
                {
                  key: '612',
                  name: '编辑',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
              ],
            },
          ],
        },
        {
          key: '7',
          name: '消息管理',
          children: [
            {
              key: '71',
              name: '消息列表',
              children: [
                {
                  key: '711',
                  name: '查看',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
                {
                  key: '712',
                  name: '编辑',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
              ],
            },
            {
              key: '72',
              name: '回复列表',
              children: [
                {
                  key: '721',
                  name: '查看',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
                {
                  key: '722',
                  name: '编辑',
                  admin1: false,
                  admin2: true,
                  admin3: false,
                  admin4: true,
                  admin5: true,
                  admin6: true,
                  admin7: false,
                  admin8: true,
                  admin9: false,
                  admin10: false,
                  admin11: false,
                  admin12: false,
                  admin13: false,
                  admin14: false,
                  admin15: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const dataSource = [];
  const loop = (i, arr = []) => {
    arr.forEach((item) => {
      !item.key.includes('-') && (item.key = `${i}-${item.key}`);
      !item.name.includes('-') && (item.name = `${item.key}-${item.name}`);
      if (item.children?.length) {
        loop(i, item.children);
      }
    });
    return arr;
  };

  for (let i = 1; i <= length; i++) {
    dataSource.push(loop(i, JSON.parse(JSON.stringify(list)))[0]);
  }

  return dataSource;
};
const dataSource = getDataSource();

/**
 * 初始化表格列
 */
const getDefaultColumns = () => {
  const list: ColumnsType = [];
  const length = 15;
  for (let i = 1; i < length; i++) {
    list.push({
      title: `管理员${i}`,
      dataIndex: `admin${i}`,
      key: `admin${i}`,
      minWidth: 100,
      width: 200,
      render: (text, record) => {
        return [true, false].includes(record.admin1) ? (
          <Form.Item
            name={`${record.key}-${i}`}
            valuePropName="checked"
            initialValue={text}
            {...{ record }}
          >
            <Checkbox />
          </Form.Item>
        ) : (
          ''
        );
      },
    });
  }
  list.unshift({
    title: '权限名称',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    minWidth: 200,
    fixed: 'left',
  });
  list.push({
    title: `管理员${length}`,
    dataIndex: `admin${length}`,
    key: `admin${length}`,
  });
  return list;
};

/**
 * geColumnWidth 方法可选，使用后可控制列宽的最大最小宽度
 * column 的 minWidth 和 maxWidth 可以设置列在拖拽时的最大最小宽度
 */
const geColumnWidth = (width, column) => {
  const minWidth = column.minWidth || 80;
  const maxWidth = column.maxWidth || 1000;
  if (width > maxWidth) {
    return maxWidth;
  } else if (width < minWidth) {
    return minWidth;
  } else {
    return width;
  }
};

export { dataSource, getDefaultColumns, geColumnWidth };
