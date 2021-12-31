import React from 'react';
import Roll from 'react-reveal/Roll';

const SocialLink = () => {
    
    const githubProps = {
        href:"https://github.com/mdAshik922",
         target:"_blank"
      };    
      const linkedinProps = {
        href:"https://www.linkedin.com/in/md-mahmudul-hassan-ashik/",
         target:"_blank"
      };

      const facebookProps = {
        href:"https://www.facebook.com/profile.php?id=100042195889411",
         target:"_blank"
      };

    return (
        <div style={{ marginTop: "15%"}}>
            
             <div style={{textAlign: "end", marginRight: "5%"}}>
      <a {...githubProps} rel="noreferrer" >
          <i  style={{ color: "red", fontSize: "2rem"}} className="fab fa-github"></i>
          </a>
          
       <a {...linkedinProps} rel="noreferrer">
           <i style={{ color: "red",  margin: "15px", fontSize: "2rem"}} className="fab fa-linkedin"></i>
           </a>

       <a {...facebookProps} rel="noreferrer">
           <i style={{ color: "red", fontSize: "2rem"}} className="fab fa-facebook"></i></a>
           </div>
           
        </div>
    );
};

export default SocialLink;