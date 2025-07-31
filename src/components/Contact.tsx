import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявку відправлено!",
      description: "Ми зв'яжемося з вами найближчим часом.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">УКЛАДИ УГОДУ З </span>
            <span className="text-gradient">ДИЯВОЛАМИ</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            та отримуй найкраще на affiliate-ринку
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Зв'яжіться з нами
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Готові розпочати співпрацю? Напишіть нам, і ми обговоримо всі деталі партнерства.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-devil-red/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-devil-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <a 
                        href="mailto:traffic_devils@gmail.com"
                        className="text-devil-red hover:text-devil-red/80 transition-colors"
                      >
                        traffic_devils@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-devil-red/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-devil-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Телефон</h4>
                      <a 
                        href="tel:+380123456789"
                        className="text-devil-red hover:text-devil-red/80 transition-colors"
                      >
                        +38 (012) 345-67-89
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-devil-red/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-devil-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Адреса</h4>
                      <p className="text-muted-foreground">Київ, Україна</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Слідкуйте за нами</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="w-12 h-12 p-0">
                  <span className="text-lg">📱</span>
                </Button>
                <Button variant="outline" size="sm" className="w-12 h-12 p-0">
                  <span className="text-lg">📧</span>
                </Button>
                <Button variant="outline" size="sm" className="w-12 h-12 p-0">
                  <span className="text-lg">💬</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Надішліть нам повідомлення
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Ім'я *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-devil-red focus:ring-devil-red"
                      placeholder="Ваше ім'я"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-devil-red focus:ring-devil-red"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Компанія
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-devil-red focus:ring-devil-red"
                    placeholder="Назва компанії"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Повідомлення *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input border-border focus:border-devil-red focus:ring-devil-red resize-none"
                    placeholder="Розкажіть нам про ваш проект або питання..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  Відправити повідомлення
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="mt-6 p-4 bg-devil-red/10 rounded-lg border border-devil-red/20">
                <p className="text-sm text-muted-foreground">
                  * Обов'язкові поля. Ми відповідаємо на всі запити протягом 24 годин.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;