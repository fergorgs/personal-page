import './styles/App.css'
import { useEffect } from 'react';
import WelcomeScreen from './screens/welcome/WelcomeScreen';
import WorkScreen from './screens/work/WorkScreen';
import ProjectsScreen from './screens/projects/ProjectsScreen';
import EducationScreen from './screens/education/EducationScreen';
import ContactScreen from './screens/contact/ContactScreen';
import NavBar from './screens/common/NavBar';
import Footer from './screens/common/Footer';

function App() {

  useEffect(() => {
    document.title = "Fernando Fayet";
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = '/assets/favicon.ico';
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/assets/favicon.ico';
      document.head.appendChild(newLink);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <WelcomeScreen/>
      <WorkScreen />
      <EducationScreen />
      <ProjectsScreen />
      <ContactScreen />
      <Footer />
    </div>
  );
}

export default App;