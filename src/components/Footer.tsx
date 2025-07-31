import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Про нас', href: '#about' },
      { name: 'Партнерство', href: '#partnership' },
      { name: 'Кар\'єра', href: '#careers' },
      { name: 'Команда', href: '#team' }
    ],
    resources: [
      { name: 'Блог', href: '#blog' },
      { name: 'Кейси', href: '#cases' },
      { name: 'Навчання', href: '#education' },
      { name: 'FAQ', href: '#faq' }
    ],
    legal: [
      { name: 'Політика конфіденційності', href: '#privacy' },
      { name: 'Умови використання', href: '#terms' },
      { name: 'Договір публічної оферти', href: '#offer' }
    ]
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold text-gradient mb-6">
                TRAFFIC DEVILS
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Лідери за обсягами налитого трафіку. Невпинно задаємо тренди в affiliate-індустрії.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 hover:bg-devil-red hover:border-devil-red">
                  <span className="text-sm">📱</span>
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 hover:bg-devil-red hover:border-devil-red">
                  <span className="text-sm">📧</span>
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 hover:bg-devil-red hover:border-devil-red">
                  <span className="text-sm">💬</span>
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 hover:bg-devil-red hover:border-devil-red">
                  <span className="text-sm">🔗</span>
                </Button>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Компанія</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-devil-red transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Ресурси</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-devil-red transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Правова інформація</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-devil-red transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Traffic Devils. Всі права захищені.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">Офіси:</span>
              <div className="flex items-center space-x-4">
                <span className="text-white">🇺🇦 Україна</span>
                <span className="text-white">🇰🇿 Казахстан</span>
                <span className="text-white">🇵🇱 Польща</span>
              </div>
            </div>

            <div className="text-muted-foreground text-sm">
              <a 
                href="mailto:traffic_devils@gmail.com"
                className="hover:text-devil-red transition-colors"
              >
                traffic_devils@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-devil-red to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;