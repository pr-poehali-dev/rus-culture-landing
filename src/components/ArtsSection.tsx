import Icon from "@/components/ui/icon";

const ArtsSection = () => {
  const writers = [
    {
      name: "Лев Толстой",
      works: '"Война и мир", "Анна Каренина"',
    },
    {
      name: "Фёдор Достоевский",
      works: '"Преступление и наказание", "Братья Карамазовы"',
    },
    {
      name: "Александр Пушкин",
      works: '"Евгений Онегин", "Капитанская дочка"',
    },
  ];

  const painters = [
    {
      name: "Иван Айвазовский",
      description: 'Мастер морских пейзажей, создатель "Девятого вала"',
      icon: "Palette",
      colorClass: "from-red-50 to-yellow-50",
      iconColor: "text-red-700",
    },
    {
      name: "Илья Репин",
      description: 'Автор "Бурлаков на Волге" и "Запорожцев"',
      icon: "Brush",
      colorClass: "from-blue-50 to-purple-50",
      iconColor: "text-blue-700",
    },
  ];

  return (
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
              {writers.map((writer, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <Icon name="Book" className="text-red-700" size={24} />
                  <div>
                    <h4 className="font-semibold">{writer.name}</h4>
                    <p className="text-gray-600 text-sm">{writer.works}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-6">Живопись</h3>
            <div className="space-y-4">
              {painters.map((painter, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gradient-to-r ${painter.colorClass} rounded-xl`}
                >
                  <Icon
                    name={painter.icon as any}
                    className={`${painter.iconColor} mb-3`}
                    size={32}
                  />
                  <h4 className="font-semibold mb-2">{painter.name}</h4>
                  <p className="text-gray-600">{painter.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtsSection;
