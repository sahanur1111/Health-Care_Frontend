import React from 'react'
import Testimonial from './Testimonial'


const Testimonial01 = () => {
  return (
    <section>
        <div className="container">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[470px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primaryColor underline">
              What our patients say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              alias autem rem exercitationem animi fugit.
            </p>
          </div>

          <Testimonial/>
        </div>
      </section>
  )
}

export default Testimonial01