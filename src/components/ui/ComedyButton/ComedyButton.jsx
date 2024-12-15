const ComedyButton = ({ children }) => {
  return (
    <div className="cursor-pointer">
      <button
        className={`relative font-[poppins] font-normal inline-block text-[#313131] after:content-[''] after:absolute after:rounded-full after:top-[24px] after:left-0 after:h-[2px] after:bg-[#313131] after:transition-all after:duration-300 
          hover:after:w-full after:w-0"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default ComedyButton;
