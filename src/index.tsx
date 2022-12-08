import React, { useState, useMemo } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { ResizeCallbackData } from 'react-resizable';
import { VList } from 'virtuallist-antd';
import { getWidth } from './utils';
import { DataType, data, defaultColumns } from './dataAndColumns';
import ResizableTitle from './components/resizableTitle';

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [columns, setColumns] = useState<ColumnsType<DataType>>(defaultColumns);

  const handleResize: Function =
    (index: number) =>
    (_: React.SyntheticEvent<Element>, { size }: ResizeCallbackData) => {
      const newColumns = [...columns];
      newColumns[index] = {
        ...newColumns[index],
        width: getWidth(size.width, newColumns[index]),
      };
      setColumns(newColumns);
    };

  const mergeColumns: ColumnsType<DataType> = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: (column as ColumnType<DataType>).width,
      onResize: handleResize(index),
    }),
  }));

  const virtualComponent = useMemo(() => {
    return VList({ height: 1000 });
  }, []);

  // 勾选权限
  const handleItemChange = (changedFields) => {
    console.log(111, changedFields);
  };

  return (
    <React.Fragment>
      <Form form={form} onFieldsChange={handleItemChange}>
        <Form.Item name="table">
          <Table
            className="dt-table-header-user-select-none"
            defaultExpandAllRows
            bordered={false}
            components={{
              ...virtualComponent,
              header: {
                cell: ResizableTitle,
              },
            }}
            columns={mergeColumns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 1000, x: 3300 }}
          />
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default App;
