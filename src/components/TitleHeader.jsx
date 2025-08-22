const TitleHeader = ({ sub, title }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <div className="px-4 py-2 bg-black-200 rounded-full w-fit text-sm md:text-base text-nowrap">
        {sub}
      </div>
      <div className="font-semibold text-3xl text-center md:text-5xl">
        {title}
      </div>
    </section>
  );
};

export default TitleHeader;
