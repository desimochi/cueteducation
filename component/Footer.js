export default function Footer(){
    return (
    <footer className="bg-white text-black text-sm border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* About Us */}
    <div>
      <h2 className="text-lg font-bold mb-4">About Us</h2>
      <div className="mb-2 font-bold text-xl">
        <span className="text-black">MBA</span><span className="text-red-600">ROI.IN</span>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center gap-2">
          <span>📧</span>
          <a href="mailto:info@mbaroi.in" className="hover:underline">info@mbaroi.in</a>
        </div>
        <div className="flex items-center gap-2">
          <span>📞</span>
          <a href="tel:+918619798661" className="hover:underline">+91 86197 98661</a>
        </div>
        <div className="flex gap-3 mt-3 text-lg">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-pinterest" /></a>
          <a href="#"><i className="fab fa-tumblr" /></a>
          <a href="#"><i className="fab fa-youtube" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-lg font-bold mb-4">Quick Links</h2>
      <ul className="space-y-1 text-gray-800">
        {[
          'Events', 'Education Loan', 'Purpose of Personal Interview (PI)',
          'Types of Group Discussions', 'Evaluation Criteria', 'Best MBA Coachings',
          'Doubt clearing online', 'How to prepare for GD PI', 'Talk to CAT Crackers'
        ].map(link => (
          <li key={link} className="flex items-start gap-2">
            <span className="text-red-600">⦿</span>
            <span>{link}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Top MBA Colleges */}
    <div>
      <h2 className="text-lg font-bold mb-4">Top MBA Colleges</h2>
      <ul className="space-y-1 text-gray-800">
        {[
          'Top 100 Colleges of India', 'Top 50 Colleges of India',
          'MBA Colleges In Ahmedabad', 'MBA Colleges In Bangalore',
          'MBA Colleges In Delhi NCR', 'MBA Colleges In Hyderabad',
          'MBA Colleges In Indore', 'MBA Colleges In Jaipur',
          'MBA Colleges In Mumbai', 'MBA Colleges In Pune'
        ].map(link => (
          <li key={link} className="flex items-start gap-2">
            <span className="text-red-600">⦿</span>
            <span>{link}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Admission 2024 */}
    <div>
      <h2 className="text-lg font-bold mb-4">Admission 2024</h2>
      <ul className="space-y-1 text-gray-800">
        {[
          'ROI Calculator', 'Career Calculator', 'CAT College Predictor',
          'Best ROI Colleges', 'Recommended Colleges', 'Ask the Expert',
          'Talk to Current Students', 'Education Loan', 'Download'
        ].map(link => (
          <li key={link} className="flex items-start gap-2">
            <span className="text-red-600">⦿</span>
            <span>{link}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Lower links row */}
  <div className="border-t border-gray-200 bg-gray-800 mt-4 py-3 text-white pb-2">
    <div className="max-w-7xl mx-auto px-4 flex justify-center flex-wrap gap-4 text-sm">
      {[
        'Terms And Conditions', 'About Us', 'Contact Us',
        'Privacy Policy', 'Disclaimer', 'Cancellation', 'Refund Policy'
      ].map(link => (
        <a href="#" key={link} className="flex items-center gap-1 hover:underline">
    
          {link}
        </a>
      ))}
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-xs text-gray-600 py-3 border-t border-gray-100 mt-2">
    © Copyright 2020 MBAROI.IN All Rights Reserved | Owned by Daddysdata Analytica Inc.
  </div>
</footer>
)
}