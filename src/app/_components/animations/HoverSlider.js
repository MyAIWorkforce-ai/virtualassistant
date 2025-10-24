"use client";

export default function HoverSlide({ children, className }) {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div className="transition-transform duration-500 ease-out hover:translate-x-[-20%] hover:scale-110">
        
        {children}
      </div>
    </div>
  );
}
