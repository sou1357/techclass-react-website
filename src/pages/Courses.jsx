import React from 'react';
import { CheckCircle, Clock, Users, Award, Download } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      alink:"web",
      title: 'Web Technology Fullstack',
      subtitle: 'Complete Frontend & Backend Development',
      duration: '6 Months',
      students: '50+ Students',
      pdf: "/syllabus/web-technology.pdf",
      level: 'Beginner to Advanced',
      color: 'from-red-500 to-red-600',
      technologies: [
        'HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Node.js',
        'Express.js', 'MongoDB', 'MySQL', 'Bootstrap/Tailwind CSS',
        'REST APIs', 'Git & GitHub'
      ],
      highlights: [
        '10+ Real Projects',
        'Industry Standard Tools',
        'Deployment on Cloud',
        'Portfolio Development',
        '100% Job Assistance'
      ],
      description: 'Master modern web development with our comprehensive fullstack program. Learn to build responsive websites and robust web applications using the latest technologies.',
      syllabus: [
        { module: 'HTML5 & CSS3 Fundamentals', topics: 'Semantic HTML, Advanced CSS, Flexbox, Grid, Responsive Design' },
        { module: 'JavaScript Mastery', topics: 'ES6+, DOM Manipulation, Async/Await, APIs, Local Storage' },
        { module: 'React.js Development', topics: 'Components, JSX, State Management, Hooks, Router, Context API' },
        { module: 'Backend with Node.js', topics: 'Express Server, Middleware, Authentication, File Handling' },
        { module: 'Database Integration', topics: 'MongoDB Operations, MySQL Queries, Database Design, Relationships' },
        { module: 'Project Development', topics: 'Full Stack Projects, Deployment, Version Control, Testing' }
      ]
    },
    {
      id: 2,
      alink:"py",
      title: 'Python Fullstack + Data Science',
      subtitle: 'Web Development & Data Analytics Combined',
      duration: '8 Months',
      pdf: "/syllabus/python.pdf",
      students: '40+ Students',
      level: 'Beginner to Advanced',
      color: 'from-black to-gray-800',
      technologies: [
        'Python Basics', 'Django Framework', 'Flask', 'Pandas',
        'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn',
        'TensorFlow', 'PostgreSQL', 'SQLite', 'Jupyter Notebook'
      ],
      highlights: [
        '15+ Data Science Projects',
        'ML Model Development',
        'Web App Deployment',
        'Industry Datasets',
        'Certificate of Completion'
      ],
      description: 'Combine web development with data science in this comprehensive Python program. Build web applications and analyze data to make informed business decisions.',
      syllabus: [
        { module: 'Python Programming', topics: 'Syntax, Data Structures, OOP, File Handling, Error Handling' },
        { module: 'Web Development with Django', topics: 'MVC Pattern, Templates, Forms, Authentication, Admin Panel' },
        { module: 'Data Analysis', topics: 'Pandas, NumPy, Data Cleaning, Visualization, Statistical Analysis' },
        { module: 'Machine Learning', topics: 'Supervised Learning, Unsupervised Learning, Model Evaluation' },
        { module: 'Deep Learning', topics: 'Neural Networks, TensorFlow, Image Recognition, NLP Basics' },
        { module: 'Full Stack Projects', topics: 'Data-Driven Web Apps, API Development, Deployment, Testing' }
      ]
    },
    {
      id: 3,
      alink:"java",
      title: 'Java Fullstack Development',
      subtitle: 'Enterprise Java & Spring Boot',
      pdf: "/syllabus/java.pdf",
      duration: '7 Months',
      students: '35+ Students',
      level: 'Beginner to Advanced',
      color: 'from-red-600 to-black',
      technologies: [
        'Core Java', 'Spring Framework', 'Spring Boot', 'Hibernate',
        'Microservices', 'REST APIs', 'MySQL', 'PostgreSQL',
        'Maven', 'JUnit', 'Thymeleaf', 'Spring Security'
      ],
      highlights: [
        '12+ Enterprise Projects',
        'Microservices Architecture',
        'Spring Boot Mastery',
        'Database Integration',
        'Industry Best Practices'
      ],
      description: 'Learn enterprise Java development with Spring Boot and microservices architecture. Build scalable, production-ready applications used by top companies.',
      syllabus: [
        { module: 'Core Java Mastery', topics: 'OOP, Collections, Multithreading, Exception Handling, I/O Streams' },
        { module: 'Spring Framework', topics: 'Dependency Injection, AOP, Spring MVC, Data Access' },
        { module: 'Spring Boot Development', topics: 'Auto Configuration, REST APIs, Security, Testing' },
        { module: 'Database & Hibernate', topics: 'JPA, Hibernate ORM, Query Optimization, Transactions' },
        { module: 'Microservices', topics: 'Service Discovery, API Gateway, Load Balancing, Monitoring' },
        { module: 'Enterprise Projects', topics: 'Full Stack Applications, DevOps, Cloud Deployment' }
      ]
    },
   {
  id: 4,
  alink:"mobile",
  title: 'Mobile App Development',
  subtitle: 'Enterprise Mobile App Development',
  pdf: "/syllabus/mobile-app.pdf",
  duration: '7 Months',
  students: '35+ Students',
  level: 'Beginner to Advanced',
  color: 'from-black to-gray-800',
  technologies: [
    'Flutter (Dart)', 'React Native (JavaScript/TypeScript)',
    'Java Basics', 'Kotlin Basics',
    'REST APIs', 'Firebase', 'SQLite', 'Hive',
    'CI/CD Tools', 'App Publishing'
  ],
  highlights: [
    'Capstone Projects',
    'Real-Time Communication',
    'RESTful APIs & CRUD Operations',
    'Database Integration',
    'Authentication & Security',
    'Push Notifications',
    'Background Services'
  ],
  description: 'Learn enterprise-level mobile app development with Flutter, React Native, Java, and Kotlin. Gain hands-on skills to build scalable, production-ready applications for real-world use.',
  syllabus: [
    { module: 'Fundamentals of Mobile App Development', topics: 'Native vs Hybrid vs Cross-Platform, Android vs iOS, Tools Setup: VS Code, Android Studio, Emulators' },
    { module: 'Flutter Development (Dart)', topics: 'Widgets, Layouts, Navigation, Forms, State Management, API Integration, Firebase, Local DB, Push Notifications, Animations, Deployment' },
    { module: 'React Native Development (JS/TS)', topics: 'Components, Flexbox, Navigation, Forms, Hooks, API Calls, Redux, AsyncStorage, Firebase, Maps, Notifications, Animations, Deployment' },
    { module: 'Java Basics', topics: 'OOP, Classes, Inheritance, Android Project Structure, Activities, Intents, Services' },
    { module: 'Kotlin Basics', topics: 'Syntax vs Java, Null Safety, Functions, Lambdas, Extension Functions, Permissions, Intents' },
    { module: 'Tools & DevOps', topics: 'Git & GitHub, Debugging, Testing on Real Devices, CI/CD (Codemagic, App Center, Expo), App Publishing (Play Store, App Store)' }
  ]
}

  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-black to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Industry-relevant curriculum designed to make you job-ready with hands-on projects and expert mentorship
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div key={course.id} id={course.alink} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.color} text-white p-8`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h2>
                      <p className="text-xl opacity-90 mb-4">{course.subtitle}</p>
                      <p className="text-lg opacity-80">{course.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                        <Clock size={24} className="mx-auto mb-2" />
                        <div className="font-semibold">{course.duration}</div>
                        <div className="text-sm opacity-75">Duration</div>
                      </div>
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                        <Users size={24} className="mx-auto mb-2" />
                        <div className="font-semibold">{course.students}</div>
                        <div className="text-sm opacity-75">Enrolled</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4">Technologies Covered</h3>
                      <div className="space-y-2">
                        {course.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-red-600" />
                            <span className="text-gray-700">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4">Course Highlights</h3>
                      <div className="space-y-2">
                        {course.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <Award size={16} className="text-red-600" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-black mb-4">Quick Info</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Level:</span>
                          <span className="font-medium text-black">{course.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium text-black">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mode:</span>
                          <span className="font-medium text-black">Online + Offline</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Batch Size:</span>
                          <span className="font-medium text-black">Max 15 Students</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Syllabus */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-black mb-6">Detailed Syllabus</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.syllabus.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors">
                          <h4 className="text-lg font-semibold text-black mb-2">{module.module}</h4>
                          <p className="text-gray-600">{module.topics}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                      <Download size={20} />
                      <span> <a target='_blank' href={course.pdf}>Download Full Syllabus </a></span>
                    </button>
                    <a
                      href="/book-demo"
                      className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-center"
                    >
                      Book Free Demo
                    </a>
                    <a
                      href="https://wa.me/918446561357"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                    >
                      WhatsApp Inquiry
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <CheckCircle size={48} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Practical Training</h3>
              <p className="text-gray-300">Every concept is taught with hands-on coding and real projects</p>
            </div>
            <div className="text-center">
              <Users size={48} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Batch Sizes</h3>
              <p className="text-gray-300">Maximum 15 students per batch for personalized attention</p>
            </div>
            <div className="text-center">
              <Award size={48} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Job Assistance</h3>
              <p className="text-gray-300">Dedicated placement support and interview preparation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;