import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20 space-y-10'>
            <h2 className="text-5xl">Page not found</h2>
            <h1 className="text-5xl">Status: <span className='text-red-600'>404</span></h1>
        </div>
    );
};

export default ErrorPage;