import Approach from "@/components/approach";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ModeToggle } from "@/components/ui/toggle-button";
import { navItems } from "@/data";

export default function Home() {

  return (

   <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav
        navItems={navItems}
      />
      
      <Hero />
      <ModeToggle />

      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </div>
   </main>

  );

}
