import Image from "next/image";
import React from "react";


const GSkillPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">

      {/* Center Content */}
      <div className="text-center px-4">
        <h1 className="text-xl font-semibold text-gdg_blue mb-2">Welcome to</h1>
        <h3 className="">
            <span className='text-gdg_blue text-5xl font-bold'>
                G
            </span>
            <span className='text-gdg_green text-5xl font-bold'>
                Ski
            </span>
            <span className='text-gdg_red text-5xl font-bold'>
                ll
            </span>
            <span className='text-gdg_yellow text-5xl font-bold'>
                .
            </span>
        </h3>
        <div className="justify-center flex items-center space-x-2 mt-4">
        <p className="mt-4 w-[60%] text-lg text-gdg_blue font-semibold">
         The official GDG Algiers Members Skills Dashboard serves as a central platform
         to highlight the diverse expertise and contributions of our community members.
         It showcases how each member actively shares their knowledge, fosters
         collaboration, and empowers others within the tech ecosystem.
        </p>
        </div>
        
      </div>

      {/* Footer */}

      <footer className="absolute bottom-4 flex items-center space-x-2">
        <Image
          src="/gdg.svg"
          alt="GDG Algiers Logo"
          // className="w-32 h-8"
          height={20}
          width={180}
        />
      </footer>
    </div>
  );
};

export default GSkillPage;
