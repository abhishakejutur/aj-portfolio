/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Dialog } from '@headlessui/react';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7337404176",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abhishake62232@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Rayadurg, 515865, Andhra Pradesh, India",
  },
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phonenumber: formData.phone,
      service_selection: selectedService,
      message: formData.message,
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/ifyres7meu6qv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataToSend }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Success:", responseData);
        setIsOpen(true);
        playSound("dialog.mp3"); // Play sound on successful form submission
      } else {
        console.error("Error response:", responseData);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const playSound = (fileName) => {
    const audio = new Audio(`/assets/${fileName}`); // Adjust the path to your audio file
    audio.play();
  };

  const playClickSound = () => {
    playSound("click2.mp3");
  };

  const handleDialogClose = () => {
    setIsOpen(false);
    window.location.reload(); // Reload the page after closing the dialog
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className={`py-6 ${isOpen ? 'blur-background' : ''}`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:h-[54%] order-2 xl:order-none w-full xl:w-[50%]">
              <form method="POST" onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  I specialize in writing APIs using ASP.NET and have solid skills
                  in database management and SQL servers. I am also proficient in
                  various programming languages and technologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    placeholder="Firstname" 
                    type="text" 
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    onFocus={playClickSound} 
                  required/>
                  <Input 
                    placeholder="Lastname" 
                    type="text" 
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    onFocus={playClickSound} 
                  required/>
                  <Input 
                    placeholder="Email" 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={playClickSound} 
                  required/>
                  <Input 
                    placeholder="Phone number" 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={playClickSound} 
                  required/>
                </div>
                <Select onValueChange={(value) => setSelectedService(value)}>
                  <SelectTrigger className="w-full bg-primary border-none hover:border-accent focus:ring-0" onFocus={playClickSound}>
                    <SelectValue placeholder="Select a service">
                      {selectedService ? selectedService : "Select a service"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Database Management">
                        Database Management
                      </SelectItem>
                      <SelectItem value="Backend Development">
                        Backend Development
                      </SelectItem>
                      <SelectItem value="Application Development">
                        Application Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea 
                  placeholder="Your message" 
                  className="h-[200px] bg-primary border-none focus:ring-0"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={playClickSound} 
                required/>
                <Button type="submit" className="mt-4">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <div className="space-y-6">
                {info.map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="text-accent text-xl">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Dialog open={isOpen} onClose={handleDialogClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="w-full max-w-md p-6 bg-primary rounded-lg">
          <Dialog.Title className="text-2xl font-bold text-white">Thank you for contacting me!...</Dialog.Title><br />
          <Dialog.Description className="mt-2 text-white">
            I will contact you soon...
          </Dialog.Description><br />
          <div className="mt-4">
            <Button onClick={handleDialogClose} className="w-full bg-primary text-white border-accent border-x-2 border-y-2 border-accent-hover">
              OK
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Contact;
