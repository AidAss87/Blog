import { useState } from "react";

export const EnterNameForm = ({
  label,
  id,
  placeholder,
  register,
  errors,
  name,
  children,
}) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <form>
      {" "}
      <div
        className={
          "flex w-[406px] h-12 py-2.5 px-2 bg-[#fafafacf] gap-2 rounded-sm"
        }
      >
        <label
          htmlFor={id}
          className={`w-24 h-7 px-4 py-2 text-white flex justify-center items-center text-[9px] tracking-[2px] ${
            isSearch
              ? "bg-gradient-to-r from-gray_custom_1 to-gray_custom_2"
              : "bg-gradient-to-r from-custom-gray to-custom-black"
          }`}
        >
          {label}
        </label>
        <div
          className={`flex justify-center items-center  ${
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
              {...register(name, { required: true })}
              id={id}
              placeholder={placeholder}
              className={`border-0 outline-none bg-transparent text-sm`}
            />
            {children}
          </div>
          {errors[name] && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
      </div>
    </form>
  );
};
