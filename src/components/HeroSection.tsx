import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-red-800 mb-6 animate-fade-in">
            Русская Культура
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Погрузитесь в богатое наследие России — от древних традиций до
            величайших произведений искусства
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3"
          >
            <Icon name="BookOpen" className="mr-2" />
            Начать путешествие
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-red-700 text-red-700 hover:bg-red-50 px-8 py-3"
          >
            <Icon name="Heart" className="mr-2" />О проекте
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
