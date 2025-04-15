// app/layout.js

import Navbar from '@/component/Navbar';
import './globals.css';
import Footer from '@/component/Footer';

export const metadata = {
  title: 'MBA ROI - Best MBA Colleges in India',
  description: 'Explore top MBA colleges with the best ROI',
  keywords: 'MBA, ROI, Top B-Schools',
};

export default function RootLayout({ children }) {
  const siteurl = "https://mbaroi.in/";

  return (
    <html lang="en">
      <head /> 
      <body>
        <Navbar/>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSZGZ8B"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
