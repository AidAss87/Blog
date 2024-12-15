import { useForm } from "react-hook-form";
import { EnterNameForm } from "../components/ui/EnterNameForm/EnterNameForm";
import SignUpButton from "../components/ui/SignUpButton/SignUpButton";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Здесь вы можете отправить данные на сервер
  };

  return (
    <div className="varela bg-custom-image bg-cover bg-center overflow-hidden">
      <div className="bg-black bg-opacity-70 overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-7 h-screen justify-center items-center">
            <EnterNameForm
              label="Name"
              placeholder="Enter Your Name"
              register={register}
              errors={errors}
              id="name"
              name="name"
            ></EnterNameForm>
            <EnterNameForm
              label="Email"
              placeholder="Enter Your Email"
              register={register}
              errors={errors}
              id="email"
              name="email"
            ></EnterNameForm>
            <EnterNameForm
              label="Password"
              placeholder="Enter Your Password"
              register={register}
              errors={errors}
              id="password"
              name="password"
            ></EnterNameForm>
            <div className="mt-8 flex justify-center">
              <SignUpButton>SignUp</SignUpButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
