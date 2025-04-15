'use client';
import { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaHome, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="">
        <div className=' flex justify-between max-w-7xl mx-auto py-3'>
        <a href="/" className="text-2xl font-bold">
            <span className="text-black">MBA</span><span className="text-red-600">ROI</span>.IN
          </a>

        <div className="hidden lg:flex items-center space-x-4">
          
          <a href="#" className="text-sm font-semibold flex items-center space-x-1">
            <FaUser className="text-black" />
            <span className="text-black">LOGIN/SIGN UP</span>
          </a>
        </div>
        </div>
    <div className='bg-[#212a31] text-white'>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 ">
        {/* Logo */}
        <div className="flex items-center justify-evenly gap-4 p-2">
          

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-evenly space-x-4">
            <button className="bg-red-600 p-2 rounded-sm">
              <FaHome />
            </button>
            <Dropdown label="MBA Entrance Exams" items={["CAT", "XAT", "MAT"]} />
            <Dropdown label="GD & PI" items={["Tips", "Questions"]} />
            <Dropdown label="MBA Colleges" items={["Top Colleges", "By State"]} />
            <a href="#">Articles</a>
            <a href="#">IIM Info</a>
            <a href="#">MBA Tools</a>
            
          </nav>
          <input type="text" placeholder="Search here..." className="text-black bg-white px-2 py-1 text-sm rounded" />
        </div>

        {/* Search + Login */}
        
        <button className="lg:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Menu Toggle */}
        
      </div>
      
</div>
      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-black w-full h-screen fixed top-0 left-0 z-40 p-4 overflow-y-auto">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <a href="/" className="text-2xl font-bold">
              MBA<span className="text-red-600">ROI</span>.IN
            </a>
            <button onClick={() => setMobileOpen(false)}><FaTimes /></button>
          </div>

          {/* Mobile Nav Items */}
          <div className="space-y-2">
            <MobileMenuItem icon={<FaHome />} label="Home" />
            <MobileMenuDropdown label="MBA" subItems={["General MBA", "Executive MBA"]} />
            <MobileMenuDropdown label="MBA Entrance Exams" subItems={["CAT", "XAT", "MAT"]} />
            <MobileMenuDropdown label="GD & PI" subItems={["Tips", "Questions"]} />
            <MobileMenuDropdown label="MBA Colleges" subItems={["Top Colleges", "By State"]} />
            <MobileMenuItem label="Articles" />
            <MobileMenuItem label="IIM Info" />
            <MobileMenuItem label="MBA Tools" />
            <input type="text" placeholder="Search here..." className="w-full border p-2 mt-2" />
          </div>
        </div>
      )}
    </header>
  );
}

// Desktop Dropdown
function Dropdown({ label, items }) {
  return (
    <div className="group relative">
      <button className="flex items-center space-x-1">
        <span>{label}</span>
        <FaChevronDown className="text-xs mt-1" />
      </button>
      <div className="absolute hidden group-hover:block bg-white text-black mt-0 shadow-lg rounded w-48 z-20">
        {items.map((item, idx) => (
          <a key={idx} href="#" className="block px-4 py-2 hover:bg-gray-100">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

// Mobile Menu Item
function MobileMenuItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-2 border-b py-2">
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
  );
}

// Mobile Dropdown
function MobileMenuDropdown({ label, subItems }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="flex justify-between items-center border-b py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        <FaChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div className="pl-4 space-y-1 text-sm">
          {subItems.map((item, idx) => (
            <a key={idx} href="#" className="block py-1">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
