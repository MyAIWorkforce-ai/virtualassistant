import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Australia's Best AI Virtual Receptionist | VirtualAssistant.com.au",
  description: "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
  keywords: "best ai virtual receptionist australia, top virtual receptionist service, 24/7 ai call answering australia, ai receptionist for small business, booking automation australia, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         {/* Google Tag Manager */}
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDM9BTM7');</script>
 {/* End Google Tag Manager */}

          {/* Microsoft Clarity (head) */}
        <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ublhev30pz");
</script>
        {/* End Microsoft Clarity */}
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

{/* Google Tag Manager (noscript) */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDM9BTM7"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 {/* End Google Tag Manager (noscript) */}
        
        <Navbar/>
    {children}
    <Footer/>
      </body>
    </html>
  );
}
