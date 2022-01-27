import React,{useState,useEffect} from 'react';
import { Tabs } from 'antd';
import QuestionContent from '../Components/QuestionContent';
import Solution from '../Components/Solution';
import SubmissionHistory from '../Components/SubmissionHistory';
import '../ui.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../services/config';
const baseURL=config.baseURL


const { TabPane } = Tabs;





const QuestionPage = () => {
  const [content, setContent] = useState("")

  const {id,title}=useParams()

  useEffect(async() => {
    const res= await axios.get(`${baseURL}/question/${id}/${title}`)
    setContent(res.data.mycontent);
  }, []);
  return(
      <>
        

       
          <div style={{width:"80vw",marginLeft:"2vw",marginTop:"90px",minHeight:'80vh',padding:'10px'}} className='card'>
          <Tabs  type="card">
    <TabPane tab="Question" key="1">
      <QuestionContent content={content}/>
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
