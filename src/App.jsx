import Header from "./components/layout/Header";
import HomePage from "./components/pages/HomePage.jsx";
import ProjectsPage from "./components/pages/ProjectsPage.jsx";

function App() {
  return (
    <div className="layout_container">
      <Header />
      <HomePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
