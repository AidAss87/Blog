export const ActionButton = ({ children, isAction, handleClickAction }) => {
  return (
    <div className="cursor-pointer flex items-baseline gap-4">
      <p
        onClick={handleClickAction}
        className={`font-normal  ${isAction ? "text-white" : "text-[#B8B8B8]"}`}
      >
        {children}
      </p>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" fill={isAction ? "white" : ""} />
      </svg>
    </div>
  );
};
