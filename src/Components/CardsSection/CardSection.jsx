import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "../../assets/icon.png";
import { Icon } from "@iconify/react";

const PricingCard = ({ title, price, description, features, img,p }) => {
    return (
        <div className="col-md-4 col-sm-6 mb-4">
            <div className="border-2 border-green-400 rounded p-4 shadow-sm h-100 bg-white-700">
                <div className='flex '>
                    <img src={img} alt="" className="img-fluid mb-3 mx-2" />
                    <h5 className="text-success fw-bold mb-3">{title}</h5>

                </div>

                <h2 className=" mb-3 text-3xl font-bold text-green-700 ms-2">${price} <span className=" text-3xl font-bold text-green-700">/ Hour</span></h2>
                <p className='ps-2'>{p} </p>
               <p className="mb-4">{description}</p>
               <hr className='mb-2' />
                <ul className="list-unstyled">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-2">
                            <span className="text-success">&#10003;</span> {feature}
                        </li>
                    ))}
                </ul>
             <div className='flex items-center'>
             <Icon className='bg-green-500 rounded-5 font-3xl p-1 w-6 h-6 text-white me-1' icon="ic:round-plus" />
             <button className=" text-green-700 "> Add more</button>
             </div>
                <button className="btn btn-success mt-3 w-100">Get Started</button>
            </div>
        </div>
    );
};

const PricingCards = () => {
    const packages = [
        {
            img: icon,  // Ensure this path is correct
            title: 'Basic Package',
            price: 100,
        
            features: [
                'Included disassembling and assembling of ',
                'Standard transportation',
                'Standard transportation',
                'Unpacking and organizing support',
            ],
            p: "The Basic Package provides essential relocation services, including standard transport, routine cleaning, basic repairs, and unpacking to ensure a smooth move at an affordable rate."
        },
        {
            img: icon,  // Ensure this path is correct
            title: 'Premium Package',
            price: 200,
          
            features: [
                'Comprehensive cleaning',
                'Premium-grade packing materials',
                'Furniture unpacking and organization of ',
                'Comprehensive cleaning',
            ],
            p: "The Premium Package offers a more deep cleaning, and premium unpacking thorough approach with specialized transport, deep cleaning, and premium unpacking."
    
        },
        {
            img: icon,  // Ensure this path is correct
            title: 'Premium Transport',
            price: 100,
           
            features: [
                'Quick and efficient handling',
                'Appropriate vehicle sizes',
                'Furniture assembling support',
                'Quick and efficient handling',
            ],
              p: "Efficient transport of belongings to the new location, careful handling of items during the move, basic furniture assembly, and assistance with unpacking and organizing at ."
        },
        {
            img: icon,  // Ensure this path is correct
            title: 'Immediate Deep Cleaning',
            price: 200,
          
            features: [
                'Heavy-duty cleaning tools',
                'Sanitization and disinfection',
                'Professional-grade supplies',
            ],
              p: "Immediate deep cleaning for kitchens, bathrooms, or entire properties after accidents or floods. Hygiene-critical cleaning  entire properties after ."
        },
        {
            img: icon,  // Ensure this path is correct
            title: 'Complete Packing Support',
            price: 300,
           
            features: [
                'Specialized packing methods',
                'Handling fragile items',
                'Customized packing materials',
            ],
              p: "Complete relocation support with packing, cleaning, transport, and unpacking for urgent moves. Add handyman services for quick fixes or installations. "
        },
        {
            img: icon,  // Ensure this path is correct
            title: 'Express Emergency Package',
            price: 350,
           
            features: [
                'Priority moving assistance',
                'Express packing and unpacking',
                'Efficient handling of emergency situations',
            ],
              p: "Quick cleaning for offices, shops, or restaurants during move-in or move-out. Immediate transport of equipment, furniture, or supplies. Setup & organization business spaces."
        },
    ];

    return (
        <div className="container py-5">
            <div className="row">
                {packages.map((pkg, index) => (
                    <PricingCard
                        key={index}
                        img={pkg.img} // Make sure to use the correct prop name here
                        title={pkg.title}
                        price={pkg.price}
                        p={pkg.p}
                        description={pkg.description}
                        features={pkg.features}
                    />
                ))}
            </div>
        </div>
    );
};

export default PricingCards;
