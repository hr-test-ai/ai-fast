import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const teamMembers = [
    {
      name: "Олександр Слобоженко",
      position: "Founder",
      image: "👨‍💼"
    },
    {
      name: "Вікторія Тіхачова", 
      position: "CEO",
      image: "👩‍💼"
    },
    {
      name: "Артур Жуков",
      position: "HEAD OF PR", 
      image: "👨‍💻"
    },
    {
      name: "Данило Дяченко",
      position: "CBDO",
      image: "👨‍🎯"
    },
    {
      name: "Геннадій",
      position: "TEAM LEAD",
      image: "👨‍🚀"
    },
    {
      name: "Анна",
      position: "TEAM LEAD",
      image: "👩‍🚀"
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gradient">
            Наша команда
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Експерти affiliate-маркетингу, які щодня працюють над створенням найкращих рішень для наших партнерів
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 bg-devil-red/20 rounded-full flex items-center justify-center text-4xl group-hover:bg-devil-red/30 transition-colors">
                  {member.image}
                </div>

                {/* Position Badge */}
                <Badge 
                  variant="outline" 
                  className="text-devil-red border-devil-red mb-4 group-hover:bg-devil-red group-hover:text-white transition-colors"
                >
                  {member.position}
                </Badge>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                  {member.name}
                </h3>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-devil-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-20 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-8 text-white">
                Разом ми створюємо майбутнє affiliate-маркетингу
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Наша команда об'єднує досвідчених професіоналів, які поділяють спільні цінності та прагнуть до досконалості у всьому, що ми робимо.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-bold text-gradient mb-2">Інновації</h4>
                  <p className="text-muted-foreground">Постійно впроваджуємо нові технології</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-bold text-gradient mb-2">Партнерство</h4>
                  <p className="text-muted-foreground">Будуємо довгострокові відносини</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-xl font-bold text-gradient mb-2">Результат</h4>
                  <p className="text-muted-foreground">Фокусуємось на досягненні цілей</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;