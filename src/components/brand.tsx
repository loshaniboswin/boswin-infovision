import React from "react";
import Marquee from "react-fast-marquee";
import { Image as Images } from "lucide-react";
import alipay from "../images/alipay2.png";
import beeze from "../images/Beez.png";
import citymall from "../images/citymall.png";
import falcora from "../images/falcora.png";
import kdona from "../images/kdona.png";
import sripay from "../images/Sripay.png";
import tea from "../images/tea2.png";
import V from "../images/V2.png";
import wechat from "../images/Wechat.png";
import xiomi from "../images/Xiomi.png";
import ewheel from "../images/ewheel.png";

type Brand = {
    logo?: string;

    description: string;
    details?: string;
};

const brands: Brand[] = [
    {

        description: "Custom-Designed Payment Gateway",
        details:
            "Your go-to custom payment gateway for seamless online transactions. Authorized Alipay agent with the approval of the Central Bank of Sri Lanka.",
        logo: sripay,
    },
    {

        description: "Official Wholesaler and Retailer of Sri Lanka",
        details:
            "Your official Xiaomi products destination, serving as the authorized wholesaler and retailer in Sri Lanka.",
        logo: xiomi,
    },
    {

        description: "Electric Three Wheeler Conversion",
        details:
            "Upgrade your three-wheeler with the BOSWIN ECO-Electric Conversion. Go green and save with an electric twist!",
        logo:ewheel,
    },
    {

        description: "Premium Gem and Jewellery",
        details:
            "Offering the finest high-end gem jewelry and ethical gem and jewelry range.",
        logo: kdona,
    },
    {

        description: "Official Partner for Sri Lanka",
        details:
            "The official partner for Sri Lanka, simplifying payments and enhancing financial convenience.",
        logo: alipay,
    },
    {

        description: "Service Platform catered to Entrepreneurs",
        details:
            "Your service platform in the heart of China Mainland, exclusively for entrepreneurs. Unlock new opportunities and support for your business ventures.",
        logo: beeze,
    },
    {

        description: "Authorized Wholesaler and Retailer",
        details:
            "Authorized wholesaler and retailer of premium bicycles.",
        logo: falcora,
    },
    {

        description: "The World's Purest Vein Graphite",
        details:
            "Home to the world's purest vein graphite, offering unmatched quality and performance in the industry.",
        logo: V,
    },
    {

        description: "Premium Ceylonese Tea",
        details:
            "Savor the premium taste of Ceylonese tea excellence.",
        logo: tea,
    },
    {

        description: "Official Partner for Sri Lanka",
        details:
            "Your official partner for Sri Lanka, streamlining payments for seamless transactions.",
        logo: wechat,
    },
    {

        description: "Commercial and Lifestyle Center",
        details:
            "Your ultimate destination for a blend of commercial and lifestyle delights.",
        logo: citymall,
    },
];

const BrandSection: React.FC = () => {
    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-boswin-navy mb-10">
                Our Brands
            </h2>

            {/* Auto-scrolling marquee of brand cards */}
            <Marquee speed={40} gradient={false} pauseOnHover className="px-4">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="min-w-[200px] max-w-xs bg-white rounded-xl shadow-md p-6 mx-3 flex-shrink-0 flex flex-col items-center text-center transition-transform duration-500 transform hover:scale-105 h-[250px]"
                    >
                        {brand.logo ? (
                            <img
                                src={brand.logo}
                                className="w-20 h-20 object-contain mb-4"
                            />
                        ) : (
                            <Images className="w-20 h-20 text-gray-300 mb-4" />
                        )}
                        <h3 className="text-xl font-bold text-boswin-navy mb-2">
                            {/* Optional: You can include brand name here if needed */}
                        </h3>
                        <p className="text-sm text-boswin-gray font-semibold mb-1 line-clamp-2">
                            {brand.description}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-3">
                            {brand.details}
                        </p>
                    </div>

                ))}
            </Marquee>
        </div>
    );
};

export default BrandSection;
