import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className='h-screen w-screen'>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}