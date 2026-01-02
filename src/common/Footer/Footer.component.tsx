export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-yellow-400 p-4 mt-8 shadow-inner">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} CompleteAutomate. All rights reserved.
            </div>
        </footer>
    );
}
