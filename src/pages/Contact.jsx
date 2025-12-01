import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: 'Plot No. 123, Hudkeshwar Road, Nilkanth Nagar, Nagpur',
      color: 'text-red-600'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 8446561357',
      color: 'text-red-600',
      link: 'tel:+918446561357'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@techclassofeducation.com',
      color: 'text-red-600',
      link: 'mailto:info@techclassofeducation.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Saturday: 9:00 AM - 8:00 PM\nSunday: Closed',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-black to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for admission inquiries, course details, or any questions about your programming journey
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <info.icon size={48} className={`${info.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-black mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                Our team is here to help you start your programming journey.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a course</option>
                    <option value="web-technology">Web Technology Fullstack</option>
                    <option value="python">Python Fullstack + Data Science</option>
                    <option value="java">Java Fullstack Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your background and what you'd like to learn..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Find Us Here</h2>
              <p className="text-gray-600 mb-6">
                Visit our modern training facility located in the heart of Nagpur. 
                We're easily accessible by public transportation and have parking facilities available.
              </p>

              {/* Google Maps Embed */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.373446737604!2d79.12405609999999!3d21.097672599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b8b375462e63%3A0xc8aef64d05d6e2fb!2sTECHCLASS%20OF%20EDUCATION!5e0!3m2!1sen!2sin!4v1758199346314!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Techclass Of Education Location"
                ></iframe>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/918446561357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Us Now</span>
                </a>
                
                <a
                  href="tel:+918446561357"
                  className="w-full bg-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Phone size={20} />
                  <span>Call Us Directly</span>
                </a>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                  <h3 className="font-semibold text-black mb-2">Quick Response Guarantee</h3>
                  <p className="text-gray-600">
                    We respond to all inquiries within 2 hours during business hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions about our courses and admission process</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are the admission requirements?",
                answer: "We welcome students from all educational backgrounds. Basic computer knowledge is helpful but not mandatory. We provide foundation courses for complete beginners."
              },
              {
                question: "Do you provide placement assistance?",
                answer: "Yes, we have a dedicated placement team with 95% placement success rate. We provide interview preparation, resume building, and connect you with our hiring partners."
              },
              {
                question: "What is the batch size and timing?",
                answer: "We maintain small batches of maximum 15 students. We offer morning, afternoon, and evening batches. Weekend batches are also available for working professionals."
              },
              {
                question: "Do you offer online classes?",
                answer: "Yes, we offer both online and offline classes. Our online classes are live and interactive with the same quality as offline classes."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-black mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;