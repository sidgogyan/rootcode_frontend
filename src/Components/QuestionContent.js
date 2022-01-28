import React,{useState} from 'react';
import Editor from './Editor';
import ReactMarkdown from 'react-markdown'






const QuestionContent = ({content,id}) => {

  return (
      <>
       <ReactMarkdown>{content}</ReactMarkdown>
         <Editor id={id}/>

        
       
        {/* </div> */}
         


      </>
  );
};

export default QuestionContent;
