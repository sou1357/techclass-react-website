import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ArrowRight, CheckCircle, Users, Award, Clock, BookOpen, Star, Quote, Code, Database, Cpu, TabletSmartphone, UserIcon, User, UserCircleIcon, UserRound } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: '100% Practical Training',
      desc: 'Hands-on coding experience with real projects'
    },
    {
      icon: Users,
      title: 'Small Batches',
      desc: 'Personal attention for every student'
    },
    {
      icon: Award,
      title: '100+ Students Placed',
      desc: 'Proven track record of success'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      desc: 'Online & Offline classes available'
    },
  ];

  const courses = [
    {
      title: 'Web Technology Fullstack',
      desc: 'HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL',
      color: 'from-red-500 to-red-600',
      icon: Code,
      alink: "web",
      duration: '6 Months',
      students: '50+ Students'
    },
    {
      title: 'Python Fullstack + Data Science',
      desc: 'Python, Django, Pandas, NumPy, ML, TensorFlow, Data Analysis',
      color: 'from-black to-gray-800',
      icon: Database,
      alink: "py",
      duration: '8 Months',
      students: '40+ Students'
    },
    {
      title: 'Java Fullstack',
      desc: 'Core Java, Spring Boot, Hibernate, Microservices, REST APIs',
      color: 'from-red-600 to-black',
      icon: Cpu,
      alink: "java",
      duration: '7 Months',
      students: '35+ Students'
    },
    {
      title: 'Mobile App Development',
      alink: "mobile",
      desc: 'Flutter, React-Native, Java Basic, Kotlin.',
      color: 'from-black to-gray-800',
      icon: TabletSmartphone,
      duration: '6 Months',
      students: '50+ Students'
    },
  ];

  const testimonials = [
    {
      name: 'Nishita Bhise',
      role: 'Software Developer at TCS',
      icon: UserCircleIcon,
      text: 'TECHCLASS OF EDUCATION by Sourabh Jain is one of the best training centers for Computer Science students. The Java, Web Technology, React, Node.js, and Spring Boot sessions are highly practical and industry-relevant. Sourabh Jain’s teaching style is clear, structured, and easy to understand, even for beginners. The hands-on projects and doubt-solving sessions greatly boost confidence. I highly recommend this institute for anyone aiming to build a strong foundation in full-stack development.',
    },
    {
      name: 'Mansi Dangra',
      role: 'Java Developer at IBM',
      icon: UserCircleIcon,
      text: 'My C, C++, Java, and Python courses were completed at Techclass of Education. This institute is the finest place to begin your IT career; they will train you from the ground up and provide complete support and guidance for your job search. We gain practical knowledge rather than theoretical information, which helps us comprehend things more quickly. Another thing we learn from this institute is to "stop questioning yourself, work hard, and make it happen." Now I am placed at IBM with a good package. I want to give special and heartly thanks to Sourabh Jain Sir for assisting me',
    },
    {
      name: 'Akash Potbhare',
      role: 'Python Developer at Wipro',
      icon: UserCircleIcon,
      text: 'I had an incredible experience with the Techclass of Education. The web development skills I gained were invaluable, and the internship opportunity was a game-changer. During the internship, I worked on numerous projects that deepened my understanding and practical knowledge. The hands-on experience and support from the instructors were outstanding. I highly recommend this program to anyone looking to enhance their web development skills and gain real-world experience. This internship experience helped me secure my job, and I have joined Design Macha LLP as a Front-End Developer.',
    },
    {
      name: 'Payal Domale',
      role: 'Python Developer at Caredose Health Tech Pvt Ltd',
      icon: UserCircleIcon,
      text: 'I am Payal Domale, and I recently completed Tech Class of Educations web development program under the guidance of Sourabh Jain Sir. The program emphasized hands-on learning and practical projects, which prepared me well for my role at Caredose Health Tech Pvt Ltd. Sir mentorship was invaluable, providing expert guidance throughout. The internship opportunities offered by Tech Class of Education were instrumental in bridging theory with real-world experience.I am grateful to Sourabh Jain Sir and Tech Class of Education for their dedication to student success and their commitment to delivering a curriculum that prepares graduates for the challenges of the tech industry. Tech Class of Education has played a crucial role in shaping my career in web development, and I highly recommend it to anyone looking to gain practical skills and industry-relevant knowledge.',
    },
      {
      name: 'Suraj',
      role: 'Python Developer at Wipro',
      icon: UserCircleIcon,
      text: 'Dear Sourabh Sir,I hope this message finds you in great spirits. I am writing to express my deepest gratitude for the unwavering support and guidance you provided during the final stages of my Masters dissertation. My name is Suraj, and I am currently pursuing computer science at a university in the UK.As you know, during the critical phase of my dissertation, I found myself in a state of overwhelming confusion and uncertainty. It was at this juncture that I had the immense fortune of coming across your expertise. Your timely intervention and support were nothing short of a lifeline for me. Your approach was not just that of a mentor but also that of a true educator. Your patience, politeness, and gentleness made our interactions incredibly enriching. I felt as if I was conversing with one of my university supervisors, which provided me with immense comfort and confidence. Your ability to impart complex knowledge in the realm of full-stack development was truly exceptional. I am particularly amazed at your proficiency in various domains, including front-end technologies, back-end technologies, database technologies, cloud computing platforms, and version control systems like Git. Your mastery of programming languages Python, Javascrip, Django, and machine learning is truly commendable.',
    },
    {
      name: 'Arundhati Tidke',
      role: 'Python Developer at Wipro',
      icon: UserCircleIcon,
      text: 'This is best classes For every IT and non IT background candidates.I am from Pune and from electrical background and wanted to shift for IT.I joined batches in this institute and found it perfect.I had joined few institutes before i got to know about this institute, but it was waste of money.I had zero knowledge of programming when i joined this institute.But this time I get worth of my money.Even sir help me to clear all concepts. I got placed after learning in this institute.I am really thankfull to Saurabh Jain sir.',
    }
  ];

  const whyChooseUs = [
    'Industry-experienced trainers',
    'Multilingual teaching (Hindi, English, Marathi)',
    '100% job assistance and placement support',
    'Free GitHub sessions and project hosting',
    'Regular doubt-clearing sessions',
    'Lifetime course access and updates'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              🚀 Learn Coding in Nagpur
              <span className="block text-3xl md:text-5xl mt-4 text-red-200">
                Your Gateway to Professional Programming Skills
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Master Java, Python, Web Technologies, Mobile App Development & Fullstack Development with
              <span className="font-semibold"> 9+ years of proven expertise</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/book-demo"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <span>Book Free Demo</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Why Techclass Of Education?</h2>
            <p className="text-gray-600 mt-4 text-lg">Empowering students with practical, job-oriented skills</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <item.icon size={48} className="text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Our Popular Courses</h2>
            <p className="text-gray-600 mt-4 text-lg">Industry-relevant curriculum designed for your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <course.icon size={40} className="mb-4" />
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <div className="flex justify-between text-sm mt-2 opacity-90">
                    <span>{course.duration}</span>
                    <span>{course.students}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{course.desc}</p>
                  <HashLink
                    to={"/courses#" + course.alink}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                    smooth
                  >
                    View Full Syllabus <ArrowRight size={16} className="ml-1" />
                  </HashLink>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Techclass Of Education?</h2>
              <p className="text-gray-300 text-lg mb-8">
                With over 9 years of experience, we've successfully trained and placed 100+ students
                in top IT companies. Our practical approach ensures you're job-ready from day one.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-red-600 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-block mt-8 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-red-600 rounded-xl">
                <div className="text-3xl font-bold">9+</div>
                <div className="text-red-200">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-xl">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-gray-300">Students Placed</div>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-xl">
                <div className="text-3xl font-bold">3</div>
                <div className="text-gray-300">Specialized Courses</div>
              </div>
              <div className="text-center p-6 bg-red-600 rounded-xl">
                <div className="text-3xl font-bold">15:1</div>
                <div className="text-red-200">Student-Teacher Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">What Our Students Say</h2>
            <p className="text-gray-600 mt-4 text-lg">Success stories from our alumni</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Quote size={40} className="text-red-600 mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  {/* Icon instead of image */}
                  <testimonial.icon className="w-12 h-12 text-blue-500" />
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-red-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Programming Journey?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join 100+ successful students and kickstart your IT career with practical, job-oriented training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
            >
              Apply for Admission
            </Link>
            <a
              href="https://wa.me/918446561357"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;