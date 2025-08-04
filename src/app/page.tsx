import React from 'react'
import CompanionCard from '@/components/CompanionCard';
import CTA from '@/components/CTA';
import CompanionsList from '@/components/CompanionsList';

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
        id="123"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="scince"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard
        id="456"
        name="Countsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="scince"
        duration={30}
        color="#e5d0ff" 
        />
        <CompanionCard
        id="789"
        name="Verb the Vocabulary Builder"
        topic="English Literature"
        subject="language"
        duration={30}
        color="#BDE7FF"  
        />
      </section>
<section className='home-section'>
<CompanionsList />
<CTA />


</section>

    </main>
  )
}

export default Page