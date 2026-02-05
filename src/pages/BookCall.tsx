import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, ArrowLeft, CheckCircle2, Zap } from "lucide-react";

const BookCall = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-electric/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-electric-hover flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Flowlem</span>
            </a>
            <a 
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-6"
            >
              <Calendar className="w-4 h-4" />
              Book Your Pipeline Call
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Let's Discuss Your{" "}
              <span className="gradient-text">SaaS Pipeline</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Get a custom pipeline strategy and see exactly how we can help you book more qualified SaaS demos.
            </motion.p>
          </div>

          {/* Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border shadow-2xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="p-8 lg:p-10 border-b border-border bg-gradient-to-r from-electric/5 to-blue-500/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-electric flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {step === 1 && "Select Date & Time"}
                      {step === 2 && "Your Information"}
                      {step === 3 && "Booking Confirmed!"}
                    </h2>
                    <p className="text-muted-foreground">
                      {step === 1 && "Choose your preferred meeting time"}
                      {step === 2 && "Tell us about your business"}
                      {step === 3 && "We'll send you a calendar invite"}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Progress Steps */}
              <div className="flex items-center gap-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      step >= num ? 'bg-electric text-white shadow-lg' : 'bg-muted text-muted-foreground'
                    }`}>
                      {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
                    </div>
                    {num < 3 && <div className={`w-12 h-1 rounded-full transition-all duration-300 ${step > num ? 'bg-electric' : 'bg-muted'}`} />}
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-electric" />
                  <span>15 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-electric" />
                  <span>1-on-1 consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-electric" />
                  <span>Custom pipeline plan</span>
                </div>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-8 lg:p-10">
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
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      {/* Calendar Section */}
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-6">Select Date</h3>
                        
                        {/* Calendar Container */}
                        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                          {/* Calendar Header */}
                          <div className="bg-electric/5 p-4 border-b border-electric/20">
                            <div className="text-center">
                              <h4 className="text-lg font-semibold text-foreground">
                                {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Select an available date
                              </p>
                            </div>
                          </div>
                          
                          {/* Calendar Grid */}
                          <div className="p-4">
                            {/* Days of Week Header */}
                            <div className="grid grid-cols-7 gap-1 mb-3">
                              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                <div key={i} className="text-center text-xs font-medium text-muted-foreground py-2">
                                  {day}
                                </div>
                              ))}
                            </div>
                            
                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-1">
                              {/* Previous month days (disabled) */}
                              {Array.from({ length: new Date().getDay() }, (_, i) => (
                                <div key={`prev-${i}`} className="h-10"></div>
                              ))}
                              
                              {/* Current month days */}
                              {Array.from({ length: 31 }, (_, i) => {
                                const day = i + 1;
                                const today = new Date().getDate();
                                const isToday = day === today;
                                const isPast = day < today;
                                const isAvailable = day > today && day <= today + 14; // Next 14 days available
                                const dateString = new Date(new Date().getFullYear(), new Date().getMonth(), day).toISOString().split('T')[0];
                                const isSelected = selectedDate === dateString;
                                
                                return (
                                  <button
                                    key={day}
                                    onClick={() => isAvailable ? handleDateSelect(dateString) : null}
                                    disabled={isPast || !isAvailable}
                                    className={`h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200 relative flex items-center justify-center ${
                                      isPast 
                                        ? 'text-muted-foreground/30 cursor-not-allowed'
                                        : isSelected
                                        ? 'bg-electric text-white shadow-md scale-105'
                                        : isAvailable
                                        ? 'text-foreground hover:bg-electric/10 hover:text-electric hover:scale-105'
                                        : 'text-muted-foreground/50 cursor-not-allowed'
                                    }`}
                                  >
                                    {day}
                                    {isToday && !isSelected && (
                                      <div className="absolute bottom-1 w-1 h-1 bg-electric rounded-full"></div>
                                    )}
                                    {isAvailable && !isPast && !isSelected && (
                                      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                          
                          {/* Legend */}
                          <div className="px-4 pb-4">
                            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>Available</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-electric rounded-full"></div>
                                <span>Selected</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Time Selection Section */}
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-6">Select Time</h3>
                        
                        {selectedDate ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card border border-border rounded-2xl shadow-lg h-[400px] flex flex-col"
                          >
                            {/* Header */}
                            <div className="bg-electric/5 p-4 border-b border-electric/20 rounded-t-2xl">
                              <div className="text-center">
                                <div className="text-sm text-muted-foreground">
                                  Available times for
                                </div>
                                <div className="font-medium text-foreground mt-1">
                                  {new Date(selectedDate).toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    month: 'long', 
                                    day: 'numeric' 
                                  })}
                                </div>
                              </div>
                            </div>
                            
                            {/* Time Slots */}
                            <div className="flex-1 p-4 overflow-y-auto">
                              <div className="space-y-3">
                                {availableTimes.map((time) => (
                                  <button
                                    key={time}
                                    onClick={() => handleTimeSelect(time)}
                                    className={`w-full p-4 rounded-lg border transition-all duration-200 hover:scale-105 text-left ${
                                      selectedTime === time
                                        ? 'border-electric bg-electric text-white shadow-md'
                                        : 'border-border hover:border-electric/50 text-foreground hover:bg-electric/5'
                                    }`}
                                  >
                                    <div className="font-medium">{time}</div>
                                    <div className="text-xs opacity-70 mt-1">15 minutes • Available</div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="bg-muted/30 border border-dashed border-muted-foreground/30 rounded-2xl h-[400px] flex items-center justify-center">
                            <div className="text-muted-foreground text-center">
                              <Calendar className="w-8 h-8 mx-auto mb-3 opacity-50" />
                              <p className="text-sm">Select a date first to see available times</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Continue Button */}
                    {selectedDate && selectedTime && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center pt-6"
                      >
                        <button
                          onClick={() => setStep(2)}
                          className="btn-primary flex items-center gap-2 px-12 py-4 text-lg shadow-xl hover:shadow-2xl"
                        >
                          <span>Continue to Details</span>
                          <ArrowRight className="w-5 h-5" />
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
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-3">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-electric focus:border-electric transition-all duration-200 bg-background"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-3">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-electric focus:border-electric transition-all duration-200 bg-background"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-3">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-electric focus:border-electric transition-all duration-200 bg-background"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-3">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-electric focus:border-electric transition-all duration-200 bg-background"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          Tell us about your lead generation goals
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-electric focus:border-electric transition-all duration-200 bg-background"
                          placeholder="What challenges are you facing with SaaS lead generation?"
                        />
                      </div>

                      {/* Selected Date/Time Summary */}
                      <div className="bg-electric/5 p-6 rounded-xl border border-electric/20">
                        <h4 className="font-semibold text-foreground mb-3">Meeting Details</h4>
                        <p className="text-muted-foreground">
                          {new Date(selectedDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} at {selectedTime}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          15-minute pipeline consultation
                        </p>
                      </div>

                      {/* Form Buttons */}
                      <div className="flex justify-between pt-6">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn-secondary flex items-center gap-2 px-6 py-3"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
                        >
                          <span>Book Meeting</span>
                          <ArrowRight className="w-5 h-5" />
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
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                      Meeting Booked Successfully!
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                      We've sent a calendar invite to {formData.email}. We're excited to discuss your SaaS lead generation goals!
                    </p>
                    <div className="bg-electric/5 p-6 rounded-xl mb-8 max-w-md mx-auto border border-electric/20">
                      <h4 className="font-semibold text-foreground mb-3">Meeting Details</h4>
                      <p className="text-muted-foreground">
                        {new Date(selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })} at {selectedTime}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        15-minute pipeline consultation
                      </p>
                    </div>
                    <a
                      href="/"
                      className="btn-primary px-8 py-4 text-lg"
                    >
                      Back to Home
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default BookCall;