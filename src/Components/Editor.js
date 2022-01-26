import React from 'react';
import { Menu } from 'antd';

import brace from 'brace';
import AceEditor  from 'react-ace';

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/monokai';

const { SubMenu } = Menu;



const Editor = () => {
  return (
   
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
                    width='100%'
                    showPrintMargin={false}
                    fontSize={20}
                />

     
    

</div>
  );
};

export default Editor;
