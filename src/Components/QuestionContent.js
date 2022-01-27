import React,{useState} from 'react';
import Editor from './Editor';
import ReactMarkdown from 'react-markdown'






const QuestionContent = ({content}) => {

  return (
      <>
       <ReactMarkdown>{content}</ReactMarkdown>
         <Editor/>

        
       
        {/* </div> */}
         


      </>
  );
};

export default QuestionContent;
