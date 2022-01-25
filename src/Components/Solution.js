import React from 'react';

const rightcode='class Simple{ \n public static void main(String args[]){  \nSystem.out.println("Hello Java");  \n}  }  '

const Solution = () => {
  return (
      <>
      <div style={{marginLeft:"10%",marginRight:"10%",width:"80%",marginTop:"30px"}}>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/46cXFUzR9XM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <code style={{color:"blue"}}>
       {rightcode}
       {rightcode}
       {rightcode}
       {rightcode}
      </code>
     
      </div>

     
{/* <video src='' typeof='video/mp4'></video> */}
      </>
  );
};

export default Solution;
