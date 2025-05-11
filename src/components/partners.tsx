import partner from '../assets/partner.png';

const PartnersSection = () => {
  
  return(
    <div className="flex flex-col items-center bg-[#150c18] py-[2.5rem] justify-center">
      <h6 className="text-gray-500 text-xs">Trusted by 3000+ partners & customers</h6>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full mt-5 place-items-center">
        <img src={partner} alt="Partner logo" />
        <img src={partner} alt="Partner logo" />
        <img src={partner} alt="Partner logo" />
        <img src={partner} alt="Partner logo" />
        <img src={partner} alt="Partner logo" />
      </div>
    </div>
  )
  
} 

export default PartnersSection;