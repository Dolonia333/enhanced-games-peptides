"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star, Shield, Zap, Heart, Brain, Trophy, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import HeroSection from "@/components/sections/HeroSection";
import { PopupAd, usePopupAd } from "@/components/ui/PopupAd";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const neonPulse = {
    animate: {
      boxShadow: [
        "0 0 5px rgba(26, 4, 255, 0.5)",
        "0 0 10px rgba(26, 4, 255, 0.5)",
        "0 0 15px rgba(26, 4, 255, 0.5)",
        "0 0 10px rgba(26, 4, 255, 0.5)",
        "0 0 5px rgba(26, 4, 255, 0.5)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const products = [
    {
      id: "1",
      name: "Essential Protocol",
      price: 299,
      originalPrice: 399,
      description: "Perfect starter package for newcomers to peptide therapy",
      features: [
        "BPC-157 (5mg)",
        "Basic consultation",
        "Email support",
        "Starter guide"
      ],
      tier: "essential" as const,
      popular: false,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
      variant: "outline"
    },
    {
      id: "2",
      name: "Advanced Performance",
      price: 599,
      originalPrice: 799,
      variant: "neon",
      description: "Comprehensive protocol for serious athletes and professionals",
      features: [
        "BPC-157 + TB-500 combo",
        "Priority consultation",
        "Phone & chat support",
        "Performance tracking",
        "Custom dosing guide"
      ],
      tier: "advanced" as const,
      popular: true,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: "3",
      name: "Elite Optimization",
      price: 999,
      originalPrice: 1299,
      description: "Premium package with full spectrum peptide therapy",
      features: [
        "Full peptide panel",
        "Dedicated specialist",
        "24/7 priority support",
        "Blood work analysis",
        "Custom protocols",
        "VIP community access"
      ],
      tier: "elite" as const,
      popular: false,
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const testimonials = [
    {
      id: "1",
      name: "Marcus Chen",
      title: "Professional Athlete",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format&q=80",
      quote: "Enhanced Games peptides transformed my recovery time. I went from struggling with injuries to performing at my peak consistently.",
      rating: 5,
      protocol: "Advanced Performance"
    },
    {
      id: "2", 
      name: "Sarah Rodriguez",
      title: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format&q=80",
      quote: "The Essential Protocol was perfect for getting started. Within weeks, I noticed improved energy and faster muscle recovery.",
      rating: 5,
      protocol: "Essential Protocol"
    },
    {
      id: "3",
      name: "David Thompson", 
      title: "Biohacker & Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format&q=80",
      quote: "Elite Optimization delivered results beyond my expectations. The personalized approach and 24/7 support made all the difference.",
      rating: 5,
      protocol: "Elite Optimization"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Enhanced circulation and heart function",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Cognitive Enhancement",
      description: "Improved focus and mental clarity",
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Energy & Stamina",
      description: "Sustained energy throughout the day",
      color: "text-yellow-500"
    },
    {
      icon: Trophy,
      title: "Athletic Performance",
      description: "Enhanced strength and endurance",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "Recovery & Healing",
      description: "Faster recovery from training",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Longevity",
      description: "Anti-aging and cellular health",
      color: "text-blue-500"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Satisfied Customers" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Expert Support" },
    { value: "30-Day", label: "Money Back" }
  ];

  // Popup Ad State - shows when scrolling past hero section
  const { isOpen: isPopupOpen, closePopup } = usePopupAd(200); // 200px past hero section

  const handlePopupCTA = () => {
    // Redirect to quiz page
    window.location.href = "/quiz";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Popup Ad */}
      <PopupAd 
        isOpen={isPopupOpen} 
        onClose={closePopup}
        onCTAClick={handlePopupCTA}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Athletes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Enhanced Games peptides have transformed the performance and recovery of athletes worldwide.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* User Info */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-xs text-blue-600 font-medium">{testimonial.protocol}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Health Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our peptide protocols target multiple aspects of health and performance for complete optimization.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <FeatureCard
                  icon={React.createElement(benefit.icon, { className: benefit.color })}
                  title={benefit.title}
                  description={benefit.description}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Performance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Take our personalized health assessment to discover your optimal peptide protocol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = "/quiz"}
              >
                Start Health Quiz
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="secondary" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
