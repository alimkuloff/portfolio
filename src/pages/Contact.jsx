// src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formani yuborish logikasini qo'shing
    console.log(formData);
    // Foydalanuvchiga yuborilganini bildirish uchun holatni tozalang
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-2 rounded"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
