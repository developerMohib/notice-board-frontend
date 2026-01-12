import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center py-2 mt-4">
                <p className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Nebs Tech. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;