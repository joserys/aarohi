//importing necessary built in react components
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';

//importing necessary fontawesome code and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faSchool, faEnvelope, faSuitcase, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

//importing custom made template components
import Footer from './components/templates/footer.jsx';
import Header from './components/templates/header.jsx';
import NavBar from './components/templates/nav.jsx';
import Section from './components/templates/section.jsx';

//importing custom stylesheet
import './css/deviceManagement.css';

//adding the icons to a library for Global Use
library.add(faLocationDot, faSchool, faEnvelope, faLinkedin, faGithub, faSuitcase, faContactCard, faGoogleScholar);

//generate the html on start up
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavBar />
      <div className='allow-scroll'>
        <Header />
        <Section />
      </div>
      <Header hide={true}/>
      <Section hide={true}/>
      <Footer />
    </Router>
  </StrictMode>
);
