'use client'

import React, { useState } from 'react';
import { Send, Mail, Phone, User } from 'lucide-react';

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    query: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Website Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\n\nQuery:\n${formData.query}`;

    // Use mailto as a reliable frontend-only solution
    window.location.href = `mailto:chartiansresearch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 bg-paper border-t border-ink/10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface-light rounded-[32px] p-8 md:p-12 border border-ink/10 shadow-brutal-xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Have a Query?
            </h2>
            <p className="text-ink/60 text-lg">
              Fill out the form below and our support team will get back to you shortly via email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="enquiry-name" className="text-sm font-bold text-ink ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={20} aria-hidden="true" />
                  <input
                    type="text"
                    id="enquiry-name"
                    name="name"
                    required
                    aria-required="true"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-paper border border-ink/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-lime focus:shadow-brutal-sm transition-shadow duration-200 text-ink"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="enquiry-phone" className="text-sm font-bold text-ink ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={20} aria-hidden="true" />
                  <input
                    type="tel"
                    id="enquiry-phone"
                    name="phone"
                    required
                    aria-required="true"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-paper border border-ink/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-lime focus:shadow-brutal-sm transition-shadow duration-200 text-ink"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="enquiry-query" className="text-sm font-bold text-ink ml-1">Your Query</label>
              <div className="relative">
                <Mail className="absolute left-4 top-6 text-ink/40" size={20} aria-hidden="true" />
                <textarea
                  id="enquiry-query"
                  name="query"
                  required
                  aria-required="true"
                  rows={4}
                  placeholder="Tell us what you'd like to know..."
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-paper border border-ink/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-lime focus:shadow-brutal-sm transition-shadow duration-200 resize-none text-ink"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="brutal-press px-10 py-4 bg-lime text-void rounded-full font-extrabold text-lg shadow-brutal flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Send Message <Send size={20} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
