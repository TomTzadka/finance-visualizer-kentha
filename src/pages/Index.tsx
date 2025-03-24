
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/HeroSection';
import FinanceDashboard from '@/components/FinanceDashboard';
import FinancingPaths from '@/components/FinancingPaths';
import AnalysisForm from '@/components/AnalysisForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import KenHaTorFinance from '@/components/KenHaTorFinance';

const Index: React.FC = () => {
  useEffect(() => {
    // Apply smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <MainLayout>
      <HeroSection />
      <FinanceDashboard />
      <KenHaTorFinance />
      <FinancingPaths />
      <AnalysisForm />
      <ResultsDisplay />
    </MainLayout>
  );
};

export default Index;
