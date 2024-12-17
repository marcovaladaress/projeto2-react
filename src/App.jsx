import Profile from "./components/profile";
import profileImage from "./assets/perfil.jpeg";



export default function App() {
  
  return (
    <div className="app">
          <Profile 
          avatar={profileImage}
          name="Marco Valadares"
          bio="Front-end Developer"
          email="contato@marcovsfernandes.com"
          phone="(98) 98129-9623"
          githubUrl="https://github.com/marcovaladaress"
          linkedinUrl="https://www.linkedin.com/in/marcoaureliovaladares"
          />
    </div>

  )
}


