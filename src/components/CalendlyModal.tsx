import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  const [step, setStep] = useState(1); // 1: Calendar, 2: Form, 3: Success
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  // Sample available times
  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  // Generate next 7 days
  const getAvailableDates = () => {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
    return dates;
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Booking data:", { selectedDate, selectedTime, formData });
    setStep(3);
  };

  const resetModal = () => {
    setStep(1);
    setSelectedDate("");
    setSelectedTime("");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative p-6 lg:p-8 border-b border-gray-100 bg-gradient-to-r from-electric/5 to-blue-500/5">
              <button
                onClick={resetModal}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200 shadow-sm"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {step === 1 && "Select Date & Time"}
                      {step === 2 && "Your Information"}
                      {step === 3 && "Booking Confirmed!"}
                    </h2>
                    <p className="text-gray-600">
                      {step === 1 && "Choose your preferred meeting time"}
                      {step === 2 && "Tell us about your business"}
                      {step === 3 && "We'll send you a calendar invite"}
                    </p>
                  </div>
                </div>
                
                {/* Progress Steps */}
                <div className="flex items-center gap-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= num ? 'bg-electric text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {step > num ? <CheckCircle2 className="w-4 h-4" /> : num}
                      </div>
                      {num < 3 && <div className={`w-8 h-0.5 ${step > num ? 'bg-electric' : 'bg-gray-200'}`} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Calendar */}
                {step === 1 && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {/* Date Selection */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                        {getAvailableDates().map((dateObj) => (
                          <button
                            key={dateObj.date}
                            onClick={() => handleDateSelect(dateObj.date)}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                              selectedDate === dateObj.date
                                ? 'border-electric bg-electric/10 text-electric'
                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                          >
                            <div className="text-sm font-medium">{dateObj.display}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Time</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                                selectedTime === time
                                  ? 'border-electric bg-electric/10 text-electric'
                                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                              }`}
                            >
                              <div className="text-sm font-medium">{time}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Next Button */}
                    {selectedDate && selectedTime && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end"
                      >
                        <button
                          onClick={() => setStep(2)}
                          className="btn-primary flex items-center gap-2"
                        >
                          <span>Continue</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Form */}
                {step === 2 && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-electric"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-electric"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-electric"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-electric"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tell us about your lead generation goals
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-electric"
                          placeholder="What challenges are you facing with SaaS lead generation?"
                        />
                      </div>

                      {/* Selected Date/Time Summary */}
                      <div className="bg-electric/5 p-4 rounded-lg border border-electric/20">
                        <h4 className="font-medium text-gray-900 mb-2">Meeting Details</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(selectedDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} at {selectedTime}
                        </p>
                      </div>

                      {/* Form Buttons */}
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn-secondary flex items-center gap-2"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="btn-primary flex items-center gap-2"
                        >
                          <span>Book Meeting</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Meeting Booked Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      We've sent a calendar invite to {formData.email}. We're excited to discuss your SaaS lead generation goals!
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6 max-w-md mx-auto">
                      <h4 className="font-medium text-gray-900 mb-2">Meeting Details</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })} at {selectedTime}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        15-minute pipeline consultation
                      </p>
                    </div>
                    <button
                      onClick={resetModal}
                      className="btn-primary"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal;