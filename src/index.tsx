import React, { useState, useMemo, useEffect } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Form, Table, Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { ResizeCallbackData } from 'react-resizable';
import { VList } from 'virtuallist-antd';
import { getDataSource, getDefaultColumns, geColumntWidth } from './utils';
import ResizableTitle from './components/resizableTitle';

const App: React.FC = () => {
  const tableHeight = 600;
  const [form] = Form.useForm();
  const [columns, setColumns] = useState<ColumnsType>(getDefaultColumns());
  const [result, setResult] = useState([]);
  const [virtualComponent, setVirtualComponent] = useState(
    VList({ height: tableHeight })
  );

  const handleResize: Function =
    (index: number) =>
    (_: React.SyntheticEvent<Element>, { size }: ResizeCallbackData) => {
      const newColumns = [...columns];
      newColumns[index] = {
        ...newColumns[index],
        width: geColumntWidth(size.width, newColumns[index]),
      };
      setColumns(newColumns);

      console.log(
        222,
        document.getElementsByClassName('virtuallist')[0].style.height
      );
    };

  const mergeColumns: ColumnsType = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
      onResizeStop: () => {
        setVirtualComponent(VList({ height: tableHeight }));
      },
    }),
  }));

  // const virtualComponent = useMemo(() => {
  //   return VList({ height: tableHeight });
  // }, []);

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
    console.log(
      111,
      document.getElementsByClassName('virtuallist')[0].style.height
    );
    message.success('保存的数据已打印');
    console.log('保存的数据', result);
  };

  useEffect(() => {
    // form.setFieldsValue({ table: getDataSource() });
  }, []);

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
          bordered={false}
          components={{
            ...virtualComponent,
            header: {
              cell: ResizableTitle,
            },
          }}
          columns={mergeColumns}
          dataSource={getDataSource()}
          pagination={false}
          scroll={{ y: tableHeight, x: 3300 }}
        />
      </Form>
    </React.Fragment>
  );
};

export default App;
