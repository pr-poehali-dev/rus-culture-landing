import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-amber-800 mb-6">
                История России
              </h1>
              <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                Тысячелетняя история великой державы, ее взлеты и падения,
                героические страницы и культурное наследие
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">
              Основные исторические периоды
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
                  alt="Древняя Русь"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-amber-800 mb-3">
                  Древняя Русь (IX-XIII вв.)
                </h3>
                <p className="text-gray-700">
                  Образование первых княжеств, принятие христианства, расцвет
                  Киевской Руси и противостояние монгольскому нашествию.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=400&h=250&fit=crop"
                  alt="Московское царство"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-amber-800 mb-3">
                  Московское царство (XIV-XVII вв.)
                </h3>
                <p className="text-gray-700">
                  Объединение русских земель вокруг Москвы, свержение
                  монгольского ига, формирование централизованного государства.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=250&fit=crop"
                  alt="Российская империя"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-amber-800 mb-3">
                  Российская империя (XVIII-XX вв.)
                </h3>
                <p className="text-gray-700">
                  Реформы Петра I, расширение границ, культурный подъем, участие
                  в европейской политике.
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

export default History;
