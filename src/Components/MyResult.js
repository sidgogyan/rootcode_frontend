import React from 'react';
import { Result, Button } from 'antd';

const MyResult = () => {
  return (
      <>
          <Result
    status="success"
    title="130/130 test case passed"
    extra={[
      <div class ="btn" >
        check status
      </div>
    ]}
  />
      </>
  );
};

export default MyResult;
