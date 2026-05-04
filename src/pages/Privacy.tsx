import { Section } from '@/components/ui/Section'

export default function Privacy() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-text-primary">Privacy Policy</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-text-primary">1. Information We Collect</h2>
            <p className="mt-3">
              PhotoMed collects the minimum information necessary to provide our services:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Account information (email, name) when you create an account</li>
              <li>Plant photographs you submit for identification</li>
              <li>Symptom descriptions you provide for remedy guidance</li>
              <li>Device location data (only when you explicitly grant permission)</li>
              <li>Usage analytics to improve the service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">2. How We Use Your Information</h2>
            <p className="mt-3">Your data is used exclusively to:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Provide plant identification and symptom analysis services</li>
              <li>Display nearby medicinal plant locations on the map</li>
              <li>Improve our AI models and botanical database accuracy</li>
              <li>Send you service-related notifications (updates, security alerts)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">3. Data Storage and Security</h2>
            <p className="mt-3">
              All data is stored on secure servers with encryption at rest and in transit.
              Authentication tokens are stored in your device's secure storage (Android Keystore
              or iOS Secure Enclave). We do not sell, rent, or share your personal data with
              third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">4. Third-Party Services</h2>
            <p className="mt-3">
              PhotoMed integrates with the following services to provide functionality:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>AI providers for plant identification and symptom analysis</li>
              <li>PlantNet for botanical verification</li>
              <li>OpenStreetMap for map rendering</li>
              <li>Paystack for donation processing</li>
            </ul>
            <p className="mt-3 text-sm">
              Each service operates under its own privacy policy. We send only the minimum
              data required for each service to function.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">5. Location Data</h2>
            <p className="mt-3">
              Location access is entirely optional. The app functions without it. When granted,
              location is used only to find medicinal plants near you and to tag plant
              identification locations for community mapping. You can revoke location permission
              at any time through your device settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">6. Your Rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Access all data we hold about you</li>
              <li>Request deletion of your account and associated data</li>
              <li>Export your data in a machine-readable format</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">7. Contact</h2>
            <p className="mt-3">
              For privacy-related inquiries, contact us at support@photomed.app with
              "Privacy" in the subject line. We will respond within 30 days.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
