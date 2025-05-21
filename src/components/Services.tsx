import { CircleCheck, ArrowRight, Images } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import alipay from "../images/alipay2.png"
import beeze from "../images/Beez.png"
import citymall from "../images/citymall.png"
import falcora from "../images/falcora.png"
import kdona from "../images/Kdona.png"
import sripay from "../images/Sripay.png"
import tea from "../images/tea2.png"
import V from "../images/V2.png"
import wechat from "../images/Wechat.png"
import xiomi from "../images/Xiomi.png"
import fintech from "../images/fintech.png"
import degitalTechnology from "../images/degitalInformation.png"
import technology from "../images/technologyDevelopment.png"
import businessSolution from "../images/businessSolution.png"
import BrandSection from "./brand";


// const services = [
//   {
//     title: "Technology Development",
//     description: "Custom software solutions for diverse industries",
//     features: ["Web Applications", "Mobile Solutions", "Enterprise Software"],
//     image:
//       "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheenterpriseworld.com%2Fthe-evolution-of-technology-development%2F&psig=AOvVaw1luhtFc2CkwHgUCIGiisyK&ust=1747810350837000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC18JO7sY0DFQAAAAAdAAAAABAE",
//   },
//   {
//     title: "Digital Transformation",
//     description: "Helping businesses evolve in the digital landscape",
//     features: [
//       "Business Process Automation",
//       "Cloud Migration",
//       "Digital Strategy",
//     ],
//   },
//   {
//     title: "FinTech Solutions",
//     description: "Innovative financial technology applications",
//     features: [
//       "Payment Gateways",
//       "Digital Banking",
//       "Blockchain Applications",
//     ],
//   },
//   {
//     title: "Business Solutions",
//     description: "End-to-end business management systems",
//     features: ["ERP Systems", "CRM Solutions", "Supply Chain Management"],
//   },
// ];




const services = [
  {
    title: "Technology Development",
    description: "Custom software solutions for diverse industries",
    features: ["Web Applications", "Mobile Solutions", "Enterprise Software"],
    image: technology,
  },
  {
    title: "Digital Transformation",
    description: "Helping businesses evolve in the digital landscape",
    features: [
      "Business Process Automation",
      "Cloud Migration",
      "Digital Strategy",
    ],
    image: degitalTechnology,
  },
  {
    title: "FinTech Solutions",
    description: "Innovative financial technology applications",
    features: [
      "Payment Gateways",
      "Digital Banking",
      "Blockchain Applications",
    ],
    image: fintech,
  },
  {
    title: "Business Solutions",
    description: "End-to-end business management systems",
    features: ["ERP Systems", "CRM Solutions", "Supply Chain Management"],
    image: businessSolution,
  },
];


const brands = [
  {
    title: "SRIPAY",
    description: "Custom-Designed Payment Gateway",
    details:
      "Your go-to custom payment gateway for seamless online transactions. Authorized Alipay agent with the approval of the Central Bank of Sri Lanka.",
    logo: sripay,
  },
  {
    title: "MISTORE",
    description: "Official Wholesaler and Retailer of Sri Lanka",
    details:
      "Your official Xiaomi products destination, serving as the authorized wholesaler and retailer in Sri Lanka.",
    logo: xiomi,
  },
  {
    title: "GoGreen",
    description: "Electric Three Wheeler Conversion",
    details:
      "Upgrade your three-wheeler with the BOSWIN ECO-Electric Conversion. Go green and save with an electric twist!",
    logo: "",
  },
  {
    title: "K'DONA",
    description: "Premium Gem and Jewellery",
    details:
      "Offering the finest high-end gem jewelry and ethical gem and jewelry range.",
    logo: kdona,
  },
  {
    title: "ALIPAY",
    description: "Official Partner for Sri Lanka",
    details:
      "The official partner for Sri Lanka, simplifying payments and enhancing financial convenience.",
    logo: alipay,
  },
  {
    title: "BEEZ24",
    description: "Service Platform catered to Entrepreneurs",
    details:
      "Your service platform in the heart of China Mainland, exclusively for entrepreneurs. Unlock new opportunities and support for your business ventures.",
    logo: beeze,
  },
  {
    title: "FALCORRA",
    description: "Authorized Wholesaler and Retailer",
    details: "Authorized wholesaler and retailer of premium bicycles.",
    logo: falcora,
  },
  {
    title: "VEIN GRAPHITE",
    description: "The World's Purest Vein Graphite",
    details:
      "Home to the world's purest vein graphite, offering unmatched quality and performance in the industry.",
    logo: V,
  },
  {
    title: "LOOLECONDERE TEA",
    description: "Premium Ceylonese Tea",
    details: "Savor the premium taste of Ceylonese tea excellence.",
    logo: tea,
  },
  {
    title: "WECHATPAY",
    description: "Official Partner for Sri Lanka",
    details:
      "Your official partner for Sri Lanka, streamlining payments for seamless transactions.",
    logo: "",
  },
  {
    title: "CITYMALL",
    description: "Commercial and Lifestyle Center",
    details:
      "Your ultimate destination for a blend of commercial and lifestyle delights.",
    logo: citymall,
  },
];


