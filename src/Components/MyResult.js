import React from 'react';
import { Result, Button } from 'antd';

const MyResult = ({status}) => {
  const data=status=="Accepted"?"success":(status=='Wrong answer'?"error":"warning")
  
  return (
      <>
          <Result
    status={data}
    title={status}
    // extra={[
    //   <div class ="btn" >
    //     check status
    //   </div>
    // ]}
  />
      </>
  );
};

export default MyResult;
