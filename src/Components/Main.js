import React from 'react';

const Main = () => {
  return (
    <section className="hero-section text-center">
    <div className="container container--narrow">
      <div className="hero-section__box">
        <h2>CONNECT WITH <span>DEVELOPERS</span></h2>
        <h2>FROM AROUND THE WORLD</h2>
      </div>

      <div className="hero-section__search">
        <form className="form" action="#" method="get">
          <div className="form__field">
            <label for="formInput#search">Search Developers </label>
            <input className="input input--text" id="formInput#search" type="text" name="text"
              placeholder="Search by developer name" />
          </div>

          <input className="btn btn--sub btn--lg" type="submit" value="Search" />
        </form>
      </div>
    </div>
  </section>
  )
};

export default Main;
