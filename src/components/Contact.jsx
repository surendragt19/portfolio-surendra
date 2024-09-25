import React, { useState } from "react";
import toast from "react-hot-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://backend-portfolio-k13g.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Error sending message: " + result.error);
    }
  };
  return (
    <div
      id="contact"
      className="w-full lg:px-32 px-6 lg:py-10 py-6 flex items-center justify-center gap-10 flex-col lg:flex-row"
    >
      <div className="part1 lg:w-1/2 w-full h-full grid place-items-center">
        <img
          src="./assets/images/contact.svg"
          alt="Contact Illustration"
          height={500}
          width={500}
        />
      </div>
      <div className="part2 lg:w-1/2 w-full h-full">
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <h1 className="lg:text-5xl text-3xl font-[SplineSans] capitalize text-cyenH font-bold tracking-tight leading-none">
            Get in Touch
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full grid lg:grid-cols-2 grid-cols-1 gap-8 font-[SplineSans] text-xl"
          >
            <div className="input-div">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-div lg:col-span-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="lg:col-span-1">
              <button className="w-full px-6 py-2 uppercase font-[SplineSans] border-2 border-cyenH font-bold hover:bg-cyenH hover:text-zinc-900 transition ease-in rounded-md">
                Submit
              </button>
            </div>
          </form>
          <div className="icons col-span-1 text-3xl font-light flex gap-10 items-center">
            <a
              href="https://github.com/surendragt19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/surendra-kumar-gupta-064294232"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/its_surendra203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://www.facebook.com/share/surendra-kamal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-box-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
