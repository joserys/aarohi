//importing necessary built in react components
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';

//importing necessary fontawesome code and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faSchool, faEnvelope, faSuitcase, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

//importing custom made template components
import Footer from './components/templates/footer.jsx';
import Aside from './components/templates/aside.jsx';
import Header from './components/templates/header.jsx';
import Section from './components/templates/section.jsx';

//importing custom stylesheet
import './css/main.css';

//adding the icons to a library for Global Use
library.add(faLocationDot, faSchool, faEnvelope, faLinkedin, faGithub, faSuitcase, faContactCard);

//generate the html on start up
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Section />
      <Aside />
      <Footer />
    </Router>
  </StrictMode>
);