import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Coffee, Bot, Zap, LineChart, Users, ArrowUpRight, Building2 } from 'lucide-react';

const LandingPage = () => {
  // Data for case studies
  const cases = [
    {
      company: "TechCorp Solutions",
      industry: "SaaS B2B",
      challenge: "Automatisation du processus de qualification des leads",
      solution: "IA prédictive & scoring automatique",
      results: {
        conversion: "+45%",
        productivity: "+60%",
        revenue: "+150K€"
      }
    },
    {
      company: "DataFlow",
      industry: "Big Data",
      challenge: "Optimisation du ciblage client",
      solution: "Algorithmes de segmentation avancée",
      results: {
        targeting: "+75%",
        efficiency: "+40%",
        leads: "+250"
      }
    },
    {
      company: "InnoServ",
      industry: "Services IT",
      challenge: "Personnalisation des propositions commerciales",
      solution: "IA générative & analyse prédictive",
      results: {
        response: "+80%",
        sales: "+35%",
        time: "-50%"
      }
    }
  ];

  // Data for process steps
  const steps = [
    {
      icon: Coffee,
      title: "1. Consultation gratuite",
      description: "Premier échange pour comprendre vos besoins et objectifs spécifiques"
    },
    {
      icon: Bot,
      title: "2. Audit & Stratégie IA",
      description: "Analyse de vos processus et élaboration d'une stratégie d'IA personnalisée"
    },
    {
      icon: Zap,
      title: "3. Développement",
      description: "Implémentation des solutions IA adaptées à votre business"
    },
    {
      icon: Users,
      title: "4. Formation",
      description: "Formation de vos équipes et intégration des outils"
    },
    {
      icon: LineChart,
      title: "5. Optimisation",
      description: "Suivi des performances et optimisation continue"
    }
  ];

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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-indigo-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comment ça marche ?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un processus simple et efficace pour intégrer l'IA dans votre entreprise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index !== steps.length - 1 && (
                  <div className="absolute left-[2.45rem] top-16 w-0.5 h-16 bg-indigo-600/50" />
                )}
                <Card className="mb-8 transform hover:scale-105 transition-transform duration-300 bg-indigo-900/30 border-0">
                  <div className="flex items-start p-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-6">
                      {React.createElement(step.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-2" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Études de cas</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez comment nos solutions IA transforment concrètement les entreprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="bg-indigo-900/30 border-0 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Building2 className="h-8 w-8 text-indigo-400 mb-2" />
                      <h3 className="text-xl font-bold">{case_.company}</h3>
                      <p className="text-gray-400">{case_.industry}</p>
                    </div>
                    <button className="p-2 hover:bg-indigo-800/50 rounded-full">
                      <ArrowUpRight className="h-6 w-6 text-indigo-400" />
                    </button>
                  </div>

                  <div className="mb-6">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-300">{case_.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300">{case_.solution}</p>
                    </div>
                  </div>

                  <div className="bg-indigo-950/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Résultats</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(case_.results).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-indigo-400 font-bold mb-1">{value}</div>
                          <div className="text-sm text-gray-400">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full text-lg inline-flex items-center gap-2">
              Voir plus de cas
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;