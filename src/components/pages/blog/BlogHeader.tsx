import { Button, Input } from '@/components/commons';

const BlogHeader = (): JSX.Element => {
  return (
    <div className="flex justify-around gap-8 border-b pb-20 lg:flex-col xs:pb-10">
      <div className="flex-[65%] flex-col pl-24 md:pl-0">
        <span className="typo-[16-bold]">CrowdX BLOG</span>
        <h1 className="mt-2 leading-none typo-[88-bold-heading] md:typo-[60-bold]">
          Learn about investing in land.
        </h1>
        <div className="mt-16 flex gap-8 xs:flex-col">
          <Input
            size="small"
            icon="sms"
            placeholder="Email Address"
            className="w-80 sm:w-full"
          />
          <Button title="Subscribe" type="primary" size="small" />
        </div>
      </div>
      <img
        src="/media/blog.png"
        className="flex-[40%] object-cover lg:hidden"
        alt=""
      />
    </div>
  );
};

export { BlogHeader };
