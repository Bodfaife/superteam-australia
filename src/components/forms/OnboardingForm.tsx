'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common';
import { MEMBER_ROLES, SKILLS } from '@/constants';
import { MemberRole, MemberSkill } from '@/types';
import { CheckCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  location: string;
  role: MemberRole | '';
  skills: MemberSkill[];
  experienceLevel: string;
  twitterHandle: string;
  githubHandle: string;
  portfolioUrl: string;
  lookingFor: string;
}

export function OnboardingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    role: '',
    skills: [],
    experienceLevel: '',
    twitterHandle: '',
    githubHandle: '',
    portfolioUrl: '',
    lookingFor: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillToggle = (skill: MemberSkill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.location || !formData.role) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitted(true);
      toast.success('Welcome to Superteam Australia!');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          location: '',
          role: '',
          skills: [],
          experienceLevel: '',
          twitterHandle: '',
          githubHandle: '',
          portfolioUrl: '',
          lookingFor: '',
        });
        setCurrentStep(1);
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12"
      >
        <CheckCircle className="mb-4 h-16 w-16 text-green-600" />
        <h3 className="text-2xl font-bold text-neutral-900">Welcome to Superteam Australia!</h3>
        <p className="mt-2 text-neutral-600">
          We've received your application. Our team will reach out soon.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="input-base w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="input-base w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State"
                className="input-base w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                What role best describes you? *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="input-base w-full"
                required
              >
                <option value="">Select a role</option>
                {MEMBER_ROLES.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label} - {role.description}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}

        {/* Step 2: Skills & Experience */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-3">
                What are your key skills? (Select as many as apply)
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {SKILLS.map((skill) => (
                  <button
                    key={skill.value}
                    type="button"
                    onClick={() => handleSkillToggle(skill.value)}
                    className={`rounded-lg border-2 px-4 py-3 text-left transition-all ${
                      formData.skills.includes(skill.value)
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    <span className="font-medium">{skill.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className="input-base w-full"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner (0-1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Step 3: Links & Interest */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Twitter/X Handle
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-neutral-600 bg-neutral-100 border border-r-0 border-neutral-300 rounded-l-lg">
                  @
                </span>
                <input
                  type="text"
                  name="twitterHandle"
                  value={formData.twitterHandle}
                  onChange={handleInputChange}
                  placeholder="handle"
                  className="input-base w-full rounded-l-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                GitHub Handle
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-neutral-600 bg-neutral-100 border border-r-0 border-neutral-300 rounded-l-lg">
                  github.com/
                </span>
                <input
                  type="text"
                  name="githubHandle"
                  value={formData.githubHandle}
                  onChange={handleInputChange}
                  placeholder="username"
                  className="input-base w-full rounded-l-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Portfolio / Website
              </label>
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleInputChange}
                placeholder="https://yoursite.com"
                className="input-base w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                What are you looking for?
              </label>
              <textarea
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleInputChange}
                placeholder="Opportunities, collaborators, knowledge, etc."
                rows={3}
                className="input-base w-full"
              />
            </div>
          </motion.div>
        )}

        {/* Progress Indicator */}
        <div className="flex gap-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 flex-1 rounded-full transition-colors ${
                step <= currentStep ? 'bg-primary-600' : 'bg-neutral-200'
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-4">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex-1"
            >
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Submitting...' : 'Join Superteam Australia'}
            </Button>
          )}
        </div>
      </form>
    </>
  );
}
