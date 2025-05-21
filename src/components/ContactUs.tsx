import { Building, Clock, Phone, PhoneCall } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="about">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy to-red-500">
            Contact Us
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mr-7">
            {/* Left Column: Office Details */}
            <div className="space-y-10">
              {/* Sri Lanka Office */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-red-300">
                <h3 className="text-3xl font-bold text-boswin-navy mb-4">
                  Sri Lanka Office
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building className="w-5 h-5 text-red-500 mt-1 mr-3" />
                    <p className="text-boswin-gray">
                      12, Second Lane, Beddagana Road, Pita Kotte, Sri Lanka
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-boswin-gray">Mon-Sat: 08:00 - 18:00</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-boswin-gray">+94 76 300 6555</p>
                  </div>

                </div>
              </div>

              {/* Head Office */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-red-300">
                <h3 className="text-3xl font-bold text-boswin-navy mb-4">
                  Head Office
                </h3>

                <h4 className="text-lg font-semibold text-red-500 mb-4">
                  Zhejiang Boswin Technology Co. Ltd
                </h4>


                <div className="space-y-4">
                  <div className="flex items-start ">
                    <Building className="w-5 h-5 text-red-500 mt-1" />
                    <p className="text-boswin-gray">
                      Zhonghao International Business Center, No. 672, Xintang
                      Road, Jianggan District, Hangzhou, Zhejiang, China
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-boswin-gray">Mon-Sat: 08:00 - 18:00</p>
                  </div>




                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-boswin-gray">+8618626859893</p>
                  </div>


                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-gray-50 py-12 px-6 md:px-10 rounded-lg shadow-md relative overflow-hidden h-fit">
              <div className="absolute top-[-30px] right-[-30px] bg-red-100 p-6 rounded-full">
                <PhoneCall className="w-12 h-12 text-red-500" />
              </div>

              <h3 className="text-3xl md:text-3xl font-bold text-center text-boswin-navy mb-6">
                Send Us a Message
              </h3>

              <form className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 font-medium mb-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>

                {/* <div className="flex flex-col">
                  <label className="text-sm text-gray-600 font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div> */}

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Type your message..."
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>


                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-all duration-200 shadow-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
