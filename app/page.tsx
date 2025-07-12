import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <button className="btn-primary">Primary</button>
<button className="btn-cta">Call to Action</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-accent">Accent</button>
<button className="btn-muted">Muted</button>

      <Footer />
    </>
  );
}
