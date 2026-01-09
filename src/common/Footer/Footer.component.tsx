'use client';

import { Youtube, Mail, Github } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2">
                            <span className="text-gray-900">Complete</span>
                            <span className="text-blue-600">Automate</span>
                        </h3>
                        <p className="text-sm text-gray-600">
                            Automation solutions for modern workflows
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="text-center">
                        <h4 className="font-semibold mb-3 text-base text-gray-900">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                            <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="text-center md:text-right">
                        <h4 className="font-semibold mb-3 text-base text-gray-900">Connect</h4>
                        <div className="flex justify-center md:justify-end gap-4">
                            <a 
                                href="https://www.youtube.com/channel/@real_vimal_menon" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube size={24} />
                            </a>
                            <a 
                                href="mailto:contact@completeautomate.com" 
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={24} />
                            </a>
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
                    <div>&copy; {new Date().getFullYear()} CompleteAutomate. All rights reserved.</div>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
