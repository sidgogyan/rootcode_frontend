import React from 'react';
import { Menu } from 'antd';
import { Input, Space, Button, Switch ,Spin} from 'antd';
import MyResult from './MyResult';
import axios from 'axios'
import brace from 'brace';
import AceEditor  from 'react-ace';

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/monokai';
import config from '../services/config';
const baseURL=config.baseURL

const { SubMenu } = Menu;



const Editor = ({id}) => {
  const [input, setInput] = React.useState("");
  const [res, setResult] = React.useState("");
  const [code,setCode]=React.useState("")
  const [output,setOutput]=React.useState("")
  const [loading,setLoading]=React.useState(false)

  const run_code=async()=>{

    setLoading(true)
    const myres= await axios.post(`${baseURL}/question/run_code`,{'code':code,'input':input,'langauge':'java'})
    
    // console.log(myres.data.output)
    myres.data.output.stderr!=""? setOutput(myres.data.output.stderr):(myres.data.output.stdout!=""?setOutput(myres.data.output.stdout):setOutput(myres.data.output.errorType))
    setInput("")
    console.log(output)
    setLoading(false)
    
  }

  const submit=async()=>{
    setLoading(true)
    const myres= await axios.post(`${baseURL}/question/submit/${id}`,{'code':code,'langauge':'java'})
    
    if(myres.data.verdict==undefined){
      myres.data.verdict="Plz Add Main Class"
    }
    console.log(myres.data.verdict)
    setInput("")
    setResult(myres.data.verdict)
    setLoading(false)
    
  }

  return (
   <>
    <Spin spinning={loading}>
    <div style={{border:'1.5px solid #e5e7eb'}} >
      <Menu mode="horizontal">
      <SubMenu key="SubMenu1" title="Theme">
         
         <Menu.Item key="setting:5">Textmate</Menu.Item>
         <Menu.Item key="setting:6">github</Menu.Item>
         <Menu.Item key="setting:7">dracula</Menu.Item>
         <Menu.Item key="setting:8">dark</Menu.Item>
    
     
     </SubMenu>
        <SubMenu key="SubMenu" title="Langauge">
         
            <Menu.Item key="setting:1">C++</Menu.Item>
            <Menu.Item key="setting:2">JAVA</Menu.Item>
            <Menu.Item key="setting:3">Python</Menu.Item>
            <Menu.Item key="setting:4">Javascript</Menu.Item>
       
        
        </SubMenu>

        
    
      </Menu>


      <AceEditor
                    mode="java"
                    theme="monokai"
                  
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                    onChange={(value)=>setCode(value)}
                    width='100%'
                    showPrintMargin={false}
                    fontSize={16}
                />

</div>
<div></div>
{input!=""?<span>  <h6 style={{marginTop:'20px'}}>Custom Input</h6>
        <div style={{display:"flex"}} >
       
        <Input.TextArea rows={8}  style={{width:"40%"}}  className='card'  onChange={(e)=>setInput(e.target.value)} />
        </div></span>:""}

        {res && <MyResult status={res}/>}

        {output!=""?<span>  <h6 style={{marginTop:'20px',marginLeft:"20px"}}>Output</h6>
        <div style={{display:"flex"}} >
       
        <Input.TextArea rows={8}  style={{width:"40%",color:'#2d2d39',fontWeight:'500'}}  className='card' value={output} disabled   />
        </div></span>:""}

        
       
      
        <div  class="btn btn--sub"  style={{marginLeft:"40px",marginTop:'10px'}} onClick={()=>run_code()}>Run</div>
        <div  class="btn btn--sub"  onClick={() => {
          submit()
          }} style={{marginLeft:"40px",marginTop:'10px'}}>Submit</div>
        <span  style={{marginLeft:"52%"}}>Custom input</span>
        <Switch
        style={{marginLeft:"20px"}}
          checked={input}
          checkedChildren=""
          unCheckedChildren=""
          onChange={() => {
            setInput(!input);
            setResult("");
          }}
          />

    

     
    
</Spin>

</>
  );
};

export default Editor;
