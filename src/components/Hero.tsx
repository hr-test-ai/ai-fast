import { Button } from "@/components/ui/button";
import { ArrowDown, Plus } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-devil-red/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-devil-red/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-devil-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
              <span className="block text-white">ЛІДЕРИ ЗА ОБСЯГАМИ</span>
              <span className="block text-gradient">НАЛИТОГО</span>
              <span className="block text-white flex items-center justify-center gap-4">
                <span className="text-devil-red animate-glow">⚡</span>
                ТРАФІКУ
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4">
              НЕВПИННО <span className="text-gradient font-bold">ЗАДАЄМО</span>
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-12">
              ТРЕНДИ В AFFILIATE-ІНДУСТРІЇ
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 mb-16 group"
            >
              СТАТИ ПАРТНЕРОМ TD
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-border/20 hover:bg-card/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-gradient mb-2">100+</div>
              <div className="text-muted-foreground">Людей у компанії</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-border/20 hover:bg-card/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-muted-foreground">Роки роботи на найвищому рівні</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-border/20 hover:bg-card/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-gradient mb-2">$70М</div>
              <div className="text-muted-foreground">Оборот компанії за минулий рік</div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm mb-2">Гортай вниз</span>
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;