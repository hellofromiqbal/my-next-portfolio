import Image from 'next/image'
import Jumbotron from './ui/jumbotron/Jumbotron'
import About from './ui/about/About'

export default function Home() {
  return (
    <main>
      <Jumbotron/>
      <About/>
    </main>
  )
}
