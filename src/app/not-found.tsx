import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Go to Homepage
          </Link>
          
          <Link
            href="/contact"
            className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Contact Support
          </Link>
        </div>
        
        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
