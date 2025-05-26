import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Arts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-purple-800 mb-6">
                Русское Искусство
              </h1>
              <p className="text-xl text-purple-700 max-w-3xl mx-auto">
                От древних икон до современных шедевров - искусство, которое
                покорило весь мир
              </p>
            </div>
          </div>
        </section>

        {/* Arts Categories */}
        <section className="py-16 bg-white/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop"
                  alt="Русская живопись"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">
                    Живопись
                  </h3>
                  <p className="text-gray-700">
                    Репин, Суриков, Васнецов - великие мастера, создавшие
                    уникальный стиль русской реалистической живописи.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                  alt="Русская архитектура"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">
                    Архитектура
                  </h3>
                  <p className="text-gray-700">
                    Храмы с золотыми куполами, деревянное зодчество, дворцовые
                    ансамбли - архитектурные жемчужины России.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                  alt="Народные промыслы"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">
                    Народные промыслы
                  </h3>
                  <p className="text-gray-700">
                    Хохлома, гжель, дымковская игрушка - традиционные ремесла,
                    ставшие символами русской культуры.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Arts;
