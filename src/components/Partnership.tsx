import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Shield, Headphones, Target } from "lucide-react";

const Partnership = () => {
  const benefits = [
    {
      id: "01",
      title: "ЯКІСНИЙ ТРАФІК У ШАЛЕНИХ ОБСЯГАХ",
      icon: TrendingUp,
      description: "Забезпечуємо високоякісний трафік у великих об'ємах для максимізації ваших доходів"
    },
    {
      id: "02", 
      title: "ЕФЕКТИВНА РОБОТА З РІЗНИМИ ГЕО ТА ДЖЕРЕЛАМИ",
      icon: Globe,
      description: "Працюємо з різними географічними регіонами та джерелами трафіку для оптимальних результатів"
    },
    {
      id: "03",
      title: "ПРИВАТНІ УМОВИ",
      icon: Shield,
      description: "Індивідуальні умови співпраці, адаптовані під ваші потреби та цілі"
    },
    {
      id: "04",
      title: "КВАЛІФІКОВАНИЙ САПОРТ І ПОСТІЙНА КОМУНІКАЦІЯ",
      icon: Headphones,
      description: "Професійна підтримка 24/7 та постійна комунікація для вирішення будь-яких питань"
    },
    {
      id: "05",
      title: "100% РЕЗУЛЬТАТ",
      icon: Target,
      description: "Гарантуємо досягнення поставлених цілей та максимальну ефективність кампаній"
    }
  ];

  return (
    <section id="partnership" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">ПАРТНЕРСТВО З </span>
            <span className="text-gradient">TRAFFIC DEVILS</span>
            <span className="text-white"> — ЦЕ:</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.id} 
                className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Badge variant="outline" className="text-devil-red border-devil-red font-bold text-lg px-3 py-1">
                      [{benefit.id}]
                    </Badge>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-devil-red/20 rounded-lg flex items-center justify-center group-hover:bg-devil-red/30 transition-colors">
                          <Icon className="w-6 h-6 text-devil-red" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-8">
                <span className="text-white">КОЖЕН </span>
                <span className="text-gradient">ПАРТНЕР</span>
                <span className="text-white"> ДЛЯ НАС — ОСОБЛИВА ЦІННІСТЬ</span>
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8">
                ТОМУ МИ НЕ ОБІЦЯЄМО, А ЗАБЕЗПЕЧУЄМО:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">ЯКІСТЬ</div>
                  <div className="w-16 h-1 bg-devil-red mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">НАДІЙНІСТЬ</div>
                  <div className="w-16 h-1 bg-devil-red mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">СТАБІЛЬНІСТЬ</div>
                  <div className="w-16 h-1 bg-devil-red mx-auto"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partnership;