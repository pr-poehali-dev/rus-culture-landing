import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Traditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-green-800 mb-6">
                Русские Традиции
              </h1>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Богатое наследие народных обычаев, праздников и обрядов,
                передаваемых из поколения в поколение
              </p>
            </div>
          </div>
        </section>

        {/* Traditions Grid */}
        <section className="py-16 bg-white/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&h=400&fit=crop"
                  alt="Масленица"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  Масленица
                </h2>
                <p className="text-gray-700 text-lg mb-4">
                  Древний славянский праздник проводов зимы и встречи весны.
                  Неделя блинов, народных гуляний и сжигания чучела Масленицы.
                </p>
                <p className="text-gray-700">
                  Традиционно отмечается за семь недель до Пасхи, каждый день
                  недели имеет свое название и особые обряды.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=400&fit=crop"
                  alt="Русские народные костюмы"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  Народные костюмы
                </h2>
                <p className="text-gray-700 text-lg mb-4">
                  Традиционная русская одежда отражает региональные особенности
                  и социальный статус. Сарафаны, кокошники, рубахи - каждый
                  элемент имеет символическое значение.
                </p>
                <p className="text-gray-700">
                  Орнаменты и узоры на одежде служили оберегами и рассказывали о
                  жизни и верованиях наших предков.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Traditions;
