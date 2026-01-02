export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-yellow-400 p-4 mt-8 shadow-inner">
            <div className="container mx-auto text-center">
                <div>&copy; {new Date().getFullYear()} CompleteAutomate. All rights reserved.</div>
                <div className="mt-2">
                    <a 
                        href="https://www.youtube.com/channel/@real_vimal_menon" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 transition"
                    >
                        Subscribe to our YouTube Channel
                    </a>
                </div>
            </div>
        </footer>
    );
}
