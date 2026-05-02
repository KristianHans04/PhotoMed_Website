import { Section } from '@/components/ui/Section'

export default function Terms() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-text-primary">Terms of Service</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-text-primary">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using PhotoMed (the "Service"), you agree to be bound by these
              Terms of Service. If you do not agree to these terms, do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">2. Medical Disclaimer</h2>
            <p className="mt-3">
              PhotoMed provides informational guidance about traditional plant medicine only.
              It does not provide medical diagnosis, treatment recommendations, or professional
              healthcare advice. The information provided should not be used as a substitute
              for professional medical care. Always consult a qualified healthcare provider
              for medical concerns. If you experience severe or persistent symptoms, seek
              emergency medical attention immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">3. Use of the Service</h2>
            <p className="mt-3">You agree to:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to reverse-engineer or extract proprietary algorithms</li>
              <li>Not submit harmful, misleading, or fraudulent plant data</li>
              <li>Not use automated systems to access the Service without permission</li>
              <li>Not interfere with the security or integrity of the platform</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">4. User Content</h2>
            <p className="mt-3">
              When you submit photographs, plant identifications, or location data to PhotoMed,
              you grant us a non-exclusive license to use this content to improve the Service
              and contribute to the community botanical database. You retain ownership of your
              original content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">5. Accuracy of Information</h2>
            <p className="mt-3">
              While we strive for accuracy in plant identification and ethnobotanical information,
              we cannot guarantee that all information provided is complete, current, or error-free.
              AI-based identification has inherent limitations. Always verify critical information
              through additional sources, especially regarding plant toxicity and contraindications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">6. Limitation of Liability</h2>
            <p className="mt-3">
              PhotoMed and its creators shall not be liable for any direct, indirect, incidental,
              or consequential damages arising from your use of the Service, including but not
              limited to health outcomes resulting from acting on information provided by the
              platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">7. Account Termination</h2>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate these terms
              or engage in behavior that harms the community or the integrity of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">8. Changes to Terms</h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of the Service after
              changes constitutes acceptance of the new terms. We will notify registered users
              of material changes via email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">9. Contact</h2>
            <p className="mt-3">
              For questions about these terms, contact us at hello@kristianhans.com.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
