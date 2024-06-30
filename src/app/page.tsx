import { Description } from "@/sections/Description";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";

export default function Home() {
  return (
    <main>

    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        <Hero />
        <Description />
        <Services />
        <Projects />
    {/* </main> */}
    </main>
  );
}
