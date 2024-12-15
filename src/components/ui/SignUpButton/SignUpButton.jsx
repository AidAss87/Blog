const SignUpButton = ({ children }) => {
  return (
    <div>
      <button
        type="submit"
        className="flex items-center justify-center font-poppins font-normal text-[#FFFFFF] cursor-pointer w-20 h-7 px-3.5 rounded bg-gradient-to-r from-custom-gray to-custom-black border-2 border-white"
      >
        {children}
      </button>
    </div>
  );
};

export default SignUpButton;
