export const metadata = {
  title: 'Evolve Hire',
  description: 'Marketing To Evolve',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Brands from '@/components/Brands'


export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      {/* <Zigzag /> */}
      <Testimonials />
      <Newsletter />
    </>
  )
}
