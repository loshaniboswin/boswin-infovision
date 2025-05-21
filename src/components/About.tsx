import {
  ArrowRight,
  Building,
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const About = () => {
  const milestones = [
    {
      year: "2006",
      description:
        "Embarking from Canada, our voyage commenced with a dedicated team of visionary entrepreneurs, united by the pursuit of global innovation.",
    },
    {
      year: "2007",
      description:
        "Expanding our horizons, we planted the seed of Boswin's presence in Hong Kong, marking the inception of our global journey.",
    },
    {
      year: "2008",
      description:
        "With a commitment to innovation, we ventured into Sri Lanka, establishing our presence across three branches, focusing on IT solutions and fintech services.",
    },
    {
      year: "2010",
      description:
        "Enriching our trajectory, we forged a strategic partnership with Xiaomi, fortifying our position as a dynamic player in the industry.",
    },
    {
      year: "2012",
      description:
        "Infusing innovation, we introduced Alipay to Sri Lanka, bridging technology and finance for our ever-growing audience.",
    },
    {
      year: "2014",
      description:
        "China became a canvas for our aspirations as we unfurled the Zhejiang Boswin branch, solidifying our commitment to excellence.",
    },
    {
      year: "2016",
      description:
        "In sync with China's digital landscape, we partnered with WeChat, an embodiment of connectivity and interaction.",
    },
    {
      year: "2018",
      description:
        "Further enriching our service spectrum, Hainan Boswin emerged as a distinct entity, devoted to business counseling and guidance.",
    },
  ];

  const services = [
    {
      title: "SRIPAY",
      description: "Custom-Designed Payment Gateway",
      details:
        "Your go-to custom payment gateway for seamless online transactions. Authorized Alipay agent with the approval of the Central Bank of Sri Lanka.",
    },
    {
      title: "MISTORE",
      description: "Official Wholesaler and Retailer of Sri Lanka",
      details:
        "Your official Xiaomi products destination, serving as the authorized wholesaler and retailer in Sri Lanka.",
    },
    {
      title: "GoGreen",
      description: "Electric Three Wheeler Conversion",
      details:
        "Upgrade your three-wheeler with the BOSWIN ECO-Electric Conversion. Go green and save with an electric twist!",
    },
    {
      title: "K'DONA",
      description: "Premium Gem and Jewellery",
      details:
        "Offering the finest high-end gem jewelry and ethical gem and jewelry range.",
    },
    {
      title: "ALIPAY",
      description: "Official Partner for Sri Lanka",
      details:
        "The official partner for Sri Lanka, simplifying payments and enhancing financial convenience.",
    },
    {
      title: "BEEZ24",
      description: "Service Platform catered to Entrepreneurs",
      details:
        "Your service platform in the heart of China Mainland, exclusively for entrepreneurs. Unlock new opportunities and support for your business ventures.",
    },
    {
      title: "FALCORRA",
      description: "Authorized Wholesaler and Retailer",
      details: "Authorized wholesaler and retailer of premium bicycles.",
    },
    {
      title: "VEIN GRAPHITE",
      description: "The World's Purest Vein Graphite",
      details:
        "Home to the world's purest vein graphite, offering unmatched quality and performance in the industry.",
    },
    {
      title: "LOOLECONDERE TEA",
      description: "Premium Ceylonese Tea",
      details: "Savor the premium taste of Ceylonese tea excellence.",
    },
    {
      title: "WECHATPAY",
      description: "Official Partner for Sri Lanka",
      details:
        "Your official partner for Sri Lanka, streamlining payments for seamless transactions.",
    },
    {
      title: "CITYMALL",
      description: "Commercial and Lifestyle Center",
      details:
        "Your ultimate destination for a blend of commercial and lifestyle delights.",
    },
  ];

  // State for the timeline slider
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const timelineRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [autoScrollDirection, setAutoScrollDirection] = useState(1); // 1 for right, -1 for left

  // Function to scroll to next milestone
  const scrollNext = () => {
    if (activeIndex < milestones.length - 1) {
      setActiveIndex(activeIndex + 1);
      setIsAutoScrolling(false);
    }
  };

  // Function to scroll to previous milestone
  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setIsAutoScrolling(false);
    }
  };

  // Handle mouse down for manual dragging
  const handleMouseDown = (e) => {
    if (timelineRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - timelineRef.current.offsetLeft);
      setScrollLeft(timelineRef.current.scrollLeft);
      setIsAutoScrolling(false);
    }
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
    // Find closest item to snap to
    if (timelineRef.current) {
      const itemWidth = timelineRef.current.offsetWidth;
      const scrollPos = timelineRef.current.scrollLeft;
      const nearestIndex = Math.round(scrollPos / itemWidth);
      setActiveIndex(
        Math.min(Math.max(nearestIndex, 0), milestones.length - 1)
      );
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    if (timelineRef.current) {
      const x = e.pageX - timelineRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
      timelineRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Toggle auto scrolling
  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
    // Reset direction to right when starting
    if (!isAutoScrolling) {
      setAutoScrollDirection(1);
    }
  };

  // Handle auto scrolling effect
  useEffect(() => {
    let animationId;
    if (isAutoScrolling && timelineRef.current) {
      const animate = () => {
        if (timelineRef.current) {
          timelineRef.current.scrollLeft += 2 * autoScrollDirection;

          // Check if we need to change direction
          if (
            autoScrollDirection > 0 &&
            timelineRef.current.scrollLeft >=
            timelineRef.current.scrollWidth - timelineRef.current.clientWidth
          ) {
            setAutoScrollDirection(-1);
          } else if (
            autoScrollDirection < 0 &&
            timelineRef.current.scrollLeft <= 0
          ) {
            setAutoScrollDirection(1);
          }

          animationId = requestAnimationFrame(animate);
        }
      };
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAutoScrolling, autoScrollDirection]);

  // Effect to handle scrolling animation when activeIndex changes
  useEffect(() => {
    if (timelineRef.current && !isDragging) {
      const itemWidth = timelineRef.current.offsetWidth;
      timelineRef.current.scrollTo({
        left: activeIndex * itemWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section id="about" className=" bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="text-right">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy to-red-500 text-center">
            About Boswin
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-red-500 mb-6 mx-auto"></div>

        </div>
        <p className="text-boswin-gray text-3xl">
          Boswin Group (Pvt) Ltd, Established Since 2006
        </p>
      </div>

      {/* Company Introduction */}
      <section className="py-16 bg-white bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-6xl font-bold mb-8 text-center text-white"
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                color: "white",
              }}
            >
              COMPANY INTRODUCTION
            </h2>


            <div className="prose prose-lg mx-auto text-boswin-gray text-2xl text-center">
              <p className="mb-6">
                Boswin Group is a dynamic technology development company headquartered in Sri Lanka, with networks in Hong Kong and China. Driven by innovation, Boswin explores global advancements to make a technological impact.
                Currently, the group operates across Fintech, Agriculture, Education, Industrial Solutions, Manufacturing, Exports, Business Solutions, and Trading. It also engages in International Investments, Consultancy, and Logistics.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-boswin-teal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white relative text-left">
                <span
                  className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-8 text-center"

                >

                </span>
                <span className="relative text-6xl">Vision</span>
              </h2>
              <p className="text-2xl text-left">
                To become the leading global company based in Sri Lanka,
                bringing the world together under one roof.
              </p>
            </div>
            <div className="text-center p-8 backdrop-blur-sm">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white relative text-right">
                <span
                  className="absolute inset-0 text-white opacity-50 text-8xl"

                >

                </span>
                <span className="relative text-6xl">Mission</span>
              </h2>
              <p className="text-2xl text-right">
                To achieve innovative excellence and completely modernize the
                digital lifestyle of people around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Updated with Enhanced Scroll Animation */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-boswin-navy to-red-500 text-transparent bg-clip-text"

            >
              THE JOURNEY OF BOSWIN
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mb-8"></div>
            <p className="text-2xl text-boswin-gray text-center mb-12">
              In the annals of Boswin's remarkable journey, every moment is a
              testament to our relentless pursuit of innovation, global
              expansion, and unwavering commitment.
            </p>

            {/* Timeline Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={scrollPrev}
                disabled={activeIndex === 0}
                className={`p-2 rounded-full bg-red-500 text-white ${activeIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600"
                  }`}
              >
                <ChevronLeft size={24} />
              </button>

              {/* <button
                onClick={toggleAutoScroll}
                className={`px-4 py-2 rounded-full ${
                  isAutoScrolling ? "bg-red-600" : "bg-red-500"
                } text-white hover:bg-red-600 transition-colors`}
              >
                {isAutoScrolling ? "Stop Auto-Scroll" : "Auto-Scroll"}
              </button> */}

              <button
                onClick={scrollNext}
                disabled={activeIndex === milestones.length - 1}
                className={`p-2 rounded-full bg-red-500 text-white ${activeIndex === milestones.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600"
                  }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Timeline Slider with Enhanced Animation */}
            <div
              className="relative overflow-hidden rounded-lg shadow-lg bg-white"
              style={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                ref={timelineRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  scrollSnapType: "x mandatory",
                  cursor: isDragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full snap-center transition-all duration-500"
                    style={{
                      scrollSnapAlign: "center",
                    }}
                  >
                    <div className="p-8">
                      <div className="relative mb-8">
                        <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-red-200 to-red-500 transform -translate-y-1/2"></div>
                        <div className="flex justify-around relative">
                          {milestones.map((_, i) => (
                            <div
                              key={i}
                              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${i === index
                                ? "bg-red-500 scale-125"
                                : i < index
                                  ? "bg-red-400"
                                  : "bg-gray-200"
                                }`}
                              onClick={() => setActiveIndex(i)}
                            >
                              <div
                                className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-transparent"
                                  }`}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className="bg-white p-8 rounded-lg transition-all duration-500 transform hover:scale-105"
                        style={{
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                      >
                        <h3
                          className="text-8xl font-bold text-red-500 mb-6 text-center"
                          style={{
                            textShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          {milestone.year}
                        </h3>
                        <p
                          className="text-boswin-gray text-3xl text-center leading-relaxed"
                          style={{
                            textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Year Indicators */}
            {/* <div className="flex justify-between mt-8 px-4 overflow-x-auto hide-scrollbar">
              {milestones.map((milestone, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoScrolling(false);
                  }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-red-500 text-white font-bold scale-110"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {milestone.year}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
