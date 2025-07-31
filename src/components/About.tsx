import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const offices = [
    { country: "Україна", flag: "🇺🇦", id: "01" },
    { country: "Казахстан", flag: "🇰🇿", id: "02" },
    { country: "Польща", flag: "🇵🇱", id: "03" },
  ];

  const awards = [
    {
      title: "Affiliate Space Awards",
      achievements: [
        "AFFILIATE OF THE YEAR [x2]",
        "THE BEST SPEAKER [x2]",
        "THE BEST AFFILIATE OF THE YEAR"
      ]
    },
    {
      title: "KINZA AWARDS 2021",
      achievements: [
        "Найкраща арбітражна команда",
        "Олександр Слобоженко — спікер року"
      ]
    },
    {
      title: "SiGMA Europe",
      achievements: [
        "BEST EAST EUROPE AFFILIATE 2023",
        "BEST CIS AFFILIATE OF THE YEAR 2022"
      ]
    },
    {
      title: "World Traffic Awards 2022",
      achievements: [
        "BEST SERVICE TOOL",
        "BEST MEDIA BUYING TEAM",
        "BEST MARKETING INFLUENCER"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Stats */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-gradient">
            Про нашу компанію
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-devil-red" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">100+</div>
                <p className="text-muted-foreground">Людей у компанії</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-devil-red" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <p className="text-muted-foreground">Роки роботи на найвищому рівні</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-devil-red" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">3</div>
                <p className="text-muted-foreground">Офіси у різних країнах</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-devil-red/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-devil-red" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                <p className="text-muted-foreground">Нагород на арбітражних конференціях</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Offices */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Офіси у різних країнах</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.id} className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Badge variant="outline" className="mb-4 text-devil-red border-devil-red">
                    [{office.id}]
                  </Badge>
                  <div className="text-6xl mb-4">{office.flag}</div>
                  <h4 className="text-xl font-semibold">{office.country}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Нагороди та досягнення</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <Badge variant="outline" className="mb-4 text-devil-red border-devil-red">
                    {award.title}
                  </Badge>
                  <ul className="space-y-2">
                    {award.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-devil-red rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;