"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Info,
  AlertCircle
} from "lucide-react";

// Assessment Data Types
interface ClientProfile {
  name: string;
  age: number;
  gender: string;
  height?: number;
  weight?: number;
  bodyFat?: number;
}

interface AssessmentData {
  clientProfile: ClientProfile;
  performanceGoals: string[];
  goalPriorities?: { [key: string]: number };
  trainingExperience: string;
  trainingFrequency: number;
  trainingStyles?: string[];
  sleepQuality?: number;
  sleepHours?: number;
  stressLevel?: number;
  healthConditions: string[];
  currentMedications?: string;
  currentSupplements?: string;
  peptideExperience: string;
  previousPeptides?: string;
  allergies?: string;
  dietType: string;
  alcoholConsumption: string;
  smokingStatus: string;
  injectionComfort: string;
  injectionFrequency?: string;
  resultsTimeline: string;
  additionalInfo?: string;
}

// Constants
const PERFORMANCE_GOALS = [
  "Muscle Growth & Hypertrophy",
  "Fat Loss & Body Composition",
  "Strength & Power Gains",
  "Recovery & Injury Prevention",
  "Endurance & Performance",
  "Anti-Aging & Longevity",
  "Hormone Optimization",
  "Sleep Quality Improvement"
];

const TRAINING_STYLES = [
  "Weight Training",
  "Cardio",
  "HIIT",
  "CrossFit",
  "Olympic Lifting",
  "Bodybuilding",
  "Powerlifting",
  "Functional Training"
];

const HEALTH_CONDITIONS = [
  "None",
  "Diabetes",
  "Heart Disease",
  "High Blood Pressure",
  "Thyroid Issues",
  "Kidney Disease",
  "Liver Disease",
  "Cancer",
  "Autoimmune Disorders"
];

const DIET_TYPES = [
  "Standard American Diet",
  "Ketogenic",
  "Paleo",
  "Mediterranean",
  "Vegetarian",
  "Vegan",
  "Intermittent Fasting",
  "Calorie Restricted"
];

// Progress Bar Component
const ProgressBar = ({ currentStep, totalSteps, completedSteps }: {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
}) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex flex-col items-center">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              i < currentStep || completedSteps.includes(i)
                ? "bg-green-500 text-white"
                : i === currentStep
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {i < currentStep || completedSteps.includes(i) ? (
              <CheckCircle size={16} />
            ) : i === currentStep ? (
              <span>{i + 1}</span>
            ) : (
              <span>{i + 1}</span>
            )}
          </motion.div>
          <span className="text-xs text-gray-600 mt-1 text-center max-w-20">
            Step {i + 1}
          </span>
        </div>
      ))}
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div
        className="bg-blue-600 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </div>
);

// Tooltip Component
const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg max-w-xs"
            style={{ top: "100%", left: "50%", transform: "translateX(-50%)" }}
          >
            {content}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Input Component with Validation
const ValidatedInput = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  tooltip,
  validation
}: {
  label: string;
  value: string | number;
  onChange: (value: any) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  tooltip?: string;
  validation?: (value: any) => boolean;
}) => {
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  React.useEffect(() => {
    if (touched && validation) {
      setIsValid(validation(value));
    }
  }, [value, touched, validation]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched(true);
    const newValue = type === "number" ? parseFloat(e.target.value) : e.target.value;
    onChange(newValue);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {tooltip && (
          <Tooltip content={tooltip}>
            <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
          </Tooltip>
        )}
      </div>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            touched && !isValid ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {touched && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isValid ? (
              <CheckCircle size={20} className="text-green-500" />
            ) : (
              <AlertCircle size={20} className="text-red-500" />
            )}
          </div>
        )}
      </div>
      {touched && !isValid && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600"
        >
          Please enter a valid value
        </motion.p>
      )}
    </div>
  );
};

