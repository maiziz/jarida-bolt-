import { Bell, Menu, Search, User } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">إدارة المناقصات</h1>
            </div>
            <div className="hidden sm:mr-6 sm:flex sm:space-x-8">
              <a className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                لوحة التحكم
              </a>
              <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                المناقصات
              </a>
              <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                التقارير
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">بحث</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="البحث في المناقصات"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="ml-3 relative p-1 rounded-full hover:bg-gray-50 focus:outline-none"
            >
              <Bell className="h-6 w-6" />
            </Button>
            <div className="ml-3 relative">
              <Button
                variant="outline"
                className="relative p-1 rounded-full hover:bg-gray-50 focus:outline-none"
              >
                <User className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}