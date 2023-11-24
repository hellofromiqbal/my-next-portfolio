import About from "./ui/about/About";
import Experience from "./ui/experience/Experience";
import Projects from "./ui/projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 my-24 ps-10">
      <About/>
      <Experience/>
      <Projects/>
    </main>
  )
}
