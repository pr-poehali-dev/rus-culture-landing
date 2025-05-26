import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-700">
              Русская Культура
            </h1>
            <div className="hidden md:flex space-x-8">
              <a
                href="#hero"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                Главная
              </a>
              <a
                href="#history"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                История
              </a>
              <a
                href="#traditions"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                Традиции
              </a>
              <a
                href="#arts"
                className="text-gray-700 hover:text-red-700 transition-colors"
              >
                Искусство
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* History Section */}
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
                  Формирование русской государственности, принятие христианства
                  и развитие культуры в Киевской Руси.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Castle" className="text-yellow-700" size={24} />
                </div>
                <CardTitle className="text-red-800">
                  Московское царство
                </CardTitle>
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
                <CardTitle className="text-red-800">
                  Российская империя
                </CardTitle>
                <CardDescription>XVIII-XX века</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Эпоха Петра I, расцвет русской культуры, литературы и
                  искусства в имперский период.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section id="traditions" className="py-16 px-6 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Народные традиции
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🥞</div>
              <h3 className="font-bold text-red-800 mb-2">Масленица</h3>
              <p className="text-gray-600 text-sm">
                Проводы зимы с блинами и народными гуляниями
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🪆</div>
              <h3 className="font-bold text-red-800 mb-2">Матрёшка</h3>
              <p className="text-gray-600 text-sm">
                Символ России и народного творчества
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="font-bold text-red-800 mb-2">Балет</h3>
              <p className="text-gray-600 text-sm">
                Большой театр и русская балетная школа
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="font-bold text-red-800 mb-2">Народные песни</h3>
              <p className="text-gray-600 text-sm">
                Богатое музыкальное наследие
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arts Section */}
      <section id="arts" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Искусство и литература
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                Великие писатели
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Icon name="Book" className="text-red-700" size={24} />
                  <div>
                    <h4 className="font-semibold">Лев Толстой</h4>
                    <p className="text-gray-600 text-sm">
                      "Война и мир", "Анна Каренина"
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Icon name="Book" className="text-red-700" size={24} />
                  <div>
                    <h4 className="font-semibold">Фёдор Достоевский</h4>
                    <p className="text-gray-600 text-sm">
                      "Преступление и наказание", "Братья Карамазовы"
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Icon name="Book" className="text-red-700" size={24} />
                  <div>
                    <h4 className="font-semibold">Александр Пушкин</h4>
                    <p className="text-gray-600 text-sm">
                      "Евгений Онегин", "Капитанская дочка"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-6">Живопись</h3>
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl">
                  <Icon
                    name="Palette"
                    className="text-red-700 mb-3"
                    size={32}
                  />
                  <h4 className="font-semibold mb-2">Иван Айвазовский</h4>
                  <p className="text-gray-600">
                    Мастер морских пейзажей, создатель "Девятого вала"
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <Icon name="Brush" className="text-blue-700 mb-3" size={32} />
                  <h4 className="font-semibold mb-2">Илья Репин</h4>
                  <p className="text-gray-600">
                    Автор "Бурлаков на Волге" и "Запорожцев"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Русская Культура</h3>
          <p className="text-gray-400 mb-6">
            Сохраняем и передаём культурное наследие России
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Heart" className="text-red-500" size={24} />
            <Icon name="Star" className="text-yellow-500" size={24} />
            <Icon name="Crown" className="text-yellow-500" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
