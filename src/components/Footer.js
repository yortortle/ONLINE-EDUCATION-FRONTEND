import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <p className="footer-element"> <a className = "hover" href="https://www.linkedin.com/in/troy-hancock/"><img className = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="test"/></a> </p>
          <p className="footer-element"><a className = "hover" href="https://github.com/yortortle"> <img className = "logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" alt="test"/></a> </p>
        </div>
      
      </div>
    )
  }
}


export default Footer;
