import Header from "./components/layout/Header";
import PageNumber from "./components/layout/PageNumber";
import HomePage from "./components/pages/HomePage.jsx";
import ProjectsPage from "./components/pages/ProjectsPage.jsx";
import IconsList from "./components/layout/IconsList";

function App() {
  return (
    <div className="layout_container">
      <Header />
      <PageNumber />
      <IconsList />
      <HomePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
