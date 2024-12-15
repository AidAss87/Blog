export const ArrowButton = ({ left, disable, onClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disable}
      className={
        "h-8 w-8 border-[3px] border-solid  rounded-full flex justify-center items-center mr-[15px]  " +
        (disable
          ? "border-[#2828284a]"
          : "border-[#282828] transition-all duration-200 hover:scale-110")
      }
    >
      <svg
        className={left ? "rotate-180" : ""}
        width="15"
        height="15"
        viewBox="0 0 11 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5542 6.69447C10.9447 7.085 10.9447 7.71816 10.5542 8.10869L4.19024 14.4726C3.79972 14.8632 3.16655 14.8632 2.77603 14.4726C2.3855 14.0821 2.3855 13.449 2.77603 13.0584L8.43288 7.40158L2.77603 1.74473C2.3855 1.3542 2.3855 0.721038 2.77603 0.330513C3.16655 -0.0600111 3.79972 -0.0600111 4.19024 0.330513L10.5542 6.69447ZM-0.00988761 6.40158L9.8471 6.40158L9.8471 8.40158L-0.00988778 8.40158L-0.00988761 6.40158Z"
          fill={disable ? "#2828284a" : "#282828"}
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
