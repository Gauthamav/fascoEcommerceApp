import React from 'react'

const SectionHeading = ({heading,description}) => {
  return (
   <div className="column gap-5">
        <h3 className="font-volkhov sub-heading sm:text-3xl  text-xl text-primary px-5 text-center">{heading}</h3>
        <p className="text-darkGray text-center max-w-[550px] sub-heading !leading-relaxed md:text-base sm:text-sm text-xs px-5">
         {description}
        </p>
      </div>
  )
}

export default SectionHeading
