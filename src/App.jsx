import Navbar from "./components/Navbar";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import TripTimeline from "./sections/TripTimeline";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <TripTimeline />
      <Gallery />
    </main>
  );
};

export default App;
