import { Section } from '@/components/ui/Section'

export default function Privacy() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-text-primary">Privacy Policy</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: May 2026</p>

        <div className="mt-10 space-y-10 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-text-primary">1. Introduction</h2>
            <p className="mt-3">
              PhotoMed ("Company," "we," "us," or "our") is committed to protecting your
              privacy and the security of your personal information. This Privacy Policy
              describes how we collect, use, store, share, and protect information when you
              use the PhotoMed mobile application, website (photomed.app),
              API endpoints, and any related services
              (collectively, the "Service").
            </p>
            <p className="mt-3">
              By accessing or using the Service, you acknowledge that you have read,
              understood, and agree to the practices described in this Privacy Policy. If you
              do not agree with this Privacy Policy, please do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">2. Information We Collect</h2>

            <h3 className="mt-4 text-base font-semibold text-text-primary">2.1 Information You Provide Directly</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Account registration information: email address, name, and password</li>
              <li>Symptom descriptions and health-related information you provide to the AI chatbot</li>
              <li>Plant photographs you submit for identification</li>
              <li>Location data you choose to share for nearby plant discovery</li>
              <li>Contact form submissions: name, email, subject, and message content</li>
              <li>Newsletter subscription: email address</li>
              <li>Donation information: email address and transaction metadata (payment card details are processed and stored by Paystack, not by PhotoMed)</li>
              <li>Feedback, support requests, and other communications you send to us</li>
            </ul>

            <h3 className="mt-4 text-base font-semibold text-text-primary">2.2 Information Collected Automatically</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Device information: device type, operating system version, unique device identifiers</li>
              <li>Usage data: features accessed, pages viewed, actions taken, timestamps, session duration</li>
              <li>Log data: IP addresses, browser type, referring URLs, access times</li>
              <li>Performance data: crash reports, error logs, and diagnostic information</li>
              <li>Approximate location data derived from IP addresses (distinct from precise GPS data, which requires explicit consent)</li>
            </ul>

            <h3 className="mt-4 text-base font-semibold text-text-primary">2.3 Information from Third-Party Sources</h3>
            <p className="mt-3 text-sm">
              We may receive information from third-party authentication providers if you
              choose to sign in through such services. We only receive the information you
              authorize the third party to share with us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">3. How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect for the following purposes:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>To provide, operate, and maintain the Service, including plant identification, symptom-based remedy guidance, and geospatial plant discovery</li>
              <li>To process your symptom descriptions and provide relevant plant-based remedy information</li>
              <li>To display medicinal plant locations near you when you grant location permission</li>
              <li>To improve the accuracy of our AI models, plant identification systems, and symptom-matching algorithms through anonymized and aggregated data analysis</li>
              <li>To communicate with you regarding the Service, including sending service-related notifications, security alerts, and support responses</li>
              <li>To send periodic newsletters to subscribers (you may unsubscribe at any time)</li>
              <li>To process donations through our third-party payment processor</li>
              <li>To detect, prevent, and address fraud, abuse, security incidents, and technical issues</li>
              <li>To comply with legal obligations and enforce our Terms of Service</li>
              <li>To conduct anonymized research and analysis to improve the Service and contribute to ethnobotanical knowledge</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">4. Health-Related Information</h2>
            <p className="mt-3">
              The symptom descriptions and health-related information you provide to the AI
              chatbot are used solely to generate relevant plant-based remedy suggestions
              during your session. We treat this information with heightened sensitivity. We
              do not sell, rent, or share individually identifiable health-related information
              with third parties for marketing or advertising purposes. Health-related data
              may be anonymized and aggregated for the purpose of improving the Service's
              symptom-matching accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">5. Data Storage, Security, and Retention</h2>
            <p className="mt-3">
              All data is stored on secure servers with industry-standard encryption both
              at rest and in transit (TLS 1.2 or higher). Authentication tokens are stored
              in your device's secure storage mechanisms. We implement organizational and
              technical security measures designed to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="mt-3">
              We retain your personal information only for as long as is reasonably necessary
              to fulfill the purposes for which it was collected, comply with legal obligations,
              resolve disputes, and enforce our agreements. Account data is retained for the
              duration of your account's existence. Upon account deletion, personal data is
              removed from active systems within thirty (30) days, though anonymized and
              aggregated data derived from your usage may be retained indefinitely for research
              and Service improvement purposes. Backup copies may persist for up to ninety
              (90) days after deletion from active systems due to standard backup retention
              schedules.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">6. Data Sharing and Disclosure</h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information. We may share your
              information in the following limited circumstances:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                <strong>Service Providers:</strong> We share data with third-party service
                providers who assist in operating the Service (e.g., AI processing, botanical
                verification, map rendering, payment processing, email delivery). These
                providers are contractually obligated to use your data only as necessary to
                perform services on our behalf and are bound by confidentiality obligations.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if
                required to do so by law, regulation, legal process, or governmental request,
                or when we believe disclosure is necessary to protect our rights, your safety,
                the safety of others, or to investigate fraud or respond to a government
                request.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition,
                reorganization, bankruptcy, or sale of all or a portion of our assets, your
                personal information may be transferred as part of that transaction. We will
                notify you via email or a prominent notice on the Service of any change in
                ownership or uses of your personal information.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with third
                parties when you have given us explicit consent to do so.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">7. Third-Party Services</h2>
            <p className="mt-3">
              The Service integrates with the following categories of third-party services
              to provide functionality:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>AI processing providers for plant identification and symptom analysis</li>
              <li>Botanical verification services for plant species confirmation</li>
              <li>Map and geospatial data providers for plant location mapping</li>
              <li>Payment processing services (Paystack) for donation handling</li>
              <li>Email delivery services (Resend) for transactional communications</li>
              <li>Analytics services for understanding Service usage patterns</li>
            </ul>
            <p className="mt-3 text-sm">
              Each third-party service operates under its own privacy policy. We send only
              the minimum data required for each service to function. We encourage you to
              review the privacy policies of any third-party services that interact with
              your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">8. Location Data</h2>
            <p className="mt-3">
              Precise location access (GPS) is entirely optional and requires your explicit
              consent through your device's permission system. The Service can function without
              precise location data. When location permission is granted, your location is used
              exclusively to:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Identify medicinal plants growing near your current location</li>
              <li>Provide navigation directions to nearby plants</li>
              <li>Tag plant identification submissions with location data for community mapping purposes</li>
            </ul>
            <p className="mt-3 text-sm">
              You may revoke location permission at any time through your device's settings.
              Revoking location permission will disable location-dependent features but will
              not affect your ability to use other features of the Service. We do not
              continuously track your location in the background. Location data is accessed
              only when you actively use location-dependent features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">9. Cookies and Tracking Technologies</h2>
            <p className="mt-3">
              The website uses essential cookies and local storage to maintain session state,
              remember user preferences (such as newsletter dismissal), and ensure proper
              functionality. We do not use third-party advertising cookies or cross-site
              tracking technologies. Analytics data, when collected, is anonymized and used
              solely for improving the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">10. Children's Privacy</h2>
            <p className="mt-3">
              The Service is not directed at children under the age of 13 (or the applicable
              age of digital consent in your jurisdiction). We do not knowingly collect
              personal information from children under this age. If we become aware that we
              have collected personal information from a child under the applicable age
              without verified parental consent, we will take steps to delete that information
              promptly. If you believe we have inadvertently collected information from a
              child, please contact us immediately at support@photomed.app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">11. Your Rights</h2>
            <p className="mt-3">
              Depending on your jurisdiction, you may have the following rights regarding
              your personal information:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements</li>
              <li><strong>Right to Data Portability:</strong> Request your data in a structured, commonly used, machine-readable format</li>
              <li><strong>Right to Restrict Processing:</strong> Request restriction of processing of your personal data under certain circumstances</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data for certain purposes</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time, without affecting the lawfulness of processing based on consent before withdrawal</li>
            </ul>
            <p className="mt-3 text-sm">
              To exercise any of these rights, contact us at support@photomed.app with
              "Privacy Rights Request" in the subject line. We will respond to your request
              within thirty (30) days. We may request additional information to verify your
              identity before processing your request.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">12. International Data Transfers</h2>
            <p className="mt-3">
              Your information may be transferred to and processed in countries other than
              the country in which you reside. These countries may have data protection laws
              that differ from the laws of your country. By using the Service, you consent
              to the transfer of your information to such countries. We take appropriate
              safeguards to ensure that your personal information remains protected in
              accordance with this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">13. Changes to This Privacy Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technologies, legal requirements, or for other operational reasons.
              We will notify you of material changes by posting the updated Privacy Policy on
              the Service with a revised "Last updated" date and, where feasible, by sending
              an email notification to registered users. Your continued use of the Service
              after the effective date of any changes constitutes your acceptance of the
              revised Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">14. Contact Information</h2>
            <p className="mt-3">
              For any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us at:
            </p>
            <p className="mt-3 text-sm">
              Email: support@photomed.app
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
