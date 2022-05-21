import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="flex items-center justify-center mt-20">
                <div className="w-16 h-16 border-b-2 border-secondary rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;