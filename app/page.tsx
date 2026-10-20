import { Navbar, Footer } from "@/components/site-chrome";
import Hero from "@/components/sections/hero";
import DashboardPreview from "@/components/sections/dashboard-preview";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Clients from "@/components/sections/clients";
import Automations from "@/components/sections/automations";
import Works from "@/components/sections/works";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      
      {/* <DashboardPreview /> */}
      {/* <Automations /> */}
      <Services />
      {/* <Works /> */}
    <Testimonials />
      <Team />
      
      {/* <Clients /> */}
      <Contact />

      <Footer />
    </main>
  );
}