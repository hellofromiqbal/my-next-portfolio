import About from "./ui/about/About";
import Experience from "./ui/experience/Experience";
import Projects from "./ui/projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 my-12 md:my-20 lg:my-24 px-6 lg:px-0">
      <About/>
      <Experience/>
      <Projects/>
    </main>
  )
}
