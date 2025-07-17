import Header from "@/components/header"
import Footer from "@/components/Footer"

export  function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About KJ Accounting & Tax Services LLC</h1>

                <div className="space-y-6">
                    <p className="text-lg text-gray-700">
                        KJ Accounting & Tax Services LLC is your trusted partner for professional business solutions
                        and quality products across Ontario.
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-700">
                            We provide individuals, small businesses, and corporations with reliable, high-quality
                            products and exceptional professional service. Based in Whitby and serving the greater
                            Ontario area including Oshawa.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership</h2>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Khizar Javaid</h3>
                            <p className="text-blue-600 font-medium mb-4">Founder & Principal</p>
                            <p className="text-gray-700">
                                With over 5 years of experience in business operations and client service,
                                Khizar brings dedication to serving clients across Ontario.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                        <div className="space-y-2">
                            <p><strong>Address:</strong> 152 Brownridge Place, Whitby, Ontario L1P1W3</p>
                            <p><strong>Phone:</strong> +1 (289) 991-0909</p>
                            <p><strong>Email:</strong> info@kjaccounting.ca</p>
                            <p><strong>Service Areas:</strong> Oshawa, Whitby, and Ontario</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default AboutPage