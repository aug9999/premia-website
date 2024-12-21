import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="text-xl font-bold">Prem'IA</div>
        <div className="flex gap-8">
          <a href="#solutions" className="hover:text-indigo-400">Solutions IA</a>
          <a href="#process" className="hover:text-indigo-400">Notre approche</a>
          <a href="#cases" className="hover:text-indigo-400">Réussites clients</a>
          <a href="#pricing" className="hover:text-indigo-400">Tarifs</a>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full">
          Démarrer un projet
        </button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 text-center pt-20 pb-16">
        <div className="inline-block bg-indigo-800/50 rounded-full px-4 py-2 mb-8">
          🤖 Intelligence Artificielle B2B
        </div>
        
        <h1 className="text-6xl font-bold mb-8 leading-tight">
          L'IA au service de<br/>
          votre croissance B2B<br/>
          <span className="text-indigo-400">automatisée et maîtrisée</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Prem'IA développe des solutions d'intelligence artificielle sur mesure 
          pour automatiser et optimiser vos processus commerciaux B2B.
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full text-lg">
          Découvrir nos solutions
        </button>
      </main>

      {/* Pillars Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">Les 3 piliers de notre expertise</h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Notre approche holistique combine trois dimensions essentielles pour maximiser votre croissance avec l'IA
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="bg-indigo-900/30 border-0 transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Acquisition</h3>
              <p className="text-gray-300">
                Générez des leads qualifiés grâce à nos algorithmes d'IA qui identifient et ciblent votre audience idéale avec précision.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-indigo-900/30 border-0 transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Automatisation</h3>
              <p className="text-gray-300">
                Optimisez vos processus grâce à nos solutions d'automatisation intelligente qui libèrent votre équipe des tâches répétitives.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-indigo-900/30 border-0 transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Accompagnement</h3>
              <p className="text-gray-300">
                Bénéficiez d'un accompagnement personnalisé pour intégrer l'IA dans votre stratégie et former vos équipes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nos solutions IA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-indigo-900/30 border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">🔍 IA Prédictive</h3>
              <p className="text-gray-300">Anticipez les besoins de vos clients et optimisez vos actions commerciales.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-indigo-900/30 border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">🤖 Automatisation</h3>
              <p className="text-gray-300">Fluidifiez vos processus avec nos workflows intelligents.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-indigo-900/30 border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">📈 Analytics</h3>
              <p className="text-gray-300">Pilotez votre croissance avec nos tableaux de bord IA.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;