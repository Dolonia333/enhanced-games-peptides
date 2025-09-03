'use client';

import React from 'react';
import InteractiveQuiz from '@/components/InteractiveQuiz';

const QuizPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <InteractiveQuiz />
        </div>
    );
};

export default QuizPage;
