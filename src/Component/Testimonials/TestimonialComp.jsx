import React from 'react'
import './Testimonial.css'
import fire from '../../assets/fire.png'
import team from '../../assets/review1.png'
import team1 from '../../assets/review2.png'
import team2 from '../../assets/review3.png'


const TestimonialComp = () => {
  return (
    <div className='testimonial'> 
        {/* data-aos="fade-down" data-aos-duration="1500"
            <script>
        const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', function(e){
                cursor.style.left = e.pageX + 'px';
                cursor.style.right = e.pageY + 'px';
        })
    </script>

            <!-- ANIMATION JS 1 -->
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <!-- ANIMATION JS 2 -->
        <script>
            AOS.init();
        </script> 
        
        */}

          
          <div className="test-cont1">
            <div className="test-title">
              <img src={fire} alt="" />
              <p>TESTIMONIAL</p>
            </div>
            <div className="test-head">
              <h2>GET TO KNOW OUR CLIENTS</h2>
            </div>
          </div>
          {/* CLIENT IMAGE SECTION */}
          <div className="test-cont2">
            <div className="test-cont1-bx1">
              <img src={team} alt="" />
            </div>
            <div className="test-cont1-bx1">
              <img src={team1} alt="" />
            </div>
            <div className="test-cont1-bx1">
              <img src={team2} alt="" />
            </div>
          </div>



    </div>
  )
}

export default TestimonialComp