const Button = ({ id, text, className }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("gallery-section");

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 origin-center w-[120%] h-[120%] group-hover:size-10 group-hover:right-2 rounded-full bg-white-50 transition-all duration-500" />
        <p className="uppercase md:text-lg text-black group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 transition-all duration-500 group-hover:text-white-50">
          {text}
        </p>
        <div className="group-hover:bg-white-50 size-10 rounded-full overflow-hidden absolute right-2 flex justify-center items-center">
          <img
            src="/images/arrow-down.svg"
            alt="arrow-down"
            className="size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500"
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
