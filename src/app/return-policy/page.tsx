import Header from "@/components/header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { RotateCcw, CheckCircle, XCircle, Clock, Phone } from "lucide-react"

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <RotateCcw className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Return & Refund Policy</h1>
          <p className="text-lg text-gray-600">
            We want you to be completely satisfied with your purchase. Learn about our hassle-free return process.
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
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                At KJACCO, your satisfaction is our priority. We stand behind the 
                quality of our products and offer a comprehensive return policy to ensure you're completely 
                happy with your purchase.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">14-Day Return Window</h3>
                <p className="text-gray-700 text-sm">
                  Items can be returned within 14 days of delivery, provided they are unworn, unused, and in original condition.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Return Eligibility */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Eligibility</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Returnable Items</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                      <span>Items in original, unopened packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                      <span>Products with all original tags and labels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                      <span>Unused items in resaleable condition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                      <span>Items with original accessories and manuals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                      <span>Non-personalized products</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">Non-Returnable Items</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2" />
                      <span>Gift cards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2" />
                      <span>Clearance items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2" />
                      <span>Custom-designed or personalized products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2" />
                      <span>Items returned after 14 days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Process */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return an Item</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        Email us at support@thetdsstore.com or call +1 (404) 259-0953 to initiate your return.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Include:</strong> Order number, item(s) to return, reason for return
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Get Return Authorization</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        We'll provide you with a Return Authorization (RA) number and return shipping instructions.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Timeline:</strong> RA issued within 24 hours during business days
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Package & Ship</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        Securely package the item(s) with the RA number clearly marked and ship to our returns center.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Note:</strong> Customer responsible for return shipping costs unless item is defective
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Processing & Refund</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        After inspection, refunds are processed within 5–7 business days to the original payment method.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Refund method:</strong> Original payment method used for purchase
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund Information */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Information</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Refund Timeline</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Credit Cards:</span>
                        <span className="font-medium">3-5 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Debit Cards:</span>
                        <span className="font-medium">5-7 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Bank Transfer:</span>
                        <span className="font-medium">5-10 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">PayPal:</span>
                        <span className="font-medium">1-3 business days</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">What's Refunded</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Full product price</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Original shipping costs (if item is defective)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Applicable taxes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <span>Return shipping costs (unless defective)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Partial Refunds</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    In some cases, partial refunds may be issued for:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Items with obvious signs of use</li>
                    <li>• Items missing parts or accessories</li>
                    <li>• Items returned significantly after the 30-day window</li>
                    <li>• Items not in original packaging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exchanges */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchanges</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  We currently process exchanges as returns and new orders. This ensures you get the fastest 
                  service and aren't charged twice.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Exchange Process</h3>
                  <ol className="text-gray-700 text-sm space-y-1">
                    <li>1. Return the original item following our return process</li>
                    <li>2. Place a new order for the replacement item</li>
                    <li>3. Once we receive your return, we'll process the refund</li>
                    <li>4. Your new order will ship according to standard processing times</li>
                  </ol>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Defective Item Exchanges</h4>
                  <p className="text-gray-700 text-sm">
                    If you received a defective item, we'll expedite the exchange process and cover all 
                    shipping costs. Contact us immediately for priority handling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Circumstances */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Circumstances</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 text-red-800">Damaged or Defective Items</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If you receive a damaged or defective item, please contact us immediately:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Take photos of the damage/defect</li>
                    <li>• Contact us within 48 hours of delivery</li>
                    <li>• We'll provide a prepaid return label</li>
                    <li>• Priority processing for replacement or refund</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 text-purple-800">Wrong Item Received</h3>
                  <p className="text-gray-700 text-sm">
                    If you received the wrong item due to our error, we'll cover all return shipping costs 
                    and expedite the correct item to you at no additional charge.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 text-orange-800">Bulk/Wholesale Returns</h3>
                  <p className="text-gray-700 text-sm">
                    Bulk orders may have different return terms. Please contact our wholesale team 
                    for specific return policies on large quantity orders.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Return Support</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our customer service team is here to help with your return. Contact us for assistance:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Phone:</strong> +1 (404) 259-0953</p>
                    <p><strong>Email:</strong> support@thetdsstore.com</p>
                    <p><strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Return Address</h3>
                  <div className="text-gray-700">
                    <p className="font-medium">KJ Accounting & Tax Services LLC</p>
                    <p>Returns Department</p>
                    <p>152 Brownridge Place</p>
                    <p>Whitby, Ontario L1P1W3</p>
                    <p>Canada</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                    <p className="text-gray-700 text-sm">
                      We respond to all return inquiries within 24 hours during business days. 
                      For urgent matters, please call during business hours.
                    </p>
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