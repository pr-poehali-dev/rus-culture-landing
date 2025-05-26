const TraditionsSection = () => {
  const traditions = [
    {
      emoji: "🥞",
      title: "Масленица",
      description: "Проводы зимы с блинами и народными гуляниями",
    },
    {
      emoji: "🪆",
      title: "Матрёшка",
      description: "Символ России и народного творчества",
    },
    {
      emoji: "🎭",
      title: "Балет",
      description: "Большой театр и русская балетная школа",
    },
    {
      emoji: "🎵",
      title: "Народные песни",
      description: "Богатое музыкальное наследие",
    },
  ];

  return (
    <section id="traditions" className="py-16 px-6 bg-red-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Народные традиции
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traditions.map((tradition, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{tradition.emoji}</div>
              <h3 className="font-bold text-red-800 mb-2">{tradition.title}</h3>
              <p className="text-gray-600 text-sm">{tradition.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionsSection;
