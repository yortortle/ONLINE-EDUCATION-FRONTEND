import React from 'react';

class Home extends React.Component {
  render() {
    return (
        <div className="home">
          <p>This website was created in an attempt to provide a hub for online free and paid educational resources. I am under the strong belief that with the rise of online education there needs to be better platforming for organizing and accessing these resources. As the internet is quickling becoming the largest source of our educational resources there becomes a stronger need to structure these resources, and give them to the public in an easy to understand manner. In the future I hope to completely rework this project into something acceptable for a large userbase. This project used PHP laravel for building the API, react.js and javascript for the front end, CSS bootstrap and normal css for the styling, and heroku for deployment.</p>
          <p>
          Please feel free to navigate the resources by either looking through all of them in the 'view all' section or browsing by the specific subjects. If you'd like to submit a new educational resource that you think might be useful you can use the 'New Resource' link at the bottom and fill out the form.</p>

        <p> Incase you'd like to hunt for some resources to contibue, some of the more common sources of online education currently are: </p>
          <ul className="home-list">
            <li><a href="https://www.udemy.com/">Udemy</a> - Paid, but still great. User contributed resources which span many subjects.</li>
            <li><a href="https://www.khanacademy.org/">Khan Academy</a> - Great online educational resources for students of all levels.</li>
            <li><a href="https://www.edx.org/?g_acctid=926-195-8061&g_campaign=new-gs-us-brand-core-exact&g_campaignid=1661780380&g_adgroupid=62996189654&g_adid=381084807109&g_keyword=edx&g_keywordid=kwd-89882436&g_network=g?utm_source=adwords&utm_campaign=1661780380&utm_medium=62996189654&utm_term=edx&gclid=CjwKCAiA6bvwBRBbEiwAUER6Je4PVavETGNjM69TsDlX7nkq0vgrMJsQwmD0ZBnwWM0Me50lDnpmpRoCiIgQAvD_BwE">EDX</a> - Online educationl courses provided by MIT and Haravard.</li>
            <li><a href="https://www.codecademy.com/">Code Academy</a> - Top-rated computer science Programming instructional website.</li>
            <li><a href="https://www.coursera.org/">Coursera</a> - College level courses both free and paid.</li>
            <li><a href="https://www.codecademy.com/">Code Academy</a> - Top-rated computer science Programming instructional website.</li>
            <li><a href="https://online.stanford.edu/">Stanford Online</a> - Various free online courses provided by Stanford.</li>
            <li><a href="https://www.youtube.com/">Youtube</a> - There are great playlists for various subjects although hard to find</li>
            <li><a href="https://www.reddit.com/">Reddit</a> - There's a great amount of resources hidden within reddit but finding them can be difficult.</li>
          </ul>
        <p>
          These sources of educational resources only scratch the surface, and the primary end-goal of this project is to bring people together to submit and organize these resources themselves, creating an anthology of educational materials accessible and useful to both students and teachers alike.
        </p>
        </div>
    )
  }
}


export default Home;
