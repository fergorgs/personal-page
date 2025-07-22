import './styles/App.css'
import WelcomeScreen from './screens/welcome/WelcomeScreen';
import WorkScreen from './screens/work/WorkScreen';
import ProjectsScreen from './screens/projects/ProjectsScreen';
import ContactScreen from './screens/contact/ContactScreen';
import NavBar from './screens/common/NavBar';
import Footer from './screens/common/Footer';

function App() {

  return (
    <div>
      <NavBar />
      <WelcomeScreen/>
      <WorkScreen />
      <ProjectsScreen />
      <ContactScreen />
      <Footer />
    </div>
  );
}

export default App;