import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import Main from '../Components/Main';
import axios from 'axios';
import config from '../services/config';
const baseURL=config.baseURL



const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Acceptance',
      dataIndex: 'acceptance',
      key: 'acceptance',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length >= 5 ? 'geekblue' : 'green';
            if (tag === 'hard') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  
  


const ContentPage = () => {

  const [content, setContent] = useState([]);
  let {category}=useParams()

  useEffect(async() => {
     const data=await axios.get(`${baseURL}/content/get/${category}`)
     console.log(`${baseURL}/content/get/${category}`)
    console.log(data.data.results)
    const arr=[]
    let idx=0
     data.data.results.map((val)=>{
        let  obj={
            key:idx,
            title:val.title,
            acceptance:val.acceptance+"%",
            tags:[val.difficulty]
          }
          idx+=1
          arr.push(obj)
     })
     setContent(arr)
  }, []);
    return(
        <>

        <Main/>

         <div style={{width:"70vw",marginLeft:"15vw",marginTop:"90px"}} className='card'>
         <Table columns={columns} dataSource={content} />
         </div>
        
         
        
        </>
      );
};

export default ContentPage;
