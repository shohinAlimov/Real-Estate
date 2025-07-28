import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.header_img})` }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16 ">
          <a
            className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors duration-300 ease-in outline-none focus:bg-white focus:text-black"
            href="#Projects"
          >
            Projects
          </a>
          <a
            className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-800 transition-colors duration-300 outline-none focus:bg-blue-800"
            href="#Contacts"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
