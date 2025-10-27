import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { SkillsExpertise } from './components/SkillsExpertise';
import { Experience } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header />
      <SkillsExpertise />
      <Experience />
      <FeaturedProjects />
      <Timeline />
      <Footer />
    </div>
  );
}
