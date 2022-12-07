import type { ColumnsType } from 'antd/es/table';
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

const defaultColumns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 240,
    minWidth: 240,
    fixed: 'left',
  },
  {
    title: '管理员1',
    dataIndex: 'admin1',
    key: 'admin1',
    width: 200,
  },
  {
    title: '管理员2',
    dataIndex: 'admin2',
    key: 'admin2',
    width: 200,
  },
  {
    title: '管理员3',
    dataIndex: 'admin3',
    key: 'admin3',
    width: 200,
  },
  {
    title: '管理员4',
    dataIndex: 'admin4',
    key: 'admin4',
    width: 200,
  },
  {
    title: '管理员5',
    dataIndex: 'admin5',
    key: 'admin5',
  },
];

export { data, defaultColumns };
