import Image from 'next/image';
import { Clock3, Leaf, ShieldCheck, Star, Truck, Instagram, Mail, MapPin } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { featuredMenu, testimonials } from '@/data/menu';

const gallery = featuredMenu.map((i) => i.image);

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Navbar />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-16 pt-28 md:grid-cols-2 md:pt-36">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Modern F&B Brand</p>
          <h1 className="font-serif text-4xl font-bold md:text-6xl">Delicious Food, Made With Love</h1>
          <p className="text-stone-600 dark:text-stone-300">Ayna Food menghadirkan makanan & minuman estetik dengan rasa homemade, fresh, dan premium untuk momen terbaikmu.</p>
          <div className="flex gap-3">
            <a className="rounded-full bg-orangeSoft px-5 py-3 font-medium text-white transition hover:scale-105" href="#contact">Order Now</a>
            <a className="glass rounded-full px-5 py-3 font-medium transition hover:scale-105" href="#menu">View Menu</a>
          </div>
        </div>
        <div className="glass relative h-80 overflow-hidden rounded-3xl md:h-[460px]">
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Ayna Food Hero" fill className="object-cover" />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold">About Ayna Food</h2>
        <p className="mt-4 max-w-3xl text-stone-600 dark:text-stone-300">Ayna Food adalah brand F&B modern yang mengutamakan kualitas bahan, homemade taste, proses fresh & hygienic, serta menu yang cocok untuk keluarga dan anak muda pecinta kuliner.</p>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold">Featured Menu</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredMenu.map((item) => (
            <article key={item.name} className="glass group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48"><Image src={item.image} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-110" /></div>
              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between"><h3 className="font-semibold">{item.name}</h3><span className="font-semibold text-orange-600">{item.price}</span></div>
                <p className="text-sm text-stone-600 dark:text-stone-300">{item.description}</p>
                <p className="flex items-center gap-1 text-sm"><Star className="fill-orange-400 text-orange-400" size={14} /> {item.rating}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold">Why Choose Us</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { icon: Leaf, label: 'Fresh Ingredients' },
            { icon: Truck, label: 'Fast Delivery' },
            { icon: ShieldCheck, label: 'Hygienic Process' },
            { icon: Clock3, label: 'Best Taste' }
          ].map(({ icon: Icon, label }) => <div key={label} className="glass rounded-2xl p-5 text-center"><Icon className="mx-auto mb-3 text-orangeSoft" /><p className="font-medium">{label}</p></div>)}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold">Testimonials</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{testimonials.map((t) => <div key={t.name} className="glass rounded-2xl p-5"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-700">{t.avatar}</div><p className="text-sm text-stone-600 dark:text-stone-300">“{t.text}”</p><p className="mt-3 font-semibold">{t.name}</p></div>)}</div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold">Instagram Gallery</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">{gallery.map((src, idx) => <div key={idx} className="glass relative h-36 overflow-hidden rounded-xl md:h-48"><Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover" /></div>)}</div>
        <a href="https://instagram.com/aynafood.id" target="_blank" className="mt-6 inline-flex items-center gap-2 rounded-full bg-orangeSoft px-5 py-3 font-medium text-white"><Instagram size={16} /> Follow Us on Instagram</a>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-3xl font-semibold">Contact</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <a className="glass rounded-xl p-4" href="https://wa.me/6281234567890">WhatsApp: +62 812-3456-7890</a>
          <a className="glass rounded-xl p-4" href="https://instagram.com/aynafood.id">Instagram: @aynafood.id</a>
          <div className="glass flex items-center gap-2 rounded-xl p-4"><MapPin size={16} /> Jakarta, Indonesia</div>
          <div className="glass flex items-center gap-2 rounded-xl p-4"><Mail size={16} /> hello@aynafood.id</div>
        </div>
      </section>

      <footer className="border-t border-stone-200/50 py-8 text-center text-sm dark:border-stone-700/50">
        <p>© {new Date().getFullYear()} Ayna Food. Crafted with love.</p>
      </footer>
    </main>
  );
}
