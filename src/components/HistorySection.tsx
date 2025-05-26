import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HistorySection = () => {
  return (
    <section id="history" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          История России
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Crown" className="text-red-700" size={24} />
              </div>
              <CardTitle className="text-red-800">Древняя Русь</CardTitle>
              <CardDescription>IX-XIII века</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Формирование русской государственности, принятие христианства и
                развитие культуры в Киевской Руси.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Castle" className="text-yellow-700" size={24} />
              </div>
              <CardTitle className="text-red-800">Московское царство</CardTitle>
              <CardDescription>XIV-XVII века</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Объединение русских земель вокруг Москвы, формирование
                централизованного государства.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Star" className="text-blue-700" size={24} />
              </div>
              <CardTitle className="text-red-800">Российская империя</CardTitle>
              <CardDescription>XVIII-XX века</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Эпоха Петра I, расцвет русской культуры, литературы и искусства
                в имперский период.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
