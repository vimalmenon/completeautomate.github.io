'use client';

import { Youtube, Mail, Github } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-yellow-400 border-t border-yellow-400/30 mt-auto">
            <div className="container mx-auto px-4 py-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2">
                            <span className="text-yellow-400">Complete</span>
                            <span className="text-red-500"> Automate</span>
                        </h3>
                        <p className="text-sm text-gray-400">
                            Automation solutions for modern workflows
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="text-center">
                        <h4 className="font-semibold mb-3 text-yellow-400">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <a href="/" className="text-gray-400 hover:text-yellow-400 transition">Home</a>
                            <a href="/services" className="text-gray-400 hover:text-yellow-400 transition">Services</a>
                            <a href="/about" className="text-gray-400 hover:text-yellow-400 transition">About</a>
                            <a href="/contact" className="text-gray-400 hover:text-yellow-400 transition">Contact</a>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="text-center md:text-right">
                        <h4 className="font-semibold mb-3 text-yellow-400">Connect</h4>
                        <div className="flex justify-center md:justify-end gap-4">
                            <a 
                                href="https://www.youtube.com/channel/@real_vimal_menon" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition"
                                aria-label="YouTube"
                            >
                                <Youtube size={24} />
                            </a>
                            <a 
                                href="mailto:contact@completeautomate.com" 
                                className="text-gray-400 hover:text-yellow-400 transition"
                                aria-label="Email"
                            >
                                <Mail size={24} />
                            </a>
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-yellow-400/20 my-6"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div>&copy; {new Date().getFullYear()} CompleteAutomate. All rights reserved.</div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
                        <a href="#terms" className="hover:text-yellow-400 transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
