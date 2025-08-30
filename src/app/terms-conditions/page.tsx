import Header from "@/components/header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            Please read these terms and conditions carefully before using our services or website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="space-y-8">

          {/* Agreement */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the website and services of KJ Accounting & Tax Services LLC
                (`Company,we,our,or us), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not
                use this service``.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Products</h3>
                  <p className="text-gray-700 mb-3">
                    We offer a variety of quality products for individuals, small businesses, and corporations.
                    All products are subject to availability and our standard terms of sale.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Services</h3>
                  <p className="text-gray-700 mb-3">
                    Our professional services include business consulting, product recommendations, and
                    customer support. Services are provided subject to separate service agreements where applicable.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Areas</h4>
                  <p className="text-gray-700 text-sm">
                    We primarily serve clients in Ontario, Canada, including Whitby, Oshawa, and the greater Ontario area.
                    Services outside this area may be available upon request and subject to additional terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orders and Payments */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Orders and Payments</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Process</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>All orders are subject to acceptance and availability</li>
                    <li>We reserve the right to refuse or cancel any order</li>
                    <li>Order confirmation will be sent via email</li>
                    <li>Prices are subject to change without notice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Accepted Methods</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Credit/Debit Cards</li>
                        <li>• Bank Transfers</li>
                        <li>• Business Checks</li>
                        <li>• Electronic Payments</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Payment due upon order</li>
                        <li>• Net 30 for approved accounts</li>
                        <li>• Late fees may apply</li>
                        <li>• Currency: Canadian Dollars (CAD)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping and Delivery */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping and Delivery</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Standard Shipping</h3>
                    <p className="text-gray-700 text-sm">5-7 business days</p>
                    <p className="text-gray-600 text-xs">$9.99 or FREE over $50</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Express Shipping</h3>
                    <p className="text-gray-700 text-sm">2-3 business days</p>
                    <p className="text-gray-600 text-xs">$19.99</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Local Delivery</h3>
                    <p className="text-gray-700 text-sm">Same/Next day</p>
                    <p className="text-gray-600 text-xs">Whitby/Oshawa area</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    Important Shipping Information
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Delivery times are estimates and not guaranteed</li>
                    <li>• Risk of loss passes to buyer upon delivery</li>
                    <li>• Shipping addresses cannot be changed after order confirmation</li>
                    <li>• Additional fees may apply for remote locations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Returns and Refunds</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Return Policy</h3>
                  <p className="text-gray-700 mb-4">
                    We want you to be completely satisfied with your purchase. Items may be returned within
                    30 days of delivery for a full refund, subject to the following conditions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Returnable Items</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Unused items in original packaging</li>
                        <li>• Items with original tags/labels</li>
                        <li>• Non-personalized products</li>
                        <li>• Items in resaleable condition</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Non-Returnable Items</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Personalized or custom items</li>
                        <li>• Perishable goods</li>
                        <li>• Items damaged by misuse</li>
                        <li>• Final sale items</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Contact Us</h4>
                        <p className="text-gray-700 text-sm">Email or call to initiate return process</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Return Authorization</h4>
                        <p className="text-gray-700 text-sm">Receive return authorization and shipping instructions</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Process Refund</h4>
                        <p className="text-gray-700 text-sm">Refund processed within 5-10 business days after receipt</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Limitations and Disclaimers</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In no event shall KJ Accounting & Tax Services LLC be liable for any indirect, incidental,
                    special, consequential, or punitive damages, including without limitation, loss of profits,
                    data, use, goodwill, or other intangible losses, resulting from your use of our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Warranty Disclaimer</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our services and products are provided "as is&quot; without warranty of any kind, either express
                    or implied, including but not limited to the implied warranties of merchantability, fitness
                    for a particular purpose, or non-infringement.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Important Notice</h4>
                  <p className="text-gray-700 text-sm">
                    Some jurisdictions do not allow the exclusion of certain warranties or the limitation of
                    liability for consequential or incidental damages, so the above limitations may not apply to you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>

              <p className="text-gray-700 mb-4">
                These Terms and Conditions are governed by and construed in accordance with the laws of
                Ontario, Canada, without regard to its conflict of law provisions.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
                <p className="text-gray-700 text-sm">
                  Any disputes arising from these terms or your use of our services will be resolved through
                  binding arbitration in Ontario, Canada, or in the courts of Ontario if arbitration is not applicable.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>

              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">KJ Accounting & Tax Services LLC</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Address:</strong> 2550 BLACKMON DR, DECATUR, GA 30033</p>
                  <p><strong>Phone:</strong> +1 (404) 259-0953</p>
                  <p><strong>Email:</strong> support@thetdsstore.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify or replace these Terms and Conditions at any time.
                If a revision is material, we will try to provide at least 30 days notice prior to any new
                terms taking effect. Your continued use of our services after any changes constitutes
                acceptance of the new terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}