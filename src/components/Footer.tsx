import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@academia.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 University Ave, City, State</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Programs</a></li>
                <li><a href="#" className="hover:text-blue-400">Admissions</a></li>
                <li><a href="#" className="hover:text-blue-400">Campus Life</a></li>
                <li><a href="#" className="hover:text-blue-400">Research</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Management</h3>
              <ul className="space-y-2">
                <li>Principal</li>
                <li>Vice Principal</li>
                <li>Dean of Students</li>
                <li>Department Heads</li>
                <li>Administrative Staff</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
             <p>© {new Date().getFullYear()} Academia. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer