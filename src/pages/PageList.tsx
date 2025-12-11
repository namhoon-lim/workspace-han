import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

const PageList = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">전체 페이지 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors bg-white shadow-sm"
          >
            <h2 className="font-semibold text-lg mb-1 break-all">{route.title || route.path}</h2>
            <p className="text-sm text-gray-500 font-mono break-all">{route.path}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PageList;
