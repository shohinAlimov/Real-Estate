import { motion } from "framer-motion";
import React from "react";
import { toast } from "react-toastify";

const WEB3FORM_ACCESS_KEY = "your_access_key_here";

const Contacts = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", { WEB3FORM_ACCESS_KEY });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contacts"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Yout Future Together
      </p>

      <form
        className="max-w-2xl mx-auto text-gray-600 pt-8"
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2  outline-none hover:border-blue-500 transition-colors duration-300 ease-in focus:border-blue-500"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 ">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 outline-none hover:border-blue-500 transition-colors duration-300 ease-in focus:border-blue-500"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none outline-none hover:border-blue-500 transition-colors duration-300 ease-in focus:border-blue-500"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in outline-none focus:bg-blue-800">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contacts;
