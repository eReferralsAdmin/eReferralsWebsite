import Hero from "../views/home/Hero";
import AppView from "../views/home/AppView";
import About from "../views/home/About";
import Newsletter from "../views/home/Newsletter";
import Survey from "../views/home/Survey";
import Collaboration from "../views/home/Collaboration";
export default async function Home() {
  return (
    <main>
      <Hero />
      <AppView />
      <About />
      <Newsletter />
      <Survey />
      <Collaboration />
    </main>
  );
}
