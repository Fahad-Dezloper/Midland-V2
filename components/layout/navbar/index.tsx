import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { FacebookIcon } from '../../../src/components/ui/facebook';
import { InstagramIcon } from '../../../src/components/ui/instagram';
import { TwitterIcon } from '../../../src/components/ui/twitter';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

// Social Media Icons
const TwitterIconn = () => (
  <TwitterIcon />
);

const FacebookIconn = () => (
  <FacebookIcon />
);

const InstagramIconn = () => (
  <InstagramIcon />
);

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <header className="w-full bg-white pt-6 overflow-hidden">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-gray-200 px-4 lg:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Left Navigation - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="btn-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/80 ease-in-out duration-200 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary text-sm font-medium">
              Contact Us
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-primary text-sm font-medium">
              Events
            </Link>
          </div>

          {/* Mobile Logo - Only visible on mobile */}
          <div className="block md:hidden">
            <Link href="/" className="flex items-center">
              <Image 
                src="/Midland.svg" 
                alt="Midland Books" 
                width={100} 
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="flex items-center space-x-2 md:hidden">
            <CartModal />
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>

          {/* Right Navigation - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/pre-order" className="text-gray-700 hover:text-primary text-sm font-medium">
              Pre-order
            </Link>
            <Link href="/track-shipment" className="text-gray-700 hover:text-primary text-sm font-medium">
              Track Shipment
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-primary text-sm font-medium">
              Login
            </Link>
            <Link href="/wishlist" className="text-gray-700 hover:text-primary text-sm font-medium">
              Wishlist
            </Link>
            <CartModal />
          </div>
        </div>
      </nav>

      {/* Logo and Search Section */}
      <div className="bg-white px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Logo - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/Midland.svg" 
                alt="Midland Books" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Search Bar - Centered on desktop, full width on mobile */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>

          {/* Desktop spacing for social icons */}
          <div className="hidden md:block w-24"></div>
        </div>

        {/* Mobile Search */}
        <div className="mt-2 md:hidden">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="bg-white border-t border-gray-200 px-4 lg:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Categories - Scrollable on mobile */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-6 md:space-x-8 min-w-max pb-1">
              <Link href="/collections/signed-books" className="text-gray-700 hover:text-primary text-sm font-medium whitespace-nowrap">
                Signed Books
              </Link>
              <Link href="/collections/bestseller" className="text-gray-700 hover:text-primary text-sm font-medium whitespace-nowrap">
                Best Seller
              </Link>
              <Link href="/collections/fiction" className="text-gray-700 hover:text-primary text-sm font-medium whitespace-nowrap">
                Fiction
              </Link>
              <Link href="/collections/non-fiction" className="text-gray-700 hover:text-primary text-sm font-medium whitespace-nowrap">
                Non - Fiction
              </Link>
              <Link href="/collections/biography" className="text-gray-700 hover:text-primary text-sm font-medium whitespace-nowrap">
                Biography
              </Link>
              <Link href="/collections/history" className="text-gray-700 hover:text-primary text-sm font-medium whitespace-nowrap">
                History
              </Link>
              <Link href="/collections/children" className="text-gray-700 hover:text-primary text-sm font-medium whitespace-nowrap">
                Children's
              </Link>
            </div>
          </div>

          {/* Social Media Icons - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center space-x-4 ml-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
              <TwitterIconn />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <FacebookIconn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
              <InstagramIconn />
            </a>
          </div>
        </div>
        
        {/* Mobile Social Media Icons */}
        <div className="flex md:hidden items-center justify-center space-x-6 pb-3 border-t border-gray-100 mt-2 pt-3">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
            <TwitterIconn />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
            <FacebookIconn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
            <InstagramIconn />
          </a>
        </div>
      </nav>
    </header>
  );
}
