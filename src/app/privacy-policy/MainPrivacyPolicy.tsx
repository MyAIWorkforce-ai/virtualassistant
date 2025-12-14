"use client";
import { motion } from "framer-motion";


export default function MainPrivacyPolicy() {

    return (
        <div className="pt-[74]">


 <motion.section
     initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}

      className="w-full py-16 px-6 md:px-20"
      style={{
        background: "linear-gradient(to right, #F0F9FF, #FFFFFF)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col space-y-8 text-left">
        {/* MAIN HEADING */}
        <div className="space-y-2">
          <h1 className="font-poppins font-bold text-[36px] leading-tight text-black">
            Privacy Policy
          </h1>
          <p className="font-poppins text-[14px] text-black">
            AI Virtual Assistant Australia Pty Ltd
          </p>
          <p className="font-poppins text-[16px] text-[#797A7D]">
            This Privacy Policy explains how AI Virtual Assistant Australia Pty
            Ltd (‘we’, ‘us’, or ‘our’) collects, stores, uses, and protects your
            personal information. By engaging with our we.
          </p>
        </div>

       
        <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
            1. Commitment to Your Privacy
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
            We are committed to protecting your personal information in line with
            the Privacy Act 1988 (Cth) and the Australian Privacy Principles
            (APPs). We ensure transparency in how data is managed and provide you
            with control over your information whenever possible.
          </p>
        </div>

      
        <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
            2. Information We Collect
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D] whitespace-pre-line">
            We may collect the following information during your interactions
            with our business or AI services:{"\n"}
            • Your name, email address, phone number, and business details{"\n"}
            • Payment and billing information{"\n"}
            • Communications and messages sent to or from our systems{"\n"}
            • Usage data, call logs, AI chat transcripts, and feedback{"\n"}
            • Device information, browser type, IP address, and interaction
            history
          </p>
        </div>

      
        <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
            3. Sensitive Information
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
            We generally do not collect sensitive information (such as race,
            religion, or health details). If we ever do, it will only be used
            with your consent or as required or permitted by law.
          </p>
        </div>

    
        <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
            4. How We Collect Information
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
            We collect personal information through your direct interactions with us—such as website forms, phone calls, emails, and AI-assisted communications—as well as through secure analytics and tracking
             tools that help us improve performance and reliability.
          </p>
        </div>

        
        <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
            5. Why We Collect Information
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
            Your information helps us deliver and improve our services. This includes appointment handling, call management, AI system performance, customer support, payment processing, and communications.
             We may also use your data for research, analytics, and security.
          </p>
        </div>

  <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
          6. Sharing and Disclosure
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
          We do not sell or rent personal data. We may share information with trusted partners—such as cloud providers, analytics services, and payment processors—under strict confidentiality
           agreements and data protection standards.
          </p>
        </div>

          <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
            7. International Transfers
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
            If we transfer your information outside Australia, it will only be to providers offering equivalent data protection standards, and we will take all 
            reasonable steps to safeguard your information.
          </p>
        </div>


          <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
            8. Data Security
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
We use advanced security controls such as encryption, secure cloud storage, multi-factor authentication, and regular system audits. Personal data is retained only as long as necessary and securely destroyed or anonymised when no longer required.
          </p>
        </div>


          <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
          9. Data Breach Response
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
If an unauthorised access or data loss incident occurs, we will investigate immediately, notify affected individuals if required, and comply with the
 Notifiable Data Breaches scheme under the Privacy Act.
          </p>
        </div>


          <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
           10. Google API Compliance
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
Our use of Google API data complies with Google’s API Services User Data Policy, including Limited Use requirements. For details, visit https://developers.google.com/terms/api-services-user-data-policy.
          </p>
        </div>

                    <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
           11. Use of Google Calendar Data
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
When you choose to connect your Google Calendar to our platform, we access your Calendar information strictly to provide scheduling and appointment-management features. This may include reading event availability, creating events, and updating or deleting events only when you explicitly perform these actions within our app.
We do not use Google Calendar data for advertising, data resale, analytics beyond core functionality, or any form of unauthorized sharing.
We store only the minimum event information required to sync your appointments, and all synced data is securely protected. You may disconnect your Google account at any time, and all access will be immediately revoked. We do not retain your Google Calendar data after disconnection unless required for core functionality requested by you.
Our use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.
          </p>
        </div>


          <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
          12. Access and Correction
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
You can request access to or correction of your personal information by contacting us. We may need to verify your identity before providing access. If we cannot fulfil your request, we’ll explain why in writing.
          </p>
        </div>
       
          <div className="space-y-2">
          <h2 className="font-poppins font-semibold text-[24px] text-black">
         13. Concerns or Complaints
          </h2>
          <p className="font-poppins text-[16px] text-[#797A7D]">
If you believe your privacy has been compromised, please contact us directly. We will respond within 30 days. If you remain unsatisfied, you may refer your complaint to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.
          </p>
        </div>  

   <div className="space-y-3">
  <h2 className="font-poppins font-semibold text-[24px] text-black">
    14. Contact Us
  </h2>

  <div className="font-poppins text-[16px] text-[#797A7D] leading-relaxed">
    <p>AI Virtual Assistant Australia Pty Ltd</p>
    <p>
      Email:{" "}
      <a
        href="mailto:hi@virtualassistant.com.au"
        className="text-[#0097DA] hover:underline"
      >
        hi@virtualassistant.com.au
      </a>
    </p>
    <p>
      Phone:{" "}
      <a
        href="tel:0459580098"
        className="text-[#0097DA] hover:underline"
      >
        0459 580 098
      </a>
    </p>
  </div>

  <p className="font-poppins text-[14px] text-[#797A7D]">
    We value your privacy and handle your information with care, transparency, and security.
  </p>
</div>
      </div>
    </motion.section>
        </div>
    )
}



