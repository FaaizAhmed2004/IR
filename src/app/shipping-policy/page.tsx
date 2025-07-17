import Header from "@/components/header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Package, Clock, MapPin, AlertCircle } from "lucide-react"

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-lg text-gray-600">
            Learn about our shipping options, delivery times, and fulfillment process.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="space-y-8">
          
          {/* Overview */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Shipping Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                KJ Accounting & Tax Services LLC is committed to delivering your orders quickly and safely. 
                We offer multiple shipping options to meet your needs and serve customers primarily in Ontario, 
                Canada. All orders are processed and shipped from our facility in Whitby, Ontario.
              </p>
            </CardContent>
          </Card>

          {/* Shipping Options */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Options & Rates</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Shipping</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">$9.99</div>
                  <div className="text-sm text-gray-600 mb-3">FREE on orders over $50</div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p><strong>Delivery:</strong> 5-7 business days</p>
                    <p><strong>Coverage:</strong> Ontario-wide</p>
                    <p><strong>Tracking:</strong> Included</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Express Shipping</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">$19.99</div>
                  <div className="text-sm text-gray-600 mb-3">Expedited delivery</div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p><strong>Delivery:</strong> 2-3 business days</p>
                    <p><strong>Coverage:</strong> Major cities</p>
                    <p><strong>Tracking:</strong> Real-time updates</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Delivery</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-2">$5.99</div>
                  <div className="text-sm text-gray-600 mb-3">Same/next day available</div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p><strong>Delivery:</strong> Same or next day</p>
                    <p><strong>Coverage:</strong> Whitby & Oshawa</p>
                    <p><strong>Tracking:</strong> SMS notifications</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Free Shipping Qualification</h4>
                    <p className="text-gray-700 text-sm">
                      Free standard shipping applies to orders totaling $50 or more (before taxes) 
                      within our standard delivery areas in Ontario.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Processing</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Standard Orders</h4>
                      <p className="text-gray-700 text-sm mb-2">1-2 business days processing</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Order verification and payment processing</li>
                        <li>• Inventory allocation and picking</li>
                        <li>• Quality check and packaging</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Custom/Bulk Orders</h4>
                      <p className="text-gray-700 text-sm mb-2">3-5 business days processing</p>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Custom order review and confirmation</li>
                        <li>• Special handling and preparation</li>
                        <li>• Additional quality assurance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Order Processing</h4>
                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-700">Sunday: Closed</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Shipping Cutoff</h4>
                        <p className="text-gray-700">Orders placed before 2:00 PM (EST) on business days</p>
                        <p className="text-gray-700">will be processed the same day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Areas */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Delivery Areas</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 text-green-800">Primary Zone</h3>
                    <p className="text-sm text-gray-700 mb-2">Whitby & Oshawa</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Same/next day delivery available</li>
                      <li>• Local delivery option</li>
                      <li>• No additional surcharges</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 text-blue-800">Secondary Zone</h3>
                    <p className="text-sm text-gray-700 mb-2">Greater Toronto Area</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Standard shipping rates apply</li>
                      <li>• 2-5 business day delivery</li>
                      <li>• Express options available</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 text-purple-800">Extended Zone</h3>
                    <p className="text-sm text-gray-700 mb-2">Rest of Ontario</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Standard shipping available</li>
                      <li>• 5-7 business day delivery</li>
                      <li>• Remote area fees may apply</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Outside Ontario</h4>
                  <p className="text-gray-700 text-sm">
                    We can arrange shipping to other Canadian provinces for specific products. 
                    Additional shipping costs and extended delivery times will apply. 
                    Please contact us for a custom shipping quote.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tracking & Delivery */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tracking & Delivery</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Tracking</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Order Confirmation</h4>
                        <p className="text-gray-700 text-sm">Email confirmation with order details</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Processing Update</h4>
                        <p className="text-gray-700 text-sm">Notification when order is being prepared</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Shipping Notification</h4>
                        <p className="text-gray-700 text-sm">Tracking number and carrier information</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Delivery Confirmation</h4>
                        <p className="text-gray-700 text-sm">Confirmation when package is delivered</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Successful Delivery</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Signature may be required</li>
                        <li>• Safe location delivery available</li>
                        <li>• Delivery confirmation sent</li>
                        <li>• Photo proof when applicable</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Delivery Issues</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Multiple delivery attempts</li>
                        <li>• Hold at depot option</li>
                        <li>• Redelivery scheduling</li>
                        <li>• Customer notification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Circumstances */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Special Circumstances</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Weather Delays</h3>
                  <p className="text-gray-700 text-sm">
                    Severe weather conditions may cause shipping delays. We will notify customers of any 
                    significant delays and provide updated delivery estimates.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Holiday Shipping</h3>
                  <p className="text-gray-700 text-sm">
                    During holiday periods, processing and delivery times may be extended. 
                    We recommend placing orders early to ensure timely delivery.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Address Changes</h3>
                  <p className="text-gray-700 text-sm">
                    Shipping addresses cannot be changed once an order has been processed. 
                    Please ensure your address is correct before completing your order.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Damaged Packages</h3>
                  <p className="text-gray-700 text-sm">
                    If your package arrives damaged, please contact us immediately with photos. 
                    We will work with the carrier to resolve the issue and arrange replacement if necessary.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Support</h2>
              
              <p className="text-gray-700 mb-4">
                If you have questions about shipping or need assistance with your order, please contact us:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">KJ Accounting & Tax Services LLC</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p><strong>Phone:</strong> +1 (289) 991-0909</p>
                    <p><strong>Email:</strong> shipping@kjaccounting.ca</p>
                  </div>
                  <div>
                    <p><strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}