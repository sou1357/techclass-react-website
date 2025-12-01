import React, { useState } from 'react';
import { Calendar, Clock, User, BookOpen, CheckCircle } from 'lucide-react';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    course: '',
    date: '',
    timeSlot: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Demo booking:', formData);
    setShowConfirmation(true);
  };

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM'
  ];

  const demoFeatures = [
    {
      icon: BookOpen,
      title: 'Course Overview',
      desc: 'Get detailed information about curriculum, projects, and career opportunities'
    },
    {
      icon: User,
      title: 'Meet Your Trainer',
      desc: 'Interact with our experienced trainers and ask your questions directly'
    },
    {
      icon: Clock,
      title: 'Live Coding Session',
      desc: 'See actual coding demonstrations and understand our teaching methodology'
    },
    {
      icon: CheckCircle,
      title: 'Career Guidance',
      desc: 'Get personalized advice on your programming career path and goals'
    }
  ];

  if (showConfirmation) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <CheckCircle size={64} className="text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-black mb-4">Demo Booked Successfully!</h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for booking a free demo with us. We'll contact you shortly to confirm your session.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <h3 className="font-semibold text-black mb-2">Your Booking Details:</h3>
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Mobile:</span> {formData.mobile}</p>
              <p><span className="font-medium">Course:</span> {formData.course}</p>
              <p><span className="font-medium">Date:</span> {formData.date}</p>
              <p><span className="font-medium">Time:</span> {formData.timeSlot}</p>
            </div>
            <div className="space-y-4">
              <a
                href="https://wa.me/918446561357"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mr-4"
              >
                WhatsApp Us
              </a>
              <button
                onClick={() => setShowConfirmation(false)}
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Book Another Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-black to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Book Your Free Demo</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience our teaching methodology with a free demo session. No commitments, just pure learning!
          </p>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included in Your Free Demo?</h2>
            <p className="text-gray-600 text-lg">Get a complete overview of our courses and teaching approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <feature.icon size={48} className="text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-black text-white p-8 text-center">
              <Calendar size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Schedule Your Free Demo</h2>
              <p className="text-red-100">Choose your preferred date and time</p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest *
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a course</option>
                    <option value="Web Technology Fullstack">Web Technology Fullstack</option>
                    <option value="Python Fullstack + Data Science">Python Fullstack + Data Science</option>
                    <option value="Java Fullstack Development">Java Fullstack Development</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      required
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h3 className="font-semibold text-black mb-2">Important Notes:</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Demo sessions are completely FREE with no obligations</li>
                    <li>• Sessions are available Monday to Saturday</li>
                    <li>• Each demo session lasts approximately 45-60 minutes</li>
                    <li>• You can reschedule if needed by calling us</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book My Free Demo</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with Booking?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Our team is here to help you choose the right course and schedule your demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918446561357"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Call: +91 8446561357
            </a>
            <a
              href="https://wa.me/918446561357"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;