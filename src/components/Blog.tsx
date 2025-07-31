import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Фотостоки: must have чи пуста трата часу?",
      excerpt: "Фотостоки — це онлайн-ресурси, які будуть дуже корисними за умови грамотного підходу до їх використання.",
      date: "2024-03-15",
      readTime: "5 хв читання",
      category: "Креативи",
      image: "📸"
    },
    {
      title: "Розбивки в Facebook Ads — інструмент, що допоможе зробити х3 до твоїх конверсій",
      excerpt: "Крута функція від FB, на яку варто звернути увагу медіабайєрам.",
      date: "2024-03-12",
      readTime: "7 хв читання", 
      category: "Facebook Ads",
      image: "📊"
    },
    {
      title: "Як завоювати довіру FB",
      excerpt: "Секрет успішної РК — це якісні розхідники, крео та ефективна зв'язка.",
      date: "2024-03-10",
      readTime: "6 хв читання",
      category: "Facebook Ads",
      image: "🎯"
    },
    {
      title: "Навіщо байєру ChatGPT?",
      excerpt: "Бот, який став справжнім хедлайнером обговорень представників найрізноманітніших ніш, в тому числі й affiliate-сфери.",
      date: "2024-03-08",
      readTime: "8 хв читання",
      category: "AI Tools",
      image: "🤖"
    },
    {
      title: "Як встановити FB Pixel",
      excerpt: "Кожен байєр мріє про те, щоб його зв'язка крутилася перед максимально зацікавленою аудиторією",
      date: "2024-03-05",
      readTime: "4 хв читання",
      category: "Технічні поради",
      image: "⚡"
    },
    {
      title: "Для чого байєру трекер",
      excerpt: "Для того, щоб РК приносили максимум профіту, треба детально аналізувати та оптимізувати трафік.",
      date: "2024-03-03",
      readTime: "6 хв читання",
      category: "Аналітика",
      image: "📈"
    }
  ];

  const categories = ["Всі", "Facebook Ads", "Креативи", "AI Tools", "Технічні поради", "Аналітика"];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gradient">
            Блог
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Будь в курсі всіх важливих новин в affiliate-сфері та отримуй цінні рекомендації від досвідчених байєрів TRAFFIC DEVILS
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === "Всі" ? "devil" : "outline"}
              size="sm"
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="h-48 bg-devil-red/10 flex items-center justify-center text-6xl group-hover:bg-devil-red/20 transition-colors">
                  {post.image}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-devil-red font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="text-devil-red hover:text-white hover:bg-devil-red">
                      Читати далі
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline-devil" size="lg">
            Завантажити більше статей
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20">
          <Card className="bg-card/30 backdrop-blur-sm border-border/20">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                Підпишіться на наші оновлення
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Отримуйте найсвіжіші статті та інсайди від експертів Traffic Devils прямо на вашу пошту
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваша email адреса"
                  className="flex-1 px-4 py-3 bg-input border border-border rounded-md text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-devil-red"
                />
                <Button variant="hero">
                  Підписатися
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;