import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/Footer"

export default function homepage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/scene.jpg"
          alt="Mountain landscape with tents"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg">KJ Accounting & Tax Professional Corporation</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-lg">
            “Top-quality camping equipment for every explorer.”
          </p>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 px-8 py-6 text-lg bg-transparent"
          >
            EXPLORE
          </Button>
        </div>
      </section>

      {/* Our Collection Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Collection</h2>
          <p className="text-lg text-gray-600">
            Explore our premium camping gear, from durable tents to portable cooking tools. Designed for comfort and
            reliability, our collection ensures unforgettable outdoor adventures for all explorers.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-1 lg:col-span-2">
            <Image
              src="/stove.jpg"
              alt="Camping stove with food"
              width={900}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Image
              src="/gas.jpg"
              alt="Portable camping stove"
              width={450}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <Image
              src="/powerbank.jpg"
              alt="Portable power bank"
              width={450}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <Image
              src="/Camping.jpg"
              alt="Large camping tent setup"
              width={450}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Providing High Quality Camping Essentials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/fire.jpg"
              alt="Campfire cooking scene"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">Providing high quality camping essentials</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We have been committed to providing high-quality camping essentials designed to elevate your outdoor
              experiences. Our journey began with a passion for adventure and a mission to equip fellow explorers with
              durable, reliable, and innovative gear. From rugged tents to versatile cooking equipment, our products are
              crafted to withstand the toughest terrains and make every adventure memorable.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We take pride in sourcing premium materials and offering a diverse range of camping solutions tailored to
              meet the needs of all outdoor enthusiasts. Whether you are a seasoned adventurer or a first-time camper,
              our collection is built to ensure safety, comfort, and convenience, allowing you to focus on what truly
              matters—enjoying the great outdoors.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Reach out to KJ Accounting & Tax Professional Corporation for your accounting and tax needs.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold mb-4">KJ Accounting & Tax Professional Corporation</h3>
          <p className="text-lg text-gray-700 mb-2">Khizar Javaid</p>
          <p className="text-lg text-gray-700 mb-2">152 Brownridge Place</p>
          <p className="text-lg text-gray-700 mb-2">Whitby Ontario L1P1W3</p>
          <p className="text-lg text-gray-700">
            Phone:{" "}
            <a href="tel:+12899910909" className="text-blue-600 hover:underline">
              +1 (289) 991-0909
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
