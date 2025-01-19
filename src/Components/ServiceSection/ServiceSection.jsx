import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import deep from "../../assets/deep.png";
import img from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";
import six from "../../assets/six.png";
import saven from "../../assets/saven.png";
import eight from "../../assets/eight.png";
import nine from "../../assets/nine.png";
import ten from "../../assets/ten.png";
import eleven from "../../assets/eleven.png";
import twilive from "../../assets/twilive.png";
import threen from "../../assets/threen.png";
import fourt from "../../assets/fourt.png";
import fiv from "../../assets/fiv.png";
import BasicModal from "../Form/USeForm";

const services = [
  {
    title: "Cleaning Services",
    items: [
      { image: deep, name: "Deep Cleaning", description: "Complete deep cleaning of all rooms, surfaces, and areas. Special focus on kitchens, bathrooms, and neglected spots." },
      { image: img, name: "Office Cleaning", description: "Regular or one-time cleaning for offices, desks, and shared spaces. Restaurant cleaning included." },
      { image: three, name: "Kitchen Cleaning", description: "Thorough cleaning of kitchen surfaces, appliances, and equipment. Office cleaning." },
      { image: four, name: "Restaurant Cleaning", description: "Specialized cleaning for restaurants, including kitchens, dining areas, and bathrooms." },
      { image: five, name: "Carpet & Upholstery Cleaning", description: "Professional cleaning of carpets, rugs, and furniture upholstery." },
      { image: six, name: "Shop Cleaning", description: "Cleaning of retail spaces including rooms, windows, shelves, and fitting rooms." },
      { image: saven, name: "Window Cleaning", description: "Interior and exterior cleaning of windows for a streak-free finish." },
      { image: eight, name: "Bathroom Cleaning", description: "Detailed cleaning of all bathroom surfaces, including sinks, toilets, and showers." },
    ],
  },
  {
    title: "Transport & Other Services",
    items: [
      { image: nine, name: "Emergency Move Out Package", description: "Comprehensive services for moving out quickly, including cleaning, transport, and junk removal." },
      { image: ten, name: "Packing and Unpacking", description: "Professional packing services for belongings and unpacking at the new location." },
      { image: eleven, name: "Relocation Support", description: "Comprehensive services for moving, including packing, cleaning, transport, and unpacking." },
      { image: twilive, name: "Moving Helpers", description: "Assistance with packing, lifting, and organizing during business moves." },
      { image: threen, name: "Junk Removal and Disposal", description: "Professional disposal of carpets, rugs, and furniture upholstery." },
      { image: fourt, name: "Cleaning the Vacated Space", description: "Complete cleaning of a vacated space to leave it in good condition for new tenants or owners." },
      { image: fiv, name: "Handyman Services", description: "Quick fixes and installations during moves, including repairing minor issues in the new home." },
      { image: img, name: "Quick Transport and Relocation", description: "Immediate assistance for relocating, including packing and transport ambiguities." },
    ],
  },
];

const Service = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="container my-5">
      {services.map((section, index) => (
        <div key={index} className="mb-5">
          <h2 className="text-2xl font-bold mb-4 text-start">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.items.map((service, idx) => (
              <div key={idx} className="flex justify-center">
                <div  onClick={handleOpen}
                  className="p-4 border rounded-lg shadow-sm h-full transition-all duration-300 ease-in-out
                             hover:bg-green-700 hover:text-white text-green-700 flex flex-col items-center justify-between"
                >
                  <img src={service.image} alt={service.name} className="mx-auto mb-4 h-32 w-32 object-contain" />
                  <h5 className="font-bold text-lg mb-2 text-center">{service.name}</h5>
                  <p className="text-sm text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
        <BasicModal open={open } handleOpen={handleOpen} handleClose={handleClose} />
    </div>
  );
};

export default Service;
