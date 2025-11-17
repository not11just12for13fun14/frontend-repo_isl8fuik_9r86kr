import React from 'react'
import Hero from '../components/landing/Hero'
import LearnYourWay from '../components/landing/LearnYourWay'
import Clarity from '../components/landing/Clarity'
import SiteFooter from '../components/landing/SiteFooter'

export default function LandingPage() {
  return (
    <main className="bg-bg text-text-primary">
      <Hero />
      <LearnYourWay />
      <Clarity />
      <SiteFooter />
    </main>
  )
}
