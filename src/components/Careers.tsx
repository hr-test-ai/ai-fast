import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock, ArrowRight } from "lucide-react";

const Careers = () => {
  const vacancies = [
    {
      title: "Team Lead Media Buyer PPC/UAC",
      salary: "За результатами співбесіди",
      location: "Київ (Офлайн)",
      type: "Повна зайнятість",
      description: "Керування командою медіабайєрів, розробка стратегій PPC кампаній"
    },
    {
      title: "Senior Media Buyer Facebook",
      salary: "$2000 - $4000",
      location: "Віддалено",
      type: "Повна зайнятість", 
      description: "Запуск та оптимізація рекламних кампаній у Facebook Ads"
    },
    {
      title: "Affiliate Manager",
      salary: "$1500 - $3000",
      location: "Київ (Гібрид)",
      type: "Повна зайнятість",
      description: "Робота з партнерськими програмами та розвиток affiliate мережі"
    },
    {
      title: "Creative Designer",
      salary: "$1200 - $2500", 
      location: "Віддалено",
      type: "Повна зайнятість",
      description: "Створення креативів для рекламних кампаній та лендингів"
    },
    {
      title: "Data Analyst",
      salary: "$1800 - $3500",
      location: "Київ (Офлайн)",
      type: "Повна зайнятість",
      description: "Аналіз даних трафіку та ефективності рекламних кампаній"
    },
    {
      title: "Traffic Manager",
      salary: "$1000 - $2000",
      location: "Віддалено",
      type: "Повна зайнятість",
      description: "Управління трафіком та оптимізація конверсій"
    }
  ];

  return (
    <section id="careers" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">Приєднуйся до </span>
            <span className="text-gradient">лідерів</span>
            <span className="text-white"> affiliate-ринку</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Станьте частиною команди професіоналів та розвивайтеся разом з нами в найдинамічнішій сфері digital-маркетингу
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <Card className="bg-card/30 backdrop-blur-sm border-border/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
                Чому варто працювати з нами?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Високі зарплати</h4>
                  <p className="text-muted-foreground text-sm">Конкурентні зарплати та бонуси за результат</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Розвиток</h4>
                  <p className="text-muted-foreground text-sm">Навчання та професійний розвиток</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Офіси</h4>
                  <p className="text-muted-foreground text-sm">Сучасні офіси в 3 країнах</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Результат</h4>
                  <p className="text-muted-foreground text-sm">Робота з топовими проектами</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vacancies */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Актуальні вакансії
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vacancies.map((vacancy, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                      {vacancy.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {vacancy.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 text-devil-red mr-2" />
                      <span className="text-muted-foreground">ЗАРПЛАТНЯ:</span>
                      <span className="text-white ml-2 font-medium">{vacancy.salary}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 text-devil-red mr-2" />
                      <span className="text-muted-foreground">ФОРМАТ:</span>
                      <span className="text-white ml-2 font-medium">{vacancy.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-devil-red mr-2" />
                      <span className="text-muted-foreground">ТИП:</span>
                      <Badge variant="outline" className="text-devil-red border-devil-red ml-2">
                        {vacancy.type}
                      </Badge>
                    </div>
                  </div>

                  <Button 
                    variant="outline-devil" 
                    className="w-full group-hover:bg-devil-red group-hover:text-white"
                  >
                    Подати заявку
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Не знайшли підходящу вакансію?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Надішліть нам своє резюме, і ми зв'яжемося з вами, коли з'явиться відповідна позиція
              </p>
              <Button variant="hero" size="lg">
                Надіслати резюме
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;