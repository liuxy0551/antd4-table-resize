import React, { useState, useMemo } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { ResizeCallbackData } from 'react-resizable';
import { Resizable } from 'react-resizable';
import { DataType, data, defaultColumns } from './dataSource';
import { VList } from 'virtuallist-antd';

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

  // getWidth 可选，column 的 minWidth 和 maxWidth 可以控制列的最小最大宽度
  const getWidth = (width, column) => {
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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default App;
