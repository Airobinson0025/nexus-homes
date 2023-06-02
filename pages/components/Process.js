import React, { useState, useEffect } from 'react'
import ProcessCard from './ProcessCard'


const steps = [
    {
        name: 'Step 1',
        title: 'Discovery Session',
        description: 'We begin by scheduling a discovery session with you to understand your vision, preferences, and requirements for your dream home.',
        video:'/step1-video.mp4'
    },
    {
        name: 'Step 2',
        title: 'Site Evaluation',
        description: 'Our team conducts a thorough evaluation of the selected site to assess its suitability and determine any necessary preparations or considerations.',
        video: '/step2-video.mp4'
    },
    {
        name: 'Step 3',
        title: 'Conceptual Design',
        description: 'Based on the information gathered, our experienced architects and designers create initial conceptual designs, showcasing various layout options and architectural styles that align with your vision.',
        video: '/step3-video.mp4'
    },
    {
        name: 'Step 4',
        title: 'Design Refinement',
        description: 'We collaborate closely with you, gathering feedback and making refinements to the designs until we achieve a final design that meets your expectations and reflects your unique lifestyle.',
        video: '/step4-video.mp4'
    },
    {
        name: 'Step 5',
        title: 'Proposal and Agreement',
        description: 'Once the design is finalized, we provide you with a detailed proposal, including the scope of work, timeline, and pricing. Upon agreement, we move forward with the contract signing and necessary documentation.',
        video: '/step5-video.mp4'
    },
    {
        name: 'Step 6',
        title: 'Pre-construction Planning',
        description: 'Our team meticulously plans and coordinates all aspects of the project, including securing permits, procuring materials, and scheduling construction activities.',
        video: '/step6-video.mp4'
    },
    {
        name: 'Step 7',
        title: 'Construction Commences',
        description: 'Construction begins with our skilled craftsmen and construction crew turning the design into reality. Regular updates and site visits are provided to keep you informed of the progress.',
        video: '/step7-video.mp4'
    },
    {
        name: 'Step 8',
        title: 'Quality Assurance',
        description: 'Throughout the construction process, we maintain rigorous quality control measures to ensure the highest standards of craftsmanship, utilizing trusted suppliers and materials.',
        video: '/step8-video.mp4'
    },
    {
        name: 'Step 9',
        title: 'Regular Communication',
        description: 'We maintain open and transparent communication, providing you with regular updates on the projects status, addressing any concerns or questions that arise.',
        video: '/step9-video.mp4'
    },
    {
        name: 'Step 10',
        title: 'Final Touches and Inspections',
        description: 'As the construction nears completion, we focus on adding the finishing touches, conducting thorough inspections to ensure everything meets our quality standards and adheres to building codes.',
        video: '/step10-video.mp4'
    },
    {
        name: 'Step 11',
        title: 'Handover and Celebrate',
        description: 'Once the building is complete, we arrange a final walkthrough with you, addressing any remaining items and ensuring your complete satisfaction. We celebrate the successful completion of your new dream home.',
        video: '/step11-2-video.mp4'
    }
]

const Process = () => {

    const [current, setCurrent] = useState(0)

    const length = steps.length

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }, 1000000)
        return () => clearInterval(interval)
    }, [current, length])

   
    return (
    <div className='flex flex-col m-20 h-[850px]'>

        <div className='my-16 space-y-2'>
            <h2 className='text-[1.75rem] font-montserrat font-semibold text-neutral-900 tracking-wider'>OUR STREAMLINE PROCESS</h2>
            <p className='font-montserrat text-[2.25rem] text-slate-500'>Turning your vision into reality</p>
        </div>    


        <nav>
            <ul className='flex justify-evenly font-montserrat font-semibold text-neutral-400 shadow-lg shadow-slate-400 py-3 rounded-md'>
                {steps.map((step, index) => (
                    <li key={index} className={index == current ? 'cursor-pointer hover:scale-110 text-stone-950 transition duration-200 tracking-wide px-2' : 'cursor-pointer hover:scale-110 text-slate-400/80 transition duration-200 tracking-wide px-2'} onClick={() => setCurrent(index)}>{step.name}</li>
                ))}
            </ul>
        </nav>

        <div>
            {steps.map((step, index) => (
                <div key={index} className={index === current ? 'opacity-100 transition duration-1000 ease-in-out' : 'opacity-0 transition duration-1000 ease-in-out'}>
                    { index == current && (
                    <ProcessCard 
                    name={step.name}
                    title={step.title}
                    description={step.description}
                    video={step.video}
                    /> )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Process