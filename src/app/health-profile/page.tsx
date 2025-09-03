'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Radar } from 'react-chartjs-2';
import { Button } from '@/components/ui/Button';
import { Activity, TrendingUp, Award, Scale } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Sample data - Replace with actual quiz data
const sampleUserData = {
  personalInfo: {
    age: 28,
    weight: 180,
    height: "5'11\"",
    activityLevel: "Moderate",
    fitnessGoals: ["Muscle Gain", "Recovery"],
  },
  metrics: {
    strengthScore: 75,
    enduranceScore: 65,
    recoveryScore: 80,
    nutritionScore: 70,
    sleepQuality: 85,
  },
  progressData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    strength: [65, 68, 70, 72, 74, 75],
    endurance: [60, 61, 63, 64, 65, 65],
    recovery: [70, 72, 75, 77, 79, 80],
  },
};

export default function HealthProfile() {
  // Line chart config for progress tracking
  const progressChartData = {
    labels: sampleUserData.progressData.labels,
    datasets: [
      {
        label: 'Strength',
        data: sampleUserData.progressData.strength,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
      },
      {
        label: 'Endurance',
        data: sampleUserData.progressData.endurance,
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.3,
      },
      {
        label: 'Recovery',
        data: sampleUserData.progressData.recovery,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.3,
      },
    ],
  };

  // Radar chart config for overall fitness assessment
  const radarChartData = {
    labels: ['Strength', 'Endurance', 'Recovery', 'Nutrition', 'Sleep'],
    datasets: [
      {
        label: 'Your Scores',
        data: [
          sampleUserData.metrics.strengthScore,
          sampleUserData.metrics.enduranceScore,
          sampleUserData.metrics.recoveryScore,
          sampleUserData.metrics.nutritionScore,
          sampleUserData.metrics.sleepQuality,
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  // Bar chart config for comparison with target scores
  const targetComparisonData = {
    labels: ['Strength', 'Endurance', 'Recovery', 'Nutrition', 'Sleep'],
    datasets: [
      {
        label: 'Your Score',
        data: [
          sampleUserData.metrics.strengthScore,
          sampleUserData.metrics.enduranceScore,
          sampleUserData.metrics.recoveryScore,
          sampleUserData.metrics.nutritionScore,
          sampleUserData.metrics.sleepQuality,
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Target Score',
        data: [85, 80, 85, 80, 90],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Health Profile</h1>
              <p className="mt-1 text-sm text-gray-500">
                Your personalized health and fitness insights
              </p>
            </div>
            <Button
              onClick={() => window.location.href = '/quiz'}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Update Assessment
            </Button>
          </div>

          {/* Personal Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <Scale className="h-6 w-6 text-blue-500" />
              <p className="mt-2 text-sm font-medium text-gray-500">Weight</p>
              <p className="text-lg font-semibold text-gray-900">{sampleUserData.personalInfo.weight} lbs</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Activity className="h-6 w-6 text-green-500" />
              <p className="mt-2 text-sm font-medium text-gray-500">Activity Level</p>
              <p className="text-lg font-semibold text-gray-900">{sampleUserData.personalInfo.activityLevel}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-500" />
              <p className="mt-2 text-sm font-medium text-gray-500">Primary Goal</p>
              <p className="text-lg font-semibold text-gray-900">{sampleUserData.personalInfo.fitnessGoals[0]}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Award className="h-6 w-6 text-yellow-500" />
              <p className="mt-2 text-sm font-medium text-gray-500">Overall Score</p>
              <p className="text-lg font-semibold text-gray-900">75/100</p>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Progress Over Time */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Progress Over Time</h2>
            <div className="h-80">
              <Line
                data={progressChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Fitness Assessment */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Fitness Assessment</h2>
            <div className="h-80">
              <Radar
                data={radarChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    r: {
                      beginAtZero: true,
                      max: 100,
                      ticks: {
                        stepSize: 20,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Target Comparison */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Comparison with Targets</h2>
            <div className="h-80">
              <Bar
                data={targetComparisonData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Personalized Recommendations</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800">Recovery Focus</h3>
                <p className="mt-1 text-sm text-blue-600">
                  Your recovery scores are strong. Continue with current rest periods between workouts.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="text-sm font-medium text-yellow-800">Endurance Improvement</h3>
                <p className="mt-1 text-sm text-yellow-600">
                  Consider adding 1-2 cardio sessions per week to improve endurance scores.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-sm font-medium text-green-800">Nutrition Tip</h3>
                <p className="mt-1 text-sm text-green-600">
                  Increase protein intake to support your muscle gain goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
