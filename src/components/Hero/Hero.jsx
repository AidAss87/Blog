import { EnterNameForm } from "../ui/EnterNameForm/EnterNameForm";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen  ">
      <div className="absolute -z-10 inset-0 bg-black">
        <img
          src="../../../public/images/hero/background.png"
          alt="Hero BackG"
          className=" object-cover w-full h-full opacity-50"
        />
      </div>
      <div className=" flex-col items-start ml-[5.44rem]">
        <h1 className="text-[#fff] text-[5.31rem] pt-[10.38rem] w-[556px]">
          Welcome to Gates
        </h1>
        <h2 className="text-[#fafafa] text-lg mt-[1.31rem] w-[550px]">
          Get the latest news on your favourite mangas, anime and manhwa around
          the world!
        </h2>
        <div className="mt-[2rem]">
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
      <div>
        <img
          src="../../../public/images/hero/Intersect(2).png"
          className="absolute top-0 right-0 mr-[120px] mt-0 h-full "
          alt="Intersect"
        />
      </div>
      <div className="absolute bottom-[6.06rem] right-[5rem] text-1rem font-poppins text-[#b8b8b8] mix-blend-lighten">
        <p className="mb-[0.50rem]">Action</p>
        <p className="mb-[0.50rem]">Comedy</p>
        <p className="mb-[0.50rem]">Drama</p>
        <p className="mb-[0.50rem]">Military</p>
        <p className="mb-[0.50rem]">Fantasy</p>
      </div>
    </div>
  );
};
