"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { useCart } from "@/contexts/CartContext"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ShoppingBag } from "lucide-react"

export default function ContactPage() {
  const { state } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
    includeCart: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for contacting THETDSSTORE LLC. We'll get back to you within 24 hours regarding your treasury service inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "general",
                    message: "",
                    includeCart: false
                  })
                }}
                className="bg-green-700 hover:bg-green-800 text-white"
              >
                Send Another Message
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                Return to Home
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-800 to-black py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            Contact THETDSSTORE LLC for professional IRS Department of Treasury services and support.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Get in Touch</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <a href="mailto:support@thetdsstore.com" className="text-green-400 hover:underline">
                        support@thetdsstore.com                    </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-700 mt-1" />
                    <div>
                      <div className="font-medium text-white">IRS Department of Treasury</div>
                      <div className="text-gray-300">
                        Internal Revenue Service<br />
                        Cincinnati, OH 45999-0023
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-800 mt-1" />
                    <div>
                      <div className="font-medium text-white">THETDSSTORE LLC</div>
                      <div className="text-gray-300">
                        FARHAN SULTAN MBR<br />
                        2550 BLACKMON DR<br />
                        DECATUR, GA 30033
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium text-white">Service Hours</div>
                      <div className="text-gray-300 text-sm">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: By Appointment<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-700 rounded-full" />
                    <span>Decatur, Georgia (Headquarters)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span>Greater Atlanta Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-800 rounded-full" />
                    <span>Nationwide Treasury Services</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  We provide IRS Department of Treasury services nationwide.
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    Email: support@thetdsstore.com
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Treasury Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="general">General Treasury Inquiry</option>
                        <option value="tax">Tax Services</option>
                        <option value="compliance">Compliance Services</option>
                        <option value="business">Business Treasury Services</option>
                        <option value="government">Government Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="Please describe your treasury service inquiry or requirements..."
                    />
                  </div>

                  {/* Cart Integration */}
                  {state.itemCount > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <ShoppingBag className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-gray-900">
                          Include Cart Items ({state.itemCount} items)
                        </span>
                      </div>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="includeCart"
                          checked={formData.includeCart}
                          onChange={handleInputChange}
                          className="rounded"
                        />
                        <span className="text-sm text-gray-700">
                          Include my current cart items in this inquiry (Total: ${state.total.toFixed(2)})
                        </span>
                      </label>
                      {formData.includeCart && (
                        <div className="mt-3 text-sm text-gray-600">
                          <div className="font-medium mb-1">Cart Items:</div>
                          {state.items.map(item => (
                            <div key={item.id} className="flex justify-between">
                              <span>{item.name} (x{item.quantity})</span>
                              <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-700 hover:bg-green-800 text-white px-8 py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <div className="font-medium">Interactive Map</div>
                  <div className="text-sm">Google Maps integration would go here</div>
                  <div className="text-xs mt-2">2550 BLACKMON DR, DECATUR, GA 30033</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What are your response times?</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to all treasury service inquiries within 24 hours during business days.
                  Urgent tax matters are prioritized and may receive faster responses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer business packages?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we offer comprehensive business treasury service packages.
                  Contact us with your requirements for a custom service plan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What services do you provide?</h3>
                <p className="text-gray-600 text-sm">
                  We provide comprehensive IRS Department of Treasury services including tax preparation,
                  compliance services, and government regulatory assistance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you serve clients nationwide?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, our IRS Department of Treasury services are available nationwide.
                  We serve clients across all states with professional treasury solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}