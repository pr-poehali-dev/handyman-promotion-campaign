import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Package",
      title: "Погрузка грузов",
      description: "Быстрая и аккуратная погрузка товаров любого размера и веса"
    },
    {
      icon: "Truck",
      title: "Разгрузка грузов",
      description: "Профессиональная разгрузка с соблюдением всех правил безопасности"
    },
    {
      icon: "PackageOpen",
      title: "Упаковка",
      description: "Качественная упаковка хрупких и габаритных предметов"
    },
    {
      icon: "Home",
      title: "Квартирные переезды",
      description: "Комплексные услуги по переезду квартир и офисов"
    },
    {
      icon: "Wrench",
      title: "Сборка мебели",
      description: "Профессиональная сборка и разборка мебели любой сложности"
    },
    {
      icon: "Hammer",
      title: "Мелкий ремонт",
      description: "Быстрое выполнение мелких ремонтных работ по дому"
    }
  ];

  const prices = [
    { service: "Погрузка/разгрузка (1 час)", price: "от 500 ₽/час" },
    { service: "Квартирный переезд (бригада 2 чел)", price: "от 3000 ₽" },
    { service: "Сборка мебели", price: "от 800 ₽" },
    { service: "Упаковка вещей", price: "от 300 ₽/час" },
    { service: "Мелкий ремонт", price: "от 600 ₽/час" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ГрузМастер</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors font-medium">Прайс</a>
            <a href="#contact" className="hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary/30 via-white to-primary/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Профессиональные <span className="text-primary">грузчики</span> и разнорабочие
              </h1>
              <p className="text-xl text-muted-foreground">
                Быстро, качественно, недорого! Работаем 24/7. Опытная бригада готова выполнить любой объём работ.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных заказов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Работаем круглосуточно</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/1a36069a-cc13-42a6-b8c1-fc6c845f8498/files/fad07f37-7eff-4fdf-8b1c-b4b24b1f8890.jpg"
                alt="Профессиональные грузчики"
                className="rounded-2xl shadow-2xl animate-scale-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={32} />
                  <div>
                    <div className="font-bold text-lg">7 лет</div>
                    <div className="text-sm">на рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр услуг грузчиков и разнорабочих для вашего удобства
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">
              Честные и прозрачные цены без скрытых платежей
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="p-0">
              <div className="divide-y">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <Icon name="CheckCircle" size={24} className="text-primary" />
                      <span className="text-lg font-medium">{item.service}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 bg-primary/10 border-2 border-primary/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Итоговая стоимость зависит от:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Объёма и сложности работ</li>
                  <li>• Количества грузчиков в бригаде</li>
                  <li>• Этажности и наличия лифта</li>
                  <li>• Времени выполнения работ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и мы перезвоним в течение 5 минут для уточнения деталей
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-lg text-primary font-bold">+7 (900) 501-66-69</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-lg">savagefox12321@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-lg">Круглосуточно, без выходных</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Заказать звонок</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваш заказ"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="text-base"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} className="text-primary" />
                <span className="text-xl font-bold">ГрузМастер</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональные услуги грузчиков и разнорабочих с 2018 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Погрузка/разгрузка</li>
                <li>Переезды</li>
                <li>Сборка мебели</li>
                <li>Упаковка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (900) 501-66-69</li>
                <li>savagefox12321@gmail.com</li>
                <li>Вологда</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Icon name="Send" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Icon name="Phone" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 ГрузМастер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;