import { useState } from "react";

export const EnterNameForm = ({ label, id, placeholder, children }) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className={`flex w-96 h-12 py-2.5 px-2 bg-[#FAFAFA] gap-2 rounded-sm`}>
      <label
        htmlFor={id}
        className={`w-24 h-7  text-white flex justify-center items-center ${
          isSearch
            ? "bg-gradient-to-r from-gray_custom_1 to-gray_custom_2"
            : "bg-gradient-to-r from-custom-gray to-custom-black"
        }`}
      >
        {label}
      </label>
      <div
        className={`flex justify-center items-center bg-inherit ${
          isSearch
            ? "border-b-2 border-[#6B6B6B] focus:border-[#6B6B6B] focus:outline-none transition-all duration-200"
            : "border-b-2 border-transparent focus:outline-none transition-all duration-200"
        }`}
      >
        <div className="relative">
          <input
            onFocus={() => setIsSearch(true)}
            onBlur={() => setIsSearch(false)}
            type="text"
            name=""
            id={id}
            placeholder={placeholder}
            className={`border-0 outline-none bg-[#FAFAFA]`}
          />
          {children}
        </div>
      </div>
    </div>
  );
};
