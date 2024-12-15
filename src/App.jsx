import Profile from "./components/profile";
import profileImage from "./assets/perfil.jpeg";



export default function App() {
  
  return (
    <div className="app">
          <Profile 
          avatar={profileImage}
          name="Marco Valadares"
          bio="Full-stack java script developer"
          email="contato@marcovsfernandes.com"
          phone="(98) 98129-9623"
          githubUrl="https://github.com/marcovaladaress"
          linkedinUrl="https://www.linkedin.com/in/marcoaureliovaladares"
          instagramUrl="https://www.instagram.com/marcofernandess_/?igsh=MTRtMzY4NWQ2dXFneA%3D%3D&utm_source=qr"
          />
    </div>

  )
}


