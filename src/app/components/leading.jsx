import React from 'react';
import { ArrowRight, Link, Shield, Zap } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-10 rounded-lg p-6">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="py-5 min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 text-white">

      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6">Tous vos liens en un seul endroit</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Créez une page de liens personnalisée en quelques minutes. Partagez facilement tous vos profils sociaux, sites web et contenus importants.
        </p>
        <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full text-lg font-medium hover:bg-opacity-90 transition duration-300">
          Commencer gratuitement
          <ArrowRight className="ml-2" />
        </a>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Zap size={32} />}
            title="Rapide et facile"
            description="Créez votre page en quelques clics. Aucune compétence technique requise."
          />
          <FeatureCard
            icon={<Link size={32} />}
            title="Personnalisable"
            description="Choisissez parmi plusieurs thèmes et personnalisez votre page à votre image."
          />
          <FeatureCard
            icon={<Shield size={32} />}
            title="Sécurisé"
            description="Vos données sont en sécurité avec notre hébergement sécurisé et fiable."
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;