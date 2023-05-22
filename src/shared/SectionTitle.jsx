const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-12 text-center">
      <p className="text-yellow-600">--- {subHeading} ---</p>
      <h3 className="border-y-4 py-5 text-4xl uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
