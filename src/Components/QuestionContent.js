import React,{useState} from 'react';
import Editor from './Editor';
import ReactMarkdown from 'react-markdown'


import { Input, Space, Button, Switch } from 'antd';
import MyResult from './MyResult';


const QuestionContent = ({content}) => {
  const [input, setInput] = React.useState(false);
  const [res, setResult] = React.useState(false);
  return (
      <>
       <ReactMarkdown>{content}</ReactMarkdown>
         <Editor/>

        {input==true?<div>  <h6 style={{marginTop:'20px'}}>Custom Input</h6>
        <div style={{display:"flex"}} >
       
        <Input.TextArea rows={8}  style={{width:"50%"}}  className='card' />
        </div></div>:""}

        {res && <MyResult/>}
       
      
        <div  class="btn btn--sub"  style={{marginLeft:"40px",marginTop:'10px'}}>Run</div>
        <div  class="btn btn--sub"  onClick={() => {
            setInput(false);
            setResult(true);
          }} style={{marginLeft:"40px",marginTop:'10px'}}>Submit</div>
        <span  style={{marginLeft:"52%"}}>Custom input</span>
        <Switch
        style={{marginLeft:"20px"}}
          checked={input}
          checkedChildren=""
          unCheckedChildren=""
          onChange={() => {
            setInput(!input);
            setResult(false);
          }}
          />
       
        {/* </div> */}
         


      </>
  );
};

export default QuestionContent;
