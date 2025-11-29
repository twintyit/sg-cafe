import React from 'react';

export default function AboutUsPage() {
    return (
        <div className="flex flex-col items-center text-white p-6 bg-primary-cafe min-h-[calc(100vh-64px)]">
            <h1 className="text-4xl  font-bold  mt-12">
                Über uns (About Us)
            </h1>
            <p className="mt-4 text-lg ">
                Hier finden Sie Informationen über unsere Philosophie und unser Team.
            </p>
        </div>
    );
}