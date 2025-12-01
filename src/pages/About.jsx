import React from 'react';
import { Award, Users, Target, BookOpen, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: '9+', label: 'Years of Experience', icon: Award },
    { number: '100+', label: 'Students Placed', icon: Users },
    { number: '95%', label: 'Placement Rate', icon: Target },
    { number: '3', label: 'Specialized Courses', icon: BookOpen },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Practical Learning',
      desc: 'We believe in hands-on experience with real-world projects and industry-standard tools.'
    },
    {
      icon: Users,
      title: 'Personal Attention',
      desc: 'Small batch sizes ensure every student gets individual attention and mentorship.'
    },
    {
      icon: Target,
      title: 'Job-Oriented Training',
      desc: 'Our curriculum is designed based on current industry requirements and job market trends.'
    },
    {
      icon: Star,
      title: 'Quality Education',
      desc: 'Experienced trainers with industry background provide quality education and guidance.'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Techclass Of Education</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Empowering students with practical programming skills for over 9 years in Nagpur
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Established with a vision to bridge the gap between academic learning and industry requirements, 
                Techclass Of Education has been a pioneer in providing quality programming education in Nagpur 
                for over 9 years.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                What started as a small training center has grown into one of the most trusted programming 
                institutes in the region, with 100+ successful placements and countless success stories.
              </p>
              <p className="text-gray-600 text-lg">
                Our journey has been marked by continuous innovation in teaching methodologies, staying 
                updated with the latest technologies, and maintaining a strong focus on practical, 
                job-oriented training.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning programming"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-xl">
                <div className="text-2xl font-bold">9+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Our Achievements</h2>
            <p className="text-gray-600 mt-4 text-lg">Numbers that speak for our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <item.icon size={48} className="text-red-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-black mb-2">{item.number}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-600 p-8 rounded-xl">
              <Target size={48} className="mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-red-100 text-lg">
                To provide high-quality, practical programming education that empowers students 
                with the skills and confidence needed to succeed in the competitive IT industry. 
                We are committed to creating job-ready professionals through hands-on training 
                and personalized mentorship.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <Star size={48} className="mb-6 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To become the leading programming training institute in Maharashtra, recognized 
                for our innovative teaching methods, industry-aligned curriculum, and exceptional 
                placement record. We envision a future where every student achieves their 
                programming career goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Our Core Values</h2>
            <p className="text-gray-600 mt-4 text-lg">What drives us to deliver excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <value.icon size={40} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-red-100 mb-8">
            Our experienced trainers bring years of industry experience and passion for teaching
          </p>
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <p className="text-lg text-red-100 mb-6">
              Our trainers are industry professionals with extensive experience in software development, 
              web technologies, and data science. They bring real-world insights and practical knowledge 
              to the classroom, ensuring students learn not just theory but also industry best practices.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-red-200">Years Avg. Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15:1</div>
                <div className="text-red-200">Student-Teacher Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-red-200">Industry Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;