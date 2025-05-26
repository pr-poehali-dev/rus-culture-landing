import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-700">Русская Культура</h1>
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              Главная
            </a>
            <a
              href="/history"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              История
            </a>
            <a
              href="/traditions"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              Традиции
            </a>
            <a
              href="/arts"
              className="text-gray-700 hover:text-red-700 transition-colors"
            >
              Искусство
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
