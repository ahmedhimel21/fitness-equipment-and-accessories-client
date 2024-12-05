import { Icon } from "@iconify/react";

const Contacts = () => {
  return (
    <div className="bg-lightBg text-secondary">
      <div className="max-w-7xl mx-auto px-3 lg:px-0 pb-10">
        <div className="text-center py-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-primary">
            Contact Information
          </h1>
          <h3 className="text-sm lg:text-base capitalize">
            Reach out to us for any inquiries or assistance!
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full">
          <div className="flex items-center gap-5 bg-white rounded-md w-full p-4">
            <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
              <Icon icon="ic:round-phone" className="text-xl" />
            </span>

            <div>
              <p className="text-sm lg:text-base">
                Customer Support (9 AM - 8 PM)
              </p>
              <h1 className="text-lg font-bold">+123-456-7890</h1>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white rounded-md w-full p-4">
            <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
              <Icon icon="clarity:email-line" className="text-xl" />
            </span>

            <div>
              <p className="text-sm lg:text-base">
                For Bulk Orders & Complaints
              </p>
              <h1 className="text-lg font-bold">support@fitgear.com</h1>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white rounded-md w-full p-4">
            <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
              <Icon icon="bx:support" className="text-xl" />
            </span>

            <div>
              <p className="text-sm lg:text-base">Warranty & Returns</p>
              <h1 className="text-lg font-bold">returns@fitgear.com</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 my-8 w-full text-sm lg:text-base">
          <div className="bg-white rounded-md w-full h-full lg:h-[470px]">
            <h1 className="bg-primary text-white rounded-t-md font-bold text-2xl px-4 py-2">
              Customer Service
            </h1>
            <div className="p-4">
              <h3 className="text-lg font-bold">Dedicated Fitness Support</h3>
              <li>support@fitgear.com</li>

              <h3 className="text-lg font-bold mt-3">Phone Support</h3>
              <li>+123-456-7890</li>
              <li>+123-456-7891</li>
            </div>
          </div>

          <div className="bg-white rounded-md w-full h-full lg:h-[470px]">
            <h1 className="bg-primary text-white rounded-t-md font-bold text-2xl px-4 py-2">
              Sales & Inquiries
            </h1>
            <div className="p-4">
              <h3 className="text-lg font-bold">Sales Hours</h3>
              <h1>Monday - Friday</h1>
              <p>8:00 AM - 9:00 PM</p>

              <h1 className="mt-2">Saturday - Sunday</h1>
              <p>9:00 AM - 6:00 PM</p>

              <h3 className="text-lg font-bold mt-3">Sales Support</h3>
              <li>sales@fitgear.com</li>

              <h3 className="text-lg font-bold mt-3">Marketing</h3>
              <li>marketing@fitgear.com</li>

              <h3 className="text-lg font-bold mt-3">General Inquiries</h3>
              <li>info@fitgear.com</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
