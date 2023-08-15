const AboutHeader = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-center typo-[24-bold]">ABOUT</span>
      <img
        src="/media/logo.svg"
        alt=""
        className="mt-6 mb-40 md:mb-28 md:!h-20 md:!w-64"
      />
      <span className="mb-6 typo-[24-bold] lg:self-start">WHY US?</span>
      <p className="typo-[18]">
        Rolling Fork Timber Tract is a 3,209 acre property in Sevier County,
        Arkansas with mature hardwoods and well diversified age classes of
        planted pines. This tract is an opportunity to invest in a large,
        professionally managed forest whose size and diversity of tree species
        and age classes may provide investors with early harvest and cash flow
        potential. Consisting of 91% productive timberland, this property has
        approximately 1,183 acres of planted pine of various ages as well as
        1,730 acres of mature hardwoods of multiple species. This diversity of
        species and age classes offers the opportunity for harvest activity in
        multiple years of the hold period, and thus anticipated cash flow for
        investors.
      </p>
    </div>
  );
};

export { AboutHeader };
