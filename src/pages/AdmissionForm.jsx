import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    personalMobile: '',
    gender: '',
    aadharCard: '',
    college: '',
    stream: '',
    course: '',
    address: '',
    fatherName: '',
    fatherMobile: '',
    email: '',
    education: '',
    experience: '',
    courseFee: ''
  });
  
  const [files, setFiles] = useState({
    resume: null,
    aadharCardFile: null,
    signature: null
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      // Add files
      Object.keys(files).forEach(key => {
        if (files[key]) {
          formDataToSend.append(key, files[key]);
        }
      });

      const response = await fetch('/api/admission', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          fullName: '',
          personalMobile: '',
          gender: '',
          aadharCard: '',
          college: '',
          stream: '',
          course: '',
          address: '',
          fatherName: '',
          fatherMobile: '',
          email: '',
          education: '',
          experience: '',
          courseFee: ''
        });
        setFiles({
          resume: null,
          aadharCardFile: null,
          signature: null
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <CheckCircle size={64} className="text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-black mb-4">Application Submitted Successfully!</h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for applying to Techclass Of Education. We'll review your application and get back to you within 24 hours.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-green-800 font-medium">
                📧 A confirmation email has been sent to your registered email address.
              </p>
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
                onClick={() => setShowSuccess(false)}
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-black to-red-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Form</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take the first step towards your programming career. Fill out the form below to secure your seat.
          </p>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-red-600 to-black text-white p-6">
              <div className="flex items-center space-x-3">
                <FileText size={32} />
                <div>
                  <h2 className="text-2xl font-bold">Student Admission Form</h2>
                  <p className="text-red-100">All fields marked with * are mandatory</p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="p-6 bg-red-50 border-l-4 border-red-600">
              <div className="flex items-start space-x-3">
                <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-800">Important Information</h3>
                  <ul className="text-red-700 text-sm mt-2 space-y-1">
                    <li>• Please fill all details accurately as they will be used for certificates</li>
                    <li>• Upload clear scanned copies of required documents</li>
                    <li>• Course fee can be paid in installments (discuss with our team)</li>
                    <li>• Admission is subject to document verification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="personalMobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Personal Mobile No *
                    </label>
                    <input
                      type="tel"
                      id="personalMobile"
                      name="personalMobile"
                      required
                      value={formData.personalMobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="aadharCard" className="block text-sm font-medium text-gray-700 mb-2">
                      Aadhar Card No *
                    </label>
                    <input
                      type="text"
                      id="aadharCard"
                      name="aadharCard"
                      required
                      value={formData.aadharCard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Enter Aadhar card number"
                      maxLength={12}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email ID *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-vertical"
                      placeholder="Enter complete address"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Educational Information */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">Educational Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                      College/University *
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Enter college/university name"
                    />
                  </div>

                  <div>
                    <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-2">
                      Stream *
                    </label>
                    <select
                      id="stream"
                      name="stream"
                      required
                      value={formData.stream}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select Stream</option>
                      <option value="Engineering">Engineering</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="B.Sc">B.Sc</option>
                      <option value="M.Sc">M.Sc</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Education *
                    </label>
                    <select
                      id="education"
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select Education</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interested *
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select Course</option>
                      <option value="Web Technology">Web Technology Fullstack</option>
                      <option value="Python">Python Fullstack + Data Science</option>
                      <option value="Java">Java Fullstack Development</option>
                    </select>
                  </div>
                </div>

                {/* Experience */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Experience *</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="experience"
                        value="Fresher"
                        checked={formData.experience === 'Fresher'}
                        onChange={handleInputChange}
                        className="mr-2 text-red-600 focus:ring-red-600"
                      />
                      <span className="text-gray-700">Fresher</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="experience"
                        value="Working"
                        checked={formData.experience === 'Working'}
                        onChange={handleInputChange}
                        className="mr-2 text-red-600 focus:ring-red-600"
                      />
                      <span className="text-gray-700">Working Professional</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Family Information */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">Family Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-2">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Enter father's name"
                    />
                  </div>

                  <div>
                    <label htmlFor="fatherMobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Father's Mobile No *
                    </label>
                    <input
                      type="tel"
                      id="fatherMobile"
                      name="fatherMobile"
                      required
                      value={formData.fatherMobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Enter father's mobile number"
                    />
                  </div>
                </div>
              </div>

              {/* Fee Information */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">Fee Information</h3>
                <div>
                  <label htmlFor="courseFee" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Fee (Please discuss with our team for installment options)
                  </label>
                  <input
                    type="text"
                    id="courseFee"
                    name="courseFee"
                    value={formData.courseFee}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Course fee will be discussed"
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">Document Uploads</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume/Photo (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-400 transition-colors">
                      <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="aadharCardFile" className="block text-sm font-medium text-gray-700 mb-2">
                      Aadhar Card Copy *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-400 transition-colors">
                      <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="aadharCardFile"
                        name="aadharCardFile"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="signature" className="block text-sm font-medium text-gray-700 mb-2">
                      Signature *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-400 transition-colors">
                      <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="signature"
                        name="signature"
                        accept=".jpg,.jpeg,.png"
                        required
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-black mb-3">Terms and Conditions</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• All information provided must be accurate and verifiable</li>
                  <li>• Course fees are non-refundable after commencement</li>
                  <li>• Regular attendance is mandatory for course completion</li>
                  <li>• Certificate will be provided only after successful completion</li>
                </ul>
                <label className="flex items-start space-x-3 mt-4">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 text-red-600 focus:ring-red-600"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the terms and conditions and confirm that all information provided is accurate *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                <p className="text-gray-500 text-sm mt-2">
                  By submitting this form, you agree to our terms and privacy policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionForm;