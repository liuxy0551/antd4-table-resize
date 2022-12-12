import React, { useState, useMemo } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Form, Table, Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { ResizeCallbackData } from 'react-resizable';
import { VList } from 'virtuallist-antd';
import ResizableTitle from './components/resizableTitle';
import { dataSource, getDefaultColumns, geColumnWidth } from './utils';

const App: React.FC = () => {
  const tableHeight = 600;
  const [form] = Form.useForm();
  const [columns, setColumns] = useState<ColumnsType>(getDefaultColumns());
  const [result, setResult] = useState([]);

  const handleResize: Function =
    (index: number) =>
    (_: React.SyntheticEvent<Element>, { size }: ResizeCallbackData) => {
      const newColumns = [...columns];
      newColumns[index] = {
        ...newColumns[index],
        width: geColumnWidth(size.width, newColumns[index]),
      };
      setColumns(newColumns);
    };

  const mergeColumns: ColumnsType = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  // 虚拟滚动组件
  const virtualComponent = useMemo(() => {
    return VList({ height: tableHeight });
  }, []);

  // 勾选权限
  const handleItemChange = (changedFields) => {
    setResult(
      result.concat(
        changedFields.map((item) => {
          return {
            name: item.name.join(''),
            value: item.value,
          };
        })
      )
    );
  };

  // 保存按钮
  const handleSave = () => {
    message.info('请在 Console 查看保存的数据');
    console.log('保存的数据', result);
  };

  return (
    <React.Fragment>
      <div className="btn-box">
        <Button type="primary" onClick={handleSave}>
          保存
        </Button>
      </div>
      <Form form={form} onFieldsChange={handleItemChange}>
        <Table
          className="dt-table-header-user-select-none"
          defaultExpandAllRows
          components={{
            ...virtualComponent,
            header: {
              cell: ResizableTitle,
            },
          }}
          columns={mergeColumns}
          dataSource={dataSource}
          pagination={false}
          scroll={{ y: tableHeight, x: 3300 }}
        />
      </Form>
    </React.Fragment>
  );
};

export default App;
