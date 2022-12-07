import * as React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Checkbox } from 'antd';
import getData from './getData';

export interface DataType {
  key: React.ReactNode;
  name: string;
  admin1?: number;
  admin2?: number;
  admin3?: number;
  admin4?: number;
  admin5?: number;
  children?: DataType[];
}

const data: DataType[] = getData();

const list = [];
for (let i = 1; i < 15; i++) {
  list.push({
    title: `管理员${i}`,
    dataIndex: `admin${i}`,
    key: `admin${i}`,
    minWidth: 100,
    width: 200,
    render: (text) => {
      return <Checkbox>Checkbox</Checkbox>;
    },
  });
}
list.unshift({
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 200,
  minWidth: 200,
  fixed: 'left',
});
list.push({
  title: '管理员15',
  dataIndex: 'admin15',
  key: 'admin15',
});

const defaultColumns: ColumnsType<DataType> = list;

export { data, defaultColumns };