import HeaderComponent from "../components/header";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0c0510] text-white">
      <div 
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: 'blur(120px)',
          opacity: 0.5,
        }}
      />
      <HeaderComponent />
      <main className="container mx-auto px-4 py-16 relative">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Terms and <span className="text-[#FFA6F8]">Conditions</span>
        </motion.h1>
        
        <motion.div 
          className="prose prose-invert max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold text-center mb-6">Privacy Policy for Ondepay</h1>
          <p className="text-sm text-gray-400 text-center mb-8">Effective Date: January 15th, 2025</p>
          
          <p>
            At Ondepay, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, 
            and protect your personal information when you use the Ondepay app. By using our app, you agree to the practices 
            described in this policy.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
          <p>To provide you with our services, we collect the following types of information:</p>
          <h3 className="text-lg font-medium mt-4">Personal Information:</h3>
          <ul className="list-disc pl-6">
            <li>Full Name</li>
            <li>Date of Birth</li>
            <li>Address</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Government-issued Identification (for KYC verification)</li>
            <li>National Identity Card or equivalent (if required)</li>
          </ul>
          
          <h3 className="text-lg font-medium mt-4">Financial Information:</h3>
          <ul className="list-disc pl-6">
            <li>Bank account details</li>
            <li>Transaction history</li>
            <li>Debit or credit card information</li>
            <li>Ondepay account balance and activities</li>
          </ul>
          <ul className="list-disc pl-6">
            <li>App usage data</li>
            <li>Location data (if enabled)</li>
          </ul>
        
          <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>Verify your identity and comply with KYC regulations.</li>
            <li>Create and manage your USD card and Ondepay account.</li>
            <li>Facilitate money transfers within the app.</li>
            <li>Process transactions, including deposits, withdrawals, and payments.</li>
            <li>Prevent fraud, unauthorized access, and illegal activities.</li>
            <li>Provide customer support and notify you about important updates.</li>
            <li>Improve our app’s features and functionality.</li>
          </ul>
        
          <h2 className="text-xl font-semibold mt-6">3. How We Share Your Information</h2>
          <p>We do not sell or rent your personal information to third parties. However, we may share your information with:</p>
          <ul className="list-disc pl-6">
            <li>Payment Processors and Financial Institutions: To complete your transactions.</li>
            <li>Regulatory Authorities: To comply with legal and regulatory requirements.</li>
            <li>Service Providers: For identity verification, transaction processing, and app functionality.</li>
            <li>Legal Entities: If required by law or to protect our rights and interests.</li>
          </ul>
        
          <h2 className="text-xl font-semibold mt-6">4. Fees for Withdrawal Transactions</h2>
          <p>
            While sending money within the app is free, a withdrawal fee applies when you transfer money out of the app 
            to an external account. These fees are disclosed transparently during the withdrawal process.
          </p>
        
          <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
          <p>We use industry-standard security measures to protect your personal and financial information, including:</p>
          <ul className="list-disc pl-6">
            <li>Encryption of sensitive data during transmission.</li>
            <li>Secure storage of personal information.</li>
            <li>Regular monitoring for unauthorized access or suspicious activity.</li>
          </ul>
          <p>
            While we take extensive measures to safeguard your data, no system is completely secure. You are responsible 
            for keeping your login credentials confidential.
          </p>
        
          <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request a copy of your personal data.</li>
            <li>Withdraw consent for data processing (where applicable).</li>
          </ul>
          <p>To exercise these rights, contact us at <span className="text-indigo-500">support@ondepay.com</span>.</p>
        
          <h2 className="text-xl font-semibold mt-6">7. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to provide our services and fulfill legal, accounting, or 
            reporting requirements. Once retention periods expire, your information will be securely deleted or anonymized.
          </p>
        
          <h2 className="text-xl font-semibold mt-6">8. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to enhance your app experience, such as:</p>
          <ul className="list-disc pl-6">
            <li>Tracking app usage and performance.</li>
            <li>Storing your preferences.</li>
          </ul>
          <p>You can manage cookie preferences through your device settings.</p>
        
          <h2 className="text-xl font-semibold mt-6">9. Third-Party Links</h2>
          <p>
            The Ondepay app may contain links to third-party websites or services. We are not responsible for the privacy 
            practices or content of these third parties. Please review their privacy policies before sharing your information.
          </p>
        
          <h2 className="text-xl font-semibold mt-6">10. Children’s Privacy</h2>
          <p>
            Ondepay is not intended for individuals under the age of 18. We do not knowingly collect data from minors. If we 
            learn that a minor’s information has been collected, we will delete it promptly.
          </p>
        
          <h2 className="text-xl font-semibold mt-6">11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be communicated via the app or email. Continued 
            use of the app after updates signifies acceptance of the revised policy.
          </p>
        
          <h2 className="text-xl font-semibold mt-6">12. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul className="list-none pl-0">
            <li>Email: <span className="text-indigo-500">support@ondepay.com</span></li>
            <li>Address: KM 42, LEKKI EPE EXPRESS</li>
            <li>Phone: 09034281922</li>
          </ul>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;

