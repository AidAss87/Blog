import { EnterNameForm } from "../ui/EnterNameForm/EnterNameForm";

export const Footer = () => {
  return (
    <div className="relative w-full h-[31.88rem] bg-gradient-to-r from-[#333] to-[#000] flex flex-col items-start pl-[4.6875rem] pt-[2.9375rem]">
      {" "}
      {/* Отступы слева и сверху */}
      <img
        src="../../../public/images/hero/Logo_white.png"
        className="w-[5.94rem] h-[5.25rem] mix-blend-lighten mb-[1.4375rem]" // Отступ между логотипом и текстом
        alt="Logo"
      />
      <p className="w-[32.5rem] h-[11.88rem] text-[#fff] mix-blend-lighten text-base font-normal leading-[2rem] mb-[6.5625rem]">
        {" "}
        {/* Отступ между текстом и авторскими правами */}
        Gates is a blog that focuses on Japanese art and anime. They feature
        information on Otaku conventions and other anime topics. Hear from
        famous anime filmmakers and artists as well as plenty of news about the
        art of cartoon creation in the Japanese culture.
      </p>
      {/* Линия на всю ширину экрана, теперь с отступом 22px (1.375rem) от текста с авторскими правами */}
      <div className="mix-blend-lighten">
        <div className="absolute inset-x-0 top-[calc(100% + 1.375rem)] h-[1px] bg-[#fff] opacity-50" />
        <p className="relative z-10 text-[#fff] mix-blend-lighten text-base font-normal mt-[1.375rem]">
          @copyright 2021 Gates
        </p>
      </div>
      <div className="absolute top-[47px] right-[11.75rem]">
        <EnterNameForm
          label="SUBSCRIBE"
          className="text-[9px]"
          placeholder="Enter your name"
        >
          <button className="absolute border-none top-[7px] w-[12px] h-[10px]">
            <img src="../../../public/images/hero/Group 4.png" />
          </button>
        </EnterNameForm>
      </div>
    </div>
  );
};
