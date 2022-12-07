export default () => {
  const list = [
    {
      key: '',
      name: '业务中心',
      children: [
        {
          key: '1',
          name: '用户管理',
          admin1: '勾选',
          admin2: '勾选',
          admin3: '勾选',
          admin4: '勾选',
          admin5: '勾选',
        },
        {
          key: '2',
          name: '角色管理',
          children: [
            {
              key: '21',
              name: '角色列表',
              admin1: '勾选',
              admin2: '勾选',
              admin3: '勾选',
              admin4: '勾选',
              admin5: '勾选',
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
                  admin1: '勾选',
                  admin2: '勾选',
                  admin3: '勾选',
                  admin4: '勾选',
                  admin5: '勾选',
                },
                {
                  key: '312',
                  name: '编辑',
                  admin1: '勾选',
                  admin2: '勾选',
                  admin3: '勾选',
                  admin4: '勾选',
                  admin5: '勾选',
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

  for (let i = 1; i <= 2; i++) {
    data.push(loop(i, JSON.parse(JSON.stringify(list)))[0]);
  }

  return data;
};
