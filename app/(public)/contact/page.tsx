import PageHeader from "@/components/features/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full flex flex-col gap-20 pb-20">
      <PageHeader title="Contact Page" />
      <div className="container mx-auto flex flex-col gap-5 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Contact Information */}
          <div className="flex flex-col gap-0">
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-600 mt-2">
                We&apos;d love to hear from you! Fill out the form below or
                contact us directly.
              </p>
            </div>
            <div className="space-y-6 grid items-center">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                <span className="text-gray-700">contact@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                <span className="text-gray-700">+123 456 7890</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                <span className="text-gray-700">
                  123 Logistics St, Business City, Country
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-10 shadow-lg rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <Textarea
                  placeholder="Write your message here"
                  className="mt-2"
                />
              </div>
              <Button variant="default" size="lg"  className="hover:shadow-lg w-full hover:text-white/60 transition-all duration-300 ease-in-out"
            >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
