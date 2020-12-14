import React from 'react';
import '../App.css';
import './Header.css';

const Header = () => {
 
    return (
      
    <div className="header-section">
      <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video src="/videos/golf-course.mp4" autoPlay loop muted/>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content text-md-center">
          <h1>eagle eye films</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
        </div>
      </header>
  
  <section className="section section-a">
    <div className="container">
      <h2>Section A</h2> 
      
      <img src="/images/logo192.png" alt=""/>
      <img src="/images/logo192.png" alt=""/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
    </div>
  </section>

  <section className="section section-b">
    <div className="container">
      <h2>Section B</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
    </div>
  </section>
        </div>
        
    )
}

export default Header