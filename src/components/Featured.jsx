import React, { useState } from 'react'

const Featured = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className='w-full py-5 sm:py-10'>
      <div className="px-4 sm:px-10 py-10 sm:py-20 border-b-2 border-black">
        <h1 className='text-4xl sm:text-6xl md:text-8xl tracking-tighter'>Featured Projects</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center px-4 sm:px-10 mt-5 sm:mt-10 relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-green-500 text-2xl sm:text-4xl font-bold px-3 sm:px-6 py-2 sm:py-3 rounded transition-all duration-300 transform hover:scale-110">
            {hoveredCard === 1 ? 'Featured Project 1' : hoveredCard === 2 ? 'Featured Project 2' : ''}
          </div>
        </div>
        
        <div 
          className="cards w-full sm:w-1/2 h-64 sm:h-96 mb-4 sm:mr-4 relative"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={`cards container w-full h-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ${hoveredCard === 1 ? 'scale-95' : ''}`}>
           <div className="card w-full h-full relative">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="Featured project 1" className="w-full h-full object-cover" />
           </div>
          </div>
        </div>
        <div 
          className="cards w-full sm:w-1/2 h-64 sm:h-96 relative"
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={`cards container w-full h-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ${hoveredCard === 2 ? 'scale-95' : ''}`}>
           <div className="card w-full h-full relative">
            <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="Featured project 2" className="w-full h-full object-cover" />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured