import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ImageSection() {
  const imgSection = [
    {
      src: "/images/kitchen.avif",
      alt: "Kitchen",
      title: "Kitchen",
      subTitle: "Kitchen Renovation Services",
    },
    {
      src: "/images/bathroom.avif",
      alt: "Bathroom",
      title: "Bathroom",
      subTitle: "Bathroom Renovation Services",
    },
    {
      src: "/images/wholeHouse.avif",
      alt: "Whole House",
      title: "Whole House",
      subTitle: "Complete Home Renovation",
    },
  ];
  return (
    <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-10">
      {imgSection.map((item) => {
        return (
          <Link
            href="#"
            className="relative h-60 lg:h-80  overflow-hidden group"
            key={item.title}
          >
            <Image src={item.src} fill alt={item.alt} />
            <motion.div
              initial="default"
              whileHover="hover"
              className="absolute inset-0 text-background text-4xl flex items-end"
            >
              <div className="w-full h-5/12 flex items-center justify-center flex-col pb-6">
                <motion.div
                  variants={{
                    default: { opacity: 0 },
                    hover: {
                      opacity: 1,
                      transition: { ease: "easeOut", delay: 0.1 },
                    },
                  }}
                  className="absolute inset-0 bg-black/50 z-0"
                ></motion.div>

                <motion.p
                  variants={{
                    default: {
                      opacity: 10,
                      y: 20,
                      transition: { ease: "easeOut", delay: 0.1 },
                    },
                    hover: { y: 0 },
                  }}
                  className="font-heading pb-4 z-10 text-shadow-lg"
                >
                  {item.title}
                </motion.p>
                <motion.p
                  variants={{
                    default: { opacity: 0, y: 30 },
                    hover: {
                      opacity: 10,
                      y: 0,
                      transition: { ease: "easeOut", delay: 0.2 },
                    },
                  }}
                  className="text-background text-lg lg:text-xl z-10"
                >
                  {item.subTitle}
                </motion.p>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
