import React from 'react';

import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Time',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Status',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = 'geekblue'
            if (tag === 'ACCEPTED') {
              {/* color = 'volcano'; */}
              color='green';
            }
            else if(tag==='WRONG ANSWER'){
               color = 'volcano'; 
            }
           
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <li className="header__menuItem"><a href="" class="btn btn--sub" style={{paddingTop:'4px',paddingBottom:'4px'}}>Check</a></li>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['ACCEPTED'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['WRONG ANSWER'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['Time Limit Exceed'],
    },
  ];


const SubmissionHistory = () => {
  return (
      <>
          <Table columns={columns} dataSource={data} />
      </>
  );
};

export default SubmissionHistory;
