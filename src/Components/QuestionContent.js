import React,{useState} from 'react';
import Editor from './Editor';


import { Input, Space, Button, Switch } from 'antd';
import MyResult from './MyResult';


const QuestionContent = () => {
  const [input, setInput] = React.useState(false);
  const [res, setResult] = React.useState(false);
  return (
      <>
          <h3>Two Sum</h3>
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true gene</p>
         
         <h5>Input format</h5>
         <p>Simple line o repeat predefined chun</p>

         <h5>Output Format</h5>
         <p>Simple line o repeat predefined chun</p> 

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
