import React from 'react';

const Card = () => {
  return (
    <section class="devlist">
    <div class="container">
      <div class="grid grid--three">

         {/* start div */}
        <div class="column card">
          <div class="dev">
            <a href="{% url 'user-profile' profile.id%}" class="card__body">
              <div class="dev__profile">
                <img class="avatar avatar--md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokznlWbV9SnYqWCTIvpa2vLbxpeCFQp6JUQ&usqp=CAU" alt="image" />
                <div class="dev__meta">
                  <h3>Dymaic Prograaming</h3>
                  <h5>Hey i am developer and this is intro</h5>
                </div>
              </div>
              <p class="dev__info">
               Hey this is bio
              </p>
              <div class="dev__skills">
                
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                  <small>C++</small>
                </span>

              
              
              </div>
            </a>
          </div>
        </div>


            {/* start div */}
            <div class="column card">
          <div class="dev">
            <a href="{% url 'user-profile' profile.id%}" class="card__body">
              <div class="dev__profile">
                <img class="avatar avatar--md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokznlWbV9SnYqWCTIvpa2vLbxpeCFQp6JUQ&usqp=CAU" alt="image" />
                <div class="dev__meta">
                  <h3>Siddharth_shrama</h3>
                  <h5>Hey i am developer and this is intro</h5>
                </div>
              </div>
              <p class="dev__info">
               Hey this is bio
              </p>
              <div class="dev__skills">
                
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                  <small>C++</small>
                </span>

              
              
              </div>
            </a>
          </div>
        </div>



            {/* start div */}
            <div class="column card">
          <div class="dev">
            <a href="{% url 'user-profile' profile.id%}" class="card__body">
              <div class="dev__profile">
                <img class="avatar avatar--md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokznlWbV9SnYqWCTIvpa2vLbxpeCFQp6JUQ&usqp=CAU" alt="image" />
                <div class="dev__meta">
                  <h3>Siddharth_shrama</h3>
                  <h5>Hey i am developer and this is intro</h5>
                </div>
              </div>
              <p class="dev__info">
               Hey this is bio
              </p>
              <div class="dev__skills">
                
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>

              
              
              </div>
            </a>
          </div>
        </div>



         {/* start div */}
         <div class="column card">
          <div class="dev">
            <a href="{% url 'user-profile' profile.id%}" class="card__body">
              <div class="dev__profile">
                <img class="avatar avatar--md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokznlWbV9SnYqWCTIvpa2vLbxpeCFQp6JUQ&usqp=CAU" alt="image" />
                <div class="dev__meta">
                  <h3>Siddharth_shrama</h3>
                  <h5>Hey i am developer and this is intro</h5>
                </div>
              </div>
              <p class="dev__info">
               Hey this is bio
              </p>
              <div class="dev__skills">
                
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>

              
              
              </div>
            </a>
          </div>
        </div>



         {/* start div */}
         <div class="column card">
          <div class="dev">
            <a href="{% url 'user-profile' profile.id%}" class="card__body">
              <div class="dev__profile">
                <img class="avatar avatar--md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokznlWbV9SnYqWCTIvpa2vLbxpeCFQp6JUQ&usqp=CAU" alt="image" />
                <div class="dev__meta">
                  <h3>Siddharth_shrama</h3>
                  <h5>Hey i am developer and this is intro</h5>
                </div>
              </div>
              <p class="dev__info">
               Hey this is bio
              </p>
              <div class="dev__skills">
                
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>
                <span class="tag tag--pill tag--main">
                  <small>Java</small>
                </span>

              
              
              </div>
            </a>
          </div>
        </div>

    </div>
    </div>
  </section>
  );
};

export default Card;