export default function InteractiveQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState<Partial<AssessmentData>>({});
  const [generatedProtocol, setGeneratedProtocol] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { title: "Client Profile", description: "Basic information", icon: "" },
    { title: "Performance Goals", description: "What you want to achieve", icon: "" },
    { title: "Training & Lifestyle", description: "Your current routine", icon: "" },
    { title: "Health History", description: "Medical background", icon: "" },
    { title: "Lifestyle Factors", description: "Daily habits", icon: "" },
    { title: "Preferences", description: "Your comfort level", icon: "" },
    { title: "Review & Generate", description: "Final review and protocol", icon: "" }
  ];

  const updateAssessmentData = (updates: Partial<AssessmentData>) => {
    setAssessmentData(prev => ({ ...prev, ...updates }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: // Client Profile
        return assessmentData.clientProfile?.name &&
               assessmentData.clientProfile?.age &&
               assessmentData.clientProfile?.gender;
      case 1: // Performance Goals
        return assessmentData.performanceGoals && assessmentData.performanceGoals.length > 0;
      case 2: // Training & Lifestyle
        return assessmentData.trainingExperience && assessmentData.trainingFrequency;
      case 3: // Health History
        return assessmentData.healthConditions && assessmentData.peptideExperience;
      case 4: // Lifestyle Factors
        return assessmentData.dietType && assessmentData.smokingStatus;
      case 5: // Preferences
        return assessmentData.injectionComfort && assessmentData.resultsTimeline;
      case 6: // Review & Generate
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && !completedSteps.includes(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep]);
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const generateProtocol = async () => {
    setIsGenerating(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const data = assessmentData as AssessmentData;
    const protocol = `
 ENHANCED GAMES PEPTIDES CUSTOM PROTOCOL
==========================================

CLIENT: ${data.clientProfile.name} | AGE: ${data.clientProfile.age} | GOALS: ${data.performanceGoals.join(", ")}

 SAFETY ASSESSMENT
--------------------
Medical Clearance Status: ${data.healthConditions.includes("None") ? "CLEARED" : "CONSULTATION REQUIRED"}
Risk Factors: ${data.healthConditions.filter(c => c !== "None").join(", ") || "None identified"}
Contraindications: ${data.healthConditions.includes("Diabetes") || data.healthConditions.includes("Heart Disease") ? "Monitor blood glucose/cardiovascular health" : "None"}
Required Monitoring: Regular blood work, hormone panels, comprehensive metabolic panel

 CORE PEPTIDE PROTOCOL
-----------------------
PRIMARY BLEND:

1. CJC-1295 + Ipamorelin - Growth Hormone Optimization
    Dosage: 2mg CJC-1295 + 300mcg Ipamorelin
    Schedule: Monday, Wednesday, Friday evenings
    Injection: Subcutaneous abdominal area
    Duration: 12-week cycles with 4-week breaks
    Rationale: Synergistic GH release for muscle growth and recovery

2. BPC-157 - Tissue Repair & Recovery
    Dosage: 500mcg
    Schedule: Daily post-workout
    Injection: Subcutaneous near injury sites
    Duration: 4-6 weeks per injury cycle
    Rationale: Accelerated healing and tissue repair

3. TB-500 - Muscle Recovery & Growth
    Dosage: 2mg
    Schedule: Twice weekly
    Injection: Subcutaneous
    Duration: 4-6 week cycles
    Rationale: Enhanced muscle repair and growth

 CYCLING STRATEGY
------------------
Phase 1 (Weeks 1-4): Loading phase - Full protocol dosage
Phase 2 (Weeks 5-12): Maintenance phase - 75% dosage
Rest Period: 4 weeks between cycles

 SUPPLEMENTAL SUPPORT
----------------------
- Vitamin D3: 5000 IU daily
- Omega-3: 2g EPA/DHA daily
- Magnesium: 400mg daily
- Zinc: 30mg daily

 MONITORING & ADJUSTMENTS
--------------------------
Week 4: Blood work assessment
Week 8: Progress evaluation and dosage adjustment
Week 12: Final assessment and cycle planning

 IMPORTANT NOTES
-----------------
- Start with lowest effective dose
- Monitor for side effects
- Maintain proper injection technique
- Combine with optimized nutrition and training
- Regular medical supervision recommended

Generated: ${new Date().toLocaleDateString()}
    `;

    setGeneratedProtocol(protocol);
    setIsGenerating(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Client Profile
        return (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about yourself</h2>
              <p className="text-gray-600">This helps us create a personalized peptide protocol</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ValidatedInput
                label="Full Name"
                value={assessmentData.clientProfile?.name || ""}
                onChange={(value) => updateAssessmentData({
                  clientProfile: { ...assessmentData.clientProfile!, name: value }
                })}
                placeholder="Enter your full name"
                required
                tooltip="Your full name for personalized protocol generation"
              />

              <ValidatedInput
                label="Age"
                type="number"
                value={assessmentData.clientProfile?.age || ""}
                onChange={(value) => updateAssessmentData({
                  clientProfile: { ...assessmentData.clientProfile!, age: value }
                })}
                placeholder="Your age"
                required
                validation={(value) => value >= 18 && value <= 100}
                tooltip="Must be 18+ for peptide therapy"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  value={assessmentData.clientProfile?.gender || ""}
                  onChange={(e) => updateAssessmentData({
                    clientProfile: { ...assessmentData.clientProfile!, gender: e.target.value }
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <ValidatedInput
                label="Height (cm)"
                type="number"
                value={assessmentData.clientProfile?.height || ""}
                onChange={(value) => updateAssessmentData({
                  clientProfile: { ...assessmentData.clientProfile!, height: value }
                })}
                placeholder="Height in cm"
                validation={(value) => value >= 120 && value <= 250}
                tooltip="Height in centimeters for BMI calculation"
              />

              <ValidatedInput
                label="Weight (kg)"
                type="number"
                value={assessmentData.clientProfile?.weight || ""}
                onChange={(value) => updateAssessmentData({
                  clientProfile: { ...assessmentData.clientProfile!, weight: value }
                })}
                placeholder="Weight in kg"
                validation={(value) => value >= 40 && value <= 200}
                tooltip="Weight in kilograms for dosage calculations"
              />

              <ValidatedInput
                label="Body Fat %"
                type="number"
                value={assessmentData.clientProfile?.bodyFat || ""}
                onChange={(value) => updateAssessmentData({
                  clientProfile: { ...assessmentData.clientProfile!, bodyFat: value }
                })}
                placeholder="Body fat percentage"
                validation={(value) => value >= 3 && value <= 50}
                tooltip="Approximate body fat percentage (optional but helpful)"
              />
            </div>
          </motion.div>
        );

      case 1: // Performance Goals
        return (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What are your goals?</h2>
              <p className="text-gray-600">Select all that apply and rank your priorities</p>
            </div>

            <div className="space-y-4">
              {PERFORMANCE_GOALS.map((goal) => (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: PERFORMANCE_GOALS.indexOf(goal) * 0.1 }}
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    id={goal}
                    checked={assessmentData.performanceGoals?.includes(goal) || false}
                    onChange={(e) => {
                      const goals = assessmentData.performanceGoals || [];
                      if (e.target.checked) {
                        updateAssessmentData({ performanceGoals: [...goals, goal] });
                      } else {
                        updateAssessmentData({ performanceGoals: goals.filter(g => g !== goal) });
                      }
                    }}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={goal} className="flex-1 text-gray-900 font-medium cursor-pointer">
                    {goal}
                  </label>
                  {assessmentData.performanceGoals?.includes(goal) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-sm text-gray-600">Priority:</span>
                      <select
                        value={assessmentData.goalPriorities?.[goal] || ""}
                        onChange={(e) => updateAssessmentData({
                          goalPriorities: {
                            ...assessmentData.goalPriorities,
                            [goal]: parseInt(e.target.value)
                          }
                        })}
                        className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2: // Training & Lifestyle
        return (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Training & Lifestyle</h2>
              <p className="text-gray-600">Help us understand your current routine</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Training Experience <span className="text-red-500">*</span>
                  <Tooltip content="How long have you been consistently training?">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.trainingExperience || ""}
                  onChange={(e) => updateAssessmentData({ trainingExperience: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner (0-1 years)</option>
                  <option value="Intermediate">Intermediate (1-3 years)</option>
                  <option value="Advanced">Advanced (3-5 years)</option>
                  <option value="Expert">Expert (5+ years)</option>
                </select>
              </div>

              <ValidatedInput
                label="Training Frequency (days/week)"
                type="number"
                value={assessmentData.trainingFrequency || ""}
                onChange={(value) => updateAssessmentData({ trainingFrequency: value })}
                placeholder="How many days per week?"
                required
                validation={(value) => value >= 1 && value <= 7}
                tooltip="Number of training days per week"
              />

              <ValidatedInput
                label="Sleep Quality (1-10)"
                type="number"
                value={assessmentData.sleepQuality || ""}
                onChange={(value) => updateAssessmentData({ sleepQuality: value })}
                placeholder="Rate your sleep quality"
                validation={(value) => value >= 1 && value <= 10}
                tooltip="1 = Poor, 10 = Excellent sleep quality"
              />

              <ValidatedInput
                label="Sleep Hours per Night"
                type="number"
                value={assessmentData.sleepHours || ""}
                onChange={(value) => updateAssessmentData({ sleepHours: value })}
                placeholder="Average hours of sleep"
                validation={(value) => value >= 4 && value <= 12}
                tooltip="Average hours of sleep per night"
              />

              <ValidatedInput
                label="Stress Level (1-10)"
                type="number"
                value={assessmentData.stressLevel || ""}
                onChange={(value) => updateAssessmentData({ stressLevel: value })}
                placeholder="Rate your stress level"
                validation={(value) => value >= 1 && value <= 10}
                tooltip="1 = Low stress, 10 = High stress"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Training Styles</h3>
              <p className="text-gray-600">Select all that apply to your current training</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {TRAINING_STYLES.map((style) => (
                  <motion.label
                    key={style}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-all ${
                      assessmentData.trainingStyles?.includes(style)
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={assessmentData.trainingStyles?.includes(style) || false}
                      onChange={(e) => {
                        const styles = assessmentData.trainingStyles || [];
                        if (e.target.checked) {
                          updateAssessmentData({ trainingStyles: [...styles, style] });
                        } else {
                          updateAssessmentData({ trainingStyles: styles.filter(s => s !== style) });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{style}</span>
                  </motion.label>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 3: // Health History
        return (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Health History</h2>
              <p className="text-gray-600">Your medical background helps ensure safety</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Conditions</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {HEALTH_CONDITIONS.map((condition) => (
                    <motion.label
                      key={condition}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-all ${
                        assessmentData.healthConditions?.includes(condition)
                          ? "border-red-500 bg-red-50 text-red-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={assessmentData.healthConditions?.includes(condition) || false}
                        onChange={(e) => {
                          const conditions = assessmentData.healthConditions || [];
                          if (e.target.checked) {
                            updateAssessmentData({ healthConditions: [...conditions, condition] });
                          } else {
                            updateAssessmentData({ healthConditions: conditions.filter(c => c !== condition) });
                          }
                        }}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                      />
                      <span className="text-sm font-medium">{condition}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              <ValidatedInput
                label="Current Medications"
                value={assessmentData.currentMedications || ""}
                onChange={(value) => updateAssessmentData({ currentMedications: value })}
                placeholder="List current medications with dosages..."
                tooltip="Include all prescription medications and dosages"
              />

              <ValidatedInput
                label="Current Supplements"
                value={assessmentData.currentSupplements || ""}
                onChange={(value) => updateAssessmentData({ currentSupplements: value })}
                placeholder="List current supplements with dosages..."
                tooltip="Include vitamins, minerals, herbs, etc."
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Peptide Experience <span className="text-red-500">*</span>
                  <Tooltip content="Have you used peptides before? This affects your starting protocol.">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.peptideExperience || ""}
                  onChange={(e) => updateAssessmentData({ peptideExperience: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  <option value="None">No experience</option>
                  <option value="Beginner">Beginner (1-3 months)</option>
                  <option value="Intermediate">Intermediate (3-12 months)</option>
                  <option value="Advanced">Advanced (1+ years)</option>
                </select>
              </div>

              <ValidatedInput
                label="Previous Peptides"
                value={assessmentData.previousPeptides || ""}
                onChange={(value) => updateAssessmentData({ previousPeptides: value })}
                placeholder="List previous peptides and results..."
                tooltip="What peptides have you tried and how did they work?"
              />

              <ValidatedInput
                label="Allergies"
                value={assessmentData.allergies || ""}
                onChange={(value) => updateAssessmentData({ allergies: value })}
                placeholder="List any allergies or sensitivities..."
                tooltip="Include drug allergies, food allergies, etc."
              />
            </div>
          </motion.div>
        );

      case 4: // Lifestyle Factors
        return (
          <motion.div
            key="step-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Lifestyle Factors</h2>
              <p className="text-gray-600">Your daily habits affect peptide effectiveness</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Diet Type <span className="text-red-500">*</span>
                  <Tooltip content="Your diet affects nutrient absorption and peptide effectiveness.">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.dietType || ""}
                  onChange={(e) => updateAssessmentData({ dietType: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Diet Type</option>
                  {DIET_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Alcohol Consumption <span className="text-red-500">*</span>
                  <Tooltip content="Alcohol can interfere with peptide absorption and liver function.">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.alcoholConsumption || ""}
                  onChange={(e) => updateAssessmentData({ alcoholConsumption: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Level</option>
                  <option value="None">None</option>
                  <option value="Light">Light (1-2 drinks/week)</option>
                  <option value="Moderate">Moderate (3-7 drinks/week)</option>
                  <option value="Heavy">Heavy (8+ drinks/week)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Smoking Status <span className="text-red-500">*</span>
                  <Tooltip content="Smoking affects circulation and healing, important for peptide therapy.">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.smokingStatus || ""}
                  onChange={(e) => updateAssessmentData({ smokingStatus: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Status</option>
                  <option value="Never">Never smoked</option>
                  <option value="Former">Former smoker</option>
                  <option value="Current">Current smoker</option>
                </select>
              </div>
            </div>
          </motion.div>
        );

      case 5: // Preferences
        return (
          <motion.div
            key="step-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Preferences</h2>
              <p className="text-gray-600">Help us customize your experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Injection Comfort Level <span className="text-red-500">*</span>
                  <Tooltip content="This helps us recommend appropriate injection methods and training.">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.injectionComfort || ""}
                  onChange={(e) => updateAssessmentData({ injectionComfort: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Comfort Level</option>
                  <option value="Very Comfortable">Very Comfortable</option>
                  <option value="Somewhat Comfortable">Somewhat Comfortable</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Somewhat Uncomfortable">Somewhat Uncomfortable</option>
                  <option value="Very Uncomfortable">Very Uncomfortable</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Injection Frequency <span className="text-red-500">*</span>
                  <Tooltip content="How often are you comfortable with injections?">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.injectionFrequency || ""}
                  onChange={(e) => updateAssessmentData({ injectionFrequency: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Every Other Day">Every Other Day</option>
                  <option value="2-3 times per week">2-3 times per week</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-weekly">Bi-weekly</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Expected Results Timeline <span className="text-red-500">*</span>
                  <Tooltip content="When do you expect to see results? This affects protocol intensity.">
                    <Info size={16} className="inline ml-1 text-gray-400 hover:text-gray-600 cursor-help" />
                  </Tooltip>
                </label>
                <select
                  value={assessmentData.resultsTimeline || ""}
                  onChange={(e) => updateAssessmentData({ resultsTimeline: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Timeline</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
            </div>

            <ValidatedInput
              label="Additional Information"
              value={assessmentData.additionalInfo || ""}
              onChange={(value) => updateAssessmentData({ additionalInfo: value })}
              placeholder="Any additional concerns, requirements, or information..."
              tooltip="Share any other relevant information about your goals or concerns"
            />
          </motion.div>
        );

      case 6: // Review & Generate
        return (
          <motion.div
            key="step-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h2>
              <p className="text-gray-600">Please review your answers before generating your protocol</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Client Profile</h3>
                <p className="text-gray-600">
                  {assessmentData.clientProfile?.name}, {assessmentData.clientProfile?.age} years old, {assessmentData.clientProfile?.gender}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Performance Goals</h3>
                <p className="text-gray-600">
                  {assessmentData.performanceGoals?.join(", ") || "None selected"}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Training Experience</h3>
                <p className="text-gray-600">
                  {assessmentData.trainingExperience}  {assessmentData.trainingFrequency} days/week
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Health Status</h3>
                <p className="text-gray-600">
                  Conditions: {assessmentData.healthConditions?.join(", ") || "None"}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Info className="text-blue-500 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-blue-900">Ready to Generate</h4>
                  <p className="text-blue-700 text-sm">
                    Click "Generate Protocol" to create your personalized peptide protocol based on your responses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Peptide Protocol Assessment
        </h1>
        <p className="text-center text-gray-600">
          Let's create your personalized peptide protocol
        </p>
      </div>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={steps.length}
        completedSteps={completedSteps}
      />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{steps[currentStep].icon}</span>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600">{steps[currentStep].description}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {canProceed() && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center space-x-1 text-green-600"
            >
              <CheckCircle size={20} />
              <span className="text-sm font-medium">Ready to proceed</span>
            </motion.div>
          )}
        </div>
      </div>

      <Card className="p-8 mb-8">
        <AnimatePresence mode="wait">
          {renderStepContent()}
        </AnimatePresence>
      </Card>

      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center space-x-2"
        >
          <ChevronLeft size={20} />
          <span>Previous</span>
        </Button>

        <div className="flex items-center space-x-4">
          {generatedProtocol && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2 text-green-600"
            >
              <CheckCircle size={20} />
              <span className="font-medium">Protocol Generated!</span>
            </motion.div>
          )}

          {currentStep < steps.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </Button>
          ) : (
            <Button
              onClick={generateProtocol}
              disabled={!canProceed() || isGenerating}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <span>Generate Protocol</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {generatedProtocol && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Your Custom Protocol</h3>
              <div className="flex space-x-2">
                <Button
                  onClick={() => navigator.clipboard.writeText(generatedProtocol)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Copy to Clipboard
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setGeneratedProtocol("")}
                >
                  Generate New Protocol
                </Button>
              </div>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
              {generatedProtocol}
            </pre>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
