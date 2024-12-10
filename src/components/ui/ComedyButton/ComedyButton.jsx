
const ComedyButton = ({ isActive, children }) => {
  return (
    <div className="cursor-pointer">
      <p
        onFocus={() => isActive(true)}
        onBlur={() => isActive(false)}
        className={`relative font-[poppins] font-semibold inline-block text-[#313131] after:content-[''] after:absolute after:rounded-full after:top-[24px] after:left-0 after:h-[2px] after:bg-[#313131] after:transition-all after:duration-300 ${
          isActive ? "after:w-[56px]" : "after:w-0"
        }`}
      >
        {children}
      </p>
    </div>
  );
};

export default ComedyButton;
