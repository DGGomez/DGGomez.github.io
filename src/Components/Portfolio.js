import React, { Component } from 'react';
import Zoom from "react-reveal";

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var upcoming = this.props.data.upcoming.map(function(upcoming){
        var upcomingImage = 'images/portfolio/'+upcoming.image;
        return <div key={upcoming.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={upcoming.url} title={upcoming.title}>
               <img alt={upcoming.title} src={upcomingImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{upcoming.title}</h5>
                     <p>{upcoming.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <Zoom left duration={1000} distance="40px">

      <div className="row">

         <div className="twelve columns collapsed">
            <div>
                <h1>Check Out Some of My Works.</h1>

                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {projects}
                </div>
            </div>
            <div className="upcoming">
                <h1>Upcoming projects</h1>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {upcoming}
                </div>
            </div>
          </div>
      </div>
      </Zoom>
   </section>
    );
  }
}

export default Portfolio;
