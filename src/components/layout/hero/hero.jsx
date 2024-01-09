import RightIcon from "@/components/icons/RightIcon";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Flexibility in Every Bite, Order with Ease
        </h1>
        <p className="my-4 text-gray-500">
          FeastFlex is an innovative online food ordering platform designed to
          empower restaurants and delight customers. Our user-friendly interface
          offers seamless, flexible ordering experiences, connecting patrons
          with their favorite local eateries. With FeastFlex, enjoy the
          convenience of customizable orders, timely deliveries, and a diverse
          range of culinary choices, making every meal a delightful feast.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-red-500 flex gap-2 items-center">
            Order Now
            <RightIcon />
          </button>
          <button className="bg-gray-400 text-white px-7 py-2 rounded-full hover:bg-gray-500">
            Learn More...
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          layout="fill"
          src={
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="food banner"
        />
      </div>
    </section>
  );
};

export default Hero;