const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Alternative Background Design Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient with red undertone */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-red-50 to-gray-50"></div>

        {/* Hexagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="text-right">
            <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy to-red-500">
              Our Brands & Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-red-500 mb-6 ml-auto"></div>
          </div>
          <p className="text-boswin-gray text-3xl">
            Discover our comprehensive range of technology solutions and
            services designed to transform businesses across industries.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-16 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                } items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-boswin-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-boswin-gray mb-4 text-2xl">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CircleCheck className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-2xl text-boswin-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


        {/* Brands Section - Auto Slider */}
        {/* <div className="mt-20">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white relative">

                <span className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-boswin-navy to-red-500 text-transparent bg-clip-text">Brands</span>
              </h2>
            </div>
            <p className="text-boswin-gray text-lg">
              We're proud to represent and partner with these innovative brands
              across diverse industries.
            </p>
          </div>

          <AutoSlider brands={brands} />
        </div> */}

        <div className="mt-16 text-center relative">
        <h2 className="text-3xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy to-red-500">
              Our Brands
            </h2>
          {/* Decorative red accent for the bottom section */}
          {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div> */}
          {/* <p className="text-boswin-gray mb-6 max-w-2xl mx-auto relative z-10">
            Looking for a customized solution for your specific business needs?
            Our team of experts is ready to help you develop the perfect
            solution.
          </p> */}
        </div>
      </div>
      <BrandSection/>
    </section>
  
  );
};

// Auto Slider Component
const AutoSlider = ({ brands }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = brands.length;
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Handle auto-scrolling with proper cleanup
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setIsTransitioning(true);
          setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);

          // Reset transition state after animation completes
          setTimeout(() => {
            setIsTransitioning(false);
          }, 700); // Match with CSS transition duration
        }
      }, 5000); // 5 seconds per slide for better readability
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused, totalSlides]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const goToSlide = (slideIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  // Calculate the visible slides indices (3 visible slides)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentSlide + i) % totalSlides);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative px-4 py-12">
      {/* Top section with title and controls */}
      <div className="flex justify-between items-center mb-8">
        <div></div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-1.5">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "w-8 bg-red-500"
                  : "w-1.5 bg-gray-300 hover:bg-red-300"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white hover:bg-gray-50 shadow-md text-boswin-navy hover:text-red-500 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white hover:bg-gray-50 shadow-md text-boswin-navy hover:text-red-500 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              aria-label="Next slide"
              disabled={isTransitioning}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modern Multi-Card Slider */}
      <div
        ref={sliderRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-8 py-8 px-4">
          {/* Render 3 visible cards for desktop */}
          {visibleIndices.map((index, position) => (
            <div
              key={index}
              className={`card-container transition-all duration-700 ease-out ${position === 0
                ? "opacity-100 flex-1"
                : position === 1
                  ? "opacity-100 flex-1"
                  : "opacity-100 flex-1 hidden md:block"
                }`}
              style={{
                transform: isTransitioning
                  ? "translateY(8px)"
                  : "translateY(0)",
              }}
            >
              <div
                className={`h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${position === 0 ? "transform rotate-0" : ""
                  }`}
              >
                {/* Brand Card Header with Gradient */}
                <div className="relative h-24 bg-gradient-to-r from-red-500 to-boswin-blue flex items-center justify-center px-6">
                  <img
                    src={brands[index].logo}
                    alt=""
                    className="w-30 h-24 object-contain"
                  />

                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-1.5 w-8 bg-red-500 rounded-full mr-3"></div>
                    <p className="text-red-500 font-medium text-2xl uppercase tracking-wider">
                      {brands[index].description}
                    </p>
                  </div>

                  <div className="flex-1">
                    <p className="text-boswin-gray text-2xl leading-relaxed">
                      {brands[index].details}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <button className="flex items-center text-sm font-medium text-boswin-navy hover:text-red-500 transition-colors group">
                      Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only dots */}
        <div className="flex justify-center mt-6 gap-1.5 md:hidden">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-8 bg-red-500"
                : "w-1.5 bg-gray-300 hover:bg-red-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="mt-8 relative h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-red-500 transition-all duration-300 ease-out"
          style={{
            width: `${((currentSlide + 1) / totalSlides) * 100}%`,
          }}
        ></div>
      </div>



      {/* Slide counter */}
      <div className="mt-4 text-right text-sm text-boswin-gray">
        <span className="font-bold text-red-500">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span>{totalSlides}</span>
      </div>
    </div>
  );
};

export default Services;
