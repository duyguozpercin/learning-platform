import React from 'react'

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({id, name, topic, subject, duration, color}: CompanionCardProps) => {
  return (
    <article className='companion-card' style={{backgroundColor: color}}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>
      </div>
    </article>
  )
}

export default CompanionCard
