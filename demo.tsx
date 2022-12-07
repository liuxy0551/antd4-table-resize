import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { ResizeCallbackData } from 'react-resizable';
import { Resizable } from 'react-resizable';
import { DataType, data, defaultColumns } from './dataSource';

const ResizableTitle = (
  props: React.HTMLAttributes<any> & {
    onResize: (
      e: React.SyntheticEvent<Element>,
      data: ResizeCallbackData
    ) => void;
    width: number;
  }
) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const App: React.FC = () => {
  const [columns, setColumns] = useState<ColumnsType<DataType>>(defaultColumns);

  // minWidth、maxWidth 可选
  const getWidth = (width, column) => {
    const minWidth = column.minWidth || 80;
    const maxWidth = column.maxWidth || 8000;
    if (width > maxWidth) {
      return maxWidth;
    } else if (width < minWidth) {
      return minWidth;
    } else {
      return width;
    }
  };

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

  return (
    <React.Fragment>
      <Table
        className="dt-table-header-user-select-none"
        defaultExpandAllRows
        bordered={false}
        components={{
          header: {
            cell: ResizableTitle,
          },
        }}
        columns={mergeColumns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 300 }}
      />
    </React.Fragment>
  );
};

export default App;
