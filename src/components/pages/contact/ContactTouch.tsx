import { Button, Input } from '@/components/commons';

const ContactTouch = (): JSX.Element => {
  return (
    <div className="min-h-calc[100vh - 90px] flex gap-8 px-48 xl:px-0 md:flex-col">
      <div className="flex flex-1 flex-col">
        <h5 className="typo-[48-bold] xs:typo-[40-bold]">Get in touch</h5>
        <span className="mb-15">Welcome back! Please enter your details</span>
        <Input
          size="small"
          icon="user"
          placeholder="Full Name"
          className="w-80 sm:w-full"
        />
        <Input
          size="small"
          icon="sms"
          placeholder="Email Address"
          className="my-8 w-80 sm:w-full"
        />{' '}
        <Input
          size="small"
          placeholder="Your Message..."
          className="w-80 sm:w-full"
          inputType="textarea"
        />
        <Button title="Send" type="primary" className="mt-10" />
      </div>
      <div className="flex flex-1 md:hidden">
        <img src="/media/contact.png" alt="" className="object-cover" />
      </div>
    </div>
  );
};

export { ContactTouch };
