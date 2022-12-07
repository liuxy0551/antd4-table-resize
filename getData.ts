export default () => {
  const list = [
    {
      key: '',
      name: '业务中心',
      children: [
        {
          key: '1',
          name: '用户管理',
          admin1: true,
          admin2: false,
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
              admin1: true,
              admin2: false,
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
                  admin1: true,
                  admin2: false,
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
                  admin1: true,
                  admin2: false,
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
          name: '租户管理',
          children: [
            {
              key: '41',
              name: '租户列表',
              children: [
                {
                  key: '411',
                  name: '查看',
                  admin1: true,
                  admin2: false,
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
                  admin1: true,
                  admin2: false,
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
          name: '租户管理',
          children: [
            {
              key: '51',
              name: '租户列表',
              children: [
                {
                  key: '511',
                  name: '查看',
                  admin1: true,
                  admin2: false,
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
                  admin1: true,
                  admin2: false,
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
          name: '租户管理',
          children: [
            {
              key: '61',
              name: '租户列表',
              children: [
                {
                  key: '611',
                  name: '查看',
                  admin1: true,
                  admin2: false,
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
                  admin1: true,
                  admin2: false,
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

  const data = [];
  const loop = (i, arr = []) => {
    arr.forEach((item) => {
      !item.key.includes('-') && (item.key = `${i}-${item.key}`);
      !item.name.includes('-') && (item.name = `${i}-${item.name}`);
      if (item.children?.length) {
        loop(i, item.children);
      }
    });
    return arr;
  };

  for (let i = 1; i <= 5; i++) {
    data.push(loop(i, JSON.parse(JSON.stringify(list)))[0]);
  }

  return data;
};
