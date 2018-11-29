import React from 'react'
import '../../styles/index.css'
import user_1 from './user_build.jpg'
import user_2 from './user_build2.jpg'
import user_3 from './user_build3.jpg'
import user_4 from './user_1.jpg'
import blog   from './blog.jpg'
import blog_2 from './blog_1.jpg'
import blog_3 from './blog_2.jpg'
import blog_4 from './blog_3.jpg'


export default function Landing() {
  return (
    <div>
      <div className="main-content">
        <div className="width landing-content">
          <div className="home-build-guides">
            <h1>Build Guides</h1>
            <p>
            Building your own PC and need ideas on where to get started? Explore our build guides, which cover systems for all use-cases and budgets, or create your own and share it with our community.
            </p>
            <button id='build-guide-btn'>View The Build Guides</button>
          </div>
          <div id='featured-build'>
            FEATURED BUILD GUIDE
          </div>
          <div className="sample-build-guides">
            <h1>Entry Level Intel Gaming Build</h1>
            <p>
              Intel Core i3-8100
              Parametric Video Card (Chipset: Radeon RX 570)
              Cougar MX330-G ATX Mid Tower
            </p>
            by ThoughtA <span><i className="fa fa-comment"> 36</i></span> <span><i className="fa fa-arrow-up">10</i></span> 
            <h1>Entry Level Intel Gaming Build</h1>
            <p>
              Intel Core i3-8100
              Parametric Video Card (Chipset: Radeon RX 570)
              Cougar MX330-G ATX Mid Tower
            </p>
            by ThoughtA <span><i className="fa fa-comment"> 36</i></span> <span><i className="fa fa-arrow-up">10</i></span> 
            <h1>Entry Level Intel Gaming Build</h1>
            <p>
              Intel Core i3-8100
              Parametric Video Card (Chipset: Radeon RX 570)
              Cougar MX330-G ATX Mid Tower
            </p>
            by ThoughtA <span><i className="fa fa-comment"> 36</i></span> <span><i className="fa fa-arrow-up">10</i></span> 
          </div>
        </div>
      </div>
      <div className="secondary-content">
        <div className="completed-build-landing">
          <div className='heading'>
            <h1>Completed Builds</h1>
            <hr/>                
          </div>
          <div id='featured-user-build'>  
            <div className="user-build-heading">
              <h1>Featured Build</h1>
            </div>
            <div className='user-build-img-con'>
              <div>
                <img src={user_1} alt=""/>
              </div>
              <div className='user-build-img-con-two'>
                <img src={user_2} alt=""/>
                <img src={user_3} alt=""/>
              </div>            
            </div>
            <div className="name-user">
              <h2>P90 ThreadRipper</h2>
              <small>By NorthArrow</small>
              <p>AMD ThreadRipper 2950X</p>
              <p>GeForce RTX 2080 Ti (X2)</p>
            </div>
            <div className='user-vote'>
              <i className="fa fa-comment">112</i>
              <p>COST</p>
              <i className="fa fa-arrow-up">30</i>
            </div>
          </div>
          <div className="user-complete-build-landing">
            <h2>First Born - Fantastic Mid Tier AMD <span>COST</span> Build (2018)</h2>
            <div className='user-single'>
              <img src={user_4} alt=""/>
              <div className='user-content'>
                <p>
                  AMD Ryzen 5 2600
                  GeForce GTX 1080
                </p>
                <small>by User</small>
              </div>
              <i className="fa fa-comment">0</i><i className="fa fa-arrow-up">0</i>
            </div>
            <h2>First Born - Fantastic Mid Tier AMD <span>COST</span> Build (2018)</h2>
            <div className='user-single'>
              <img src={user_4} alt=""/>
              <div className='user-content'>
                <p>
                  AMD Ryzen 5 2600
                  GeForce GTX 1080
                </p>
                <small>by User</small>
              </div>
              <i className="fa fa-comment">0</i><i className="fa fa-arrow-up">0</i>
            </div>
            <h2>First Born - Fantastic Mid Tier AMD <span>COST</span> Build (2018)</h2>
            <div className='user-single'>
              <img src={user_4} alt=""/>
              <div className='user-content'>
                <p>
                  AMD Ryzen 5 2600
                  GeForce GTX 1080
                </p>
                <small>by User</small>
              </div>
              <i className="fa fa-comment">0</i><i className="fa fa-arrow-up">0</i>
            </div>
            <h2>First Born - Fantastic Mid Tier AMD <span>COST</span> Build (2018)</h2>
            <div className='user-single'>
              <img src={user_4} alt=""/>
              <div className='user-content'>
                <p>
                  AMD Ryzen 5 2600
                  GeForce GTX 1080
                </p>
                <small>by User</small>
              </div>
              <i className="fa fa-comment">0</i><i className="fa fa-arrow-up">0</i>
            </div>
            <h2>First Born - Fantastic Mid Tier AMD <span>COST</span> Build (2018)</h2>
            <div className='user-single'>
              <img src={user_4} alt=""/>
              <div className='user-content'>
                <p>
                  AMD Ryzen 5 2600
                  GeForce GTX 1080
                </p>
                <small>by User</small>
              </div>
              <i className="fa fa-comment">0</i><i className="fa fa-arrow-up">0</i>
            </div>
            <h2>First Born - Fantastic Mid Tier AMD <span>COST</span> Build (2018)</h2>
            <div className='user-single'>
              <img src={user_4} alt=""/>
              <div className='user-content'>
                <p>
                  AMD Ryzen 5 2600
                  GeForce GTX 1080
                </p>
                <small>by User</small>
              </div>
              <i className="fa fa-comment">0</i><i className="fa fa-arrow-up">0</i>
            </div>
            <button>See All Completed Builds</button>
          </div>
        </div>
        
        <div className="landing-blog">
          <div className="landing-blog-con">
          <div className="blog-heading-landing">
            <h1>Blog</h1>
            <hr/>
          </div>
            <div className='blog-row-1'>
              <div className="blog-item">
                <img src={blog_3} alt=""/>
              </div>
              <div className="blog-item">
                <img src={blog_2} alt=""/>
              </div>
            </div>
            <div className='blog-row-2'>
              <div className="blog-item">
                <img src={blog} alt=""/>
              </div>
              <div className="blog-item">
                <img src={blog_4} alt=""/>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </div>
  )
}
