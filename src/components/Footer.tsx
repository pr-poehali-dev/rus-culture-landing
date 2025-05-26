import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
