import { ArrowRight, Zap, GitBranch, Users, Mail, Database, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const automationSystems = [
  {
    name: "Cold Outreach Follow-up",
    description: "Automated sequences that nurture cold leads through personalized touchpoints based on engagement signals.",
    icon: Mail,
  },
  {
    name: "CRM Enrichment",
    description: "Pull data from multiple sources to automatically enrich contact records with company info, social profiles, and behavioral data.",
    icon: Database,
  },
  {
    name: "Webinar-to-Email Sync",
    description: "Seamlessly move webinar attendees through email sequences based on attendance, engagement, and registration status.",
    icon: Users,
  },
  {
    name: "Auto-Tagged Lead Pipelines",
    description: "Intelligent lead scoring and tagging based on behavior, source, and qualification criteria across all touchpoints.",
    icon: Zap,
  },
  {
    name: "Content Distribution Flow",
    description: "Automatically distribute content across channels, track performance, and trigger follow-up actions based on engagement.",
    icon: GitBranch,
  },
  {
    name: "Customer Onboarding Automation",
    description: "Streamlined onboarding sequences that adapt based on customer type, purchase tier, and completion status.",
    icon: Workflow,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-lg font-medium text-gray-900">
              Everything Automation
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm text-gray-600 font-medium">System Library</a>
              <a href="#" className="text-sm text-gray-600 font-medium">How It Works</a>
              <a href="#" className="text-sm text-gray-600 font-medium">Book a Call</a>
            </nav>
            
            <Button size="sm" className="text-sm font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 leading-tight">
            Automation systems that
            <span className="block font-medium">actually drive results.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Proven automation systems that streamline operations, grow pipeline, and boost revenue—so you can focus on everything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button size="lg" className="h-12 px-8 text-base font-medium">
              Book a Free Automation Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium">
              Browse System Library
            </Button>
          </div>
        </div>
      </section>

      {/* Automation Systems Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Ready-to-deploy systems
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each system is pre-scoped with clear inputs, outputs, and delivery timelines. 
            No scope creep. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationSystems.map((system, index) => {
            const IconComponent = system.icon;
            return (
              <div
                key={index}
                className="group border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm font-medium text-gray-900 mb-2">
                      {system.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-600">
              Straightforward process. Clear deliverables. Working systems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="font-mono text-sm font-medium text-gray-900">01</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-gray-900 mb-2">Book</h3>
              <p className="text-sm text-gray-600">
                Schedule a 30-minute scoping call to discuss your specific automation needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="font-mono text-sm font-medium text-gray-900">02</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-gray-900 mb-2">Intake</h3>
              <p className="text-sm text-gray-600">
                Complete a detailed intake form covering your tools, data sources, and workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="font-mono text-sm font-medium text-gray-900">03</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-gray-900 mb-2">Build</h3>
              <p className="text-sm text-gray-600">
                Your system is built and tested in n8n with clear documentation and handoff notes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="font-mono text-sm font-medium text-gray-900">04</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-gray-900 mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">
                Receive your working automation system with setup instructions and support docs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-light text-gray-900 leading-tight">
            Ready to leverage automation
            <span className="block font-medium">in your business?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Replace messy, manual, and haphazard processes with tried-and-true automation systems configured specifically for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-12 px-8 text-base font-medium">
              Book a Free Automation Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium">
              Browse Full System Library
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left side */}
            <div className="space-y-2 mb-6 md:mb-0">
              <div className="font-mono text-lg font-medium text-gray-900">
                Everything Automation
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Automation systems delivered fast.
              </p>
            </div>
            
            {/* Right side - Links */}
            <div className="flex space-x-12">
              {/* Column 1 */}
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">About</a>
                <a href="#" className="block text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">Contact</a>
                <a href="#" className="block text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">Terms</a>
              </div>
              
              {/* Column 2 */}
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">System Library</a>
                <a href="#" className="block text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">How It Works</a>
                <a href="#" className="block text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">Book a Call</a>
              </div>
            </div>
          </div>
          
          {/* Contact and Copyright section */}
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Ready to automate? Contact{" "}
              <a href="mailto:team@everythingautomation.com" className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                team@everythingautomation.com
              </a>
            </p>
            
            {/* Copyright */}
            <p className="text-xs text-gray-400 font-light">
              © 2025 Everything Automation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
