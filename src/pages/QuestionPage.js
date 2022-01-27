import React from 'react';
import { Tabs } from 'antd';
import QuestionContent from '../Components/QuestionContent';
import Solution from '../Components/Solution';
import SubmissionHistory from '../Components/SubmissionHistory';
import '../ui.css'

const { TabPane } = Tabs;





const QuestionPage = () => {
  return(
      <>
        

       
          <div style={{width:"80vw",marginLeft:"2vw",marginTop:"90px",minHeight:'80vh',padding:'10px'}} className='card'>
          <Tabs  type="card">
    <TabPane tab="Question" key="1">
      <QuestionContent/>
    </TabPane>
    <TabPane tab="Solution" key="2">
     <Solution/>
    </TabPane>
    <TabPane tab="History" key="3">
      <SubmissionHistory/>
    </TabPane>
  </Tabs>
         {/* <Table columns={columns} dataSource={data} /> */}
        

         </div>


         


         
      </>
  );
};

export default QuestionPage;
