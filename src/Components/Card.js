import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import config from '../services/config';
const baseURL=config.baseURL

const Card = () => {

  let [Category,setCategory]=useState([]);

  useEffect(async() => {

      const res= await axios.get(`${baseURL}/category/getall`);
      // console.log(res.data.results);
      setCategory(res.data.results)
  }, []);
  
  return (
    <section class="devlist">
    <div class="container">
      <div class="grid grid--three">

         
        {Category.map((cat)=>{
          
            {/* start div */}
            return(
              <div class="column card">
          <div class="dev">
            <a href="{% url 'user-profile' profile.id%}" class="card__body">
              <div class="dev__profile">
                <img class="avatar avatar--md" src={cat.imagelink} alt="image" />
                <div class="dev__meta">
                  <h3>{cat.title}</h3>
                  {/* <h5>{cat.description}</h5> */}
                </div>
              </div>
              <p class="dev__info">
              {cat.description}
              </p>
              <div class="dev__skills">
                
                <span class="tag tag--pill tag--main">
                  <small>{cat.numberofquestion} Pratice Problem</small>
                </span>

              
              
              </div>
            </a>
          </div>
        </div>
            )
         
        })}
         {/* start div */}
       


         

    </div>
    </div>
  </section>
  );
};

export default Card;
