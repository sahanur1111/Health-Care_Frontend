import React from 'react';
import ServiceCard from '../components/Services/ServiceCard';
import { services } from '../assets/data/services';
import 'animate.css';

const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className='container mx-auto '>
        <h1 className="text-4xl font-bold text-center mb-12 animate-bounce text-primaryColor">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
