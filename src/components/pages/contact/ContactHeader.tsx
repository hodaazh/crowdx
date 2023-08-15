const ContactHeader = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-48 xl:px-0">
      <span className="text-center typo-[24-bold]">CONTACT WITH</span>
      <div className="xl:px-16">
        <img
          src="/media/logo.svg"
          alt=""
          className="mt-8 mb-48 object-cover md:mb-32"
        />
      </div>
    </div>
  );
};

export { ContactHeader };
