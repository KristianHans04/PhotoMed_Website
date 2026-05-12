import { Section } from '@/components/ui/Section'

export default function Terms() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-text-primary">Terms of Service</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: May 2026</p>

        <div className="mt-10 space-y-10 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-text-primary">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing, downloading, installing, or using the PhotoMed mobile application,
              website (photomed.app), API endpoints, or any
              related services (collectively, the "Service"), you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service ("Terms").
              If you do not agree to these Terms in their entirety, you must not access or
              use the Service.
            </p>
            <p className="mt-3">
              These Terms constitute a legally binding agreement between you ("User," "you,"
              or "your") and PhotoMed ("Company," "we," "us," or "our"). We reserve the right
              to modify these Terms at any time. Material changes will be communicated via
              email to registered users or through a prominent notice on the Service. Your
              continued use of the Service after such modifications constitutes acceptance of
              the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">2. Medical Disclaimer and Health-Related Warnings</h2>
            <p className="mt-3">
              THE SERVICE DOES NOT PROVIDE MEDICAL ADVICE, MEDICAL DIAGNOSIS, OR PROFESSIONAL
              HEALTHCARE TREATMENT. PhotoMed provides informational content about traditional
              and ethnobotanical uses of plants based on published research and documented
              traditional practices. This information is provided for educational and
              informational purposes only.
            </p>
            <p className="mt-3">
              You expressly acknowledge and agree that:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                The Service is not intended to diagnose, treat, cure, or prevent any disease,
                medical condition, or illness. It addresses common everyday symptoms only,
                such as headaches, stomach discomfort, minor skin irritation, coughs, nausea,
                and similar non-emergency ailments.
              </li>
              <li>
                The Service is complementary to professional medical care. It is not a
                substitute for, and should never be used in place of, professional medical
                advice, diagnosis, or treatment from a licensed healthcare provider.
              </li>
              <li>
                You should always consult a qualified healthcare professional before acting
                on any information provided by the Service, particularly if you are pregnant,
                nursing, taking medication, have a pre-existing medical condition, or are
                treating symptoms in children or elderly individuals.
              </li>
              <li>
                If your symptoms persist, worsen, or are accompanied by severe pain, high
                fever, difficulty breathing, chest pain, or any other signs of a medical
                emergency, you must seek immediate professional medical attention. Do not
                delay seeking medical care based on information obtained through the Service.
              </li>
              <li>
                Plant-based preparations may cause allergic reactions, adverse interactions
                with pharmaceutical medications, or unintended side effects. You assume full
                responsibility for verifying the safety and suitability of any plant-based
                preparation for your individual circumstances.
              </li>
              <li>
                The AI-based plant identification and symptom matching features have inherent
                limitations and may produce incorrect, incomplete, or inappropriate results.
                You must exercise independent judgment and verify all information before use.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">3. Eligibility</h2>
            <p className="mt-3">
              The Service is intended for users who are at least 18 years of age or the age
              of majority in their jurisdiction, whichever is greater. If you are under 18
              years of age, you may only use the Service under the direct supervision of a
              parent or legal guardian who has read and agreed to these Terms. By using the
              Service, you represent and warrant that you meet these eligibility requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">4. Permitted Use</h2>
            <p className="mt-3">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable license to access and use the Service for your personal, non-commercial
              use. You agree that you will not:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Use the Service for any unlawful purpose or in violation of any applicable local, national, or international law or regulation</li>
              <li>Attempt to reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code, algorithms, data models, or proprietary methods of the Service or any component thereof</li>
              <li>Submit false, misleading, or fraudulent plant data, location information, symptom descriptions, or any other content to the Service</li>
              <li>Use automated scripts, bots, crawlers, or other automated means to access the Service or collect data from the Service without our express written permission</li>
              <li>Interfere with, disrupt, or attempt to compromise the security, integrity, or availability of the Service, its servers, networks, or infrastructure</li>
              <li>Impersonate any person or entity, or falsely claim an affiliation with any person or entity</li>
              <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Service</li>
              <li>Resell, redistribute, sublicense, or commercially exploit any content, data, or functionality of the Service without our express written consent</li>
              <li>Use the Service to provide medical advice, diagnosis, or treatment to third parties in a professional capacity</li>
              <li>Harvest, collect, or store personal data of other users of the Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">5. User Content and Submissions</h2>
            <p className="mt-3">
              The Service may allow you to submit photographs, plant observations, location
              data, symptom descriptions, feedback, and other content ("User Content"). By
              submitting User Content to the Service, you:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                Grant PhotoMed a worldwide, non-exclusive, royalty-free, perpetual, irrevocable,
                sublicensable license to use, reproduce, modify, adapt, publish, translate,
                create derivative works from, distribute, and display such User Content for
                the purposes of operating, improving, and promoting the Service, including
                training and improving AI models and contributing to the community botanical
                database.
              </li>
              <li>
                Represent and warrant that you own or have the necessary rights, licenses,
                consents, and permissions to grant the above license, and that your User
                Content does not infringe or violate the intellectual property rights, privacy
                rights, or any other rights of any third party.
              </li>
              <li>
                Acknowledge that User Content may be used in anonymized and aggregated form
                for research, analysis, and the improvement of plant identification and
                symptom-matching accuracy.
              </li>
            </ul>
            <p className="mt-3">
              You retain ownership of the original intellectual property in your User Content,
              subject to the license granted above. We are not obligated to maintain, store,
              or provide copies of User Content, and we reserve the right to remove any User
              Content at our sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">6. Intellectual Property</h2>
            <p className="mt-3">
              The Service, including but not limited to all software, algorithms, AI models,
              data architectures, botanical databases, geospatial mappings, user interface
              designs, text, graphics, logos, icons, images, audio clips, and the compilation
              thereof, is the exclusive property of PhotoMed and is protected by applicable
              intellectual property laws, including copyright, trademark, patent, and trade
              secret laws. All rights not expressly granted in these Terms are reserved by
              PhotoMed.
            </p>
            <p className="mt-3">
              The PhotoMed name, logo, and all related names, logos, product and service
              names, designs, and slogans are trademarks of PhotoMed. You must not use such
              marks without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">7. Accuracy of Information and AI Limitations</h2>
            <p className="mt-3">
              While we endeavor to provide accurate and reliable information regarding plant
              identification, medicinal properties, preparation methods, and symptom-to-remedy
              matching, we cannot and do not guarantee that all information provided by the
              Service is complete, current, accurate, or error-free. Specifically:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                AI-based plant identification has inherent limitations and may misidentify
                plant species, particularly in cases of visually similar species, poor image
                quality, unusual growing conditions, or species not adequately represented in
                training data.
              </li>
              <li>
                Symptom-to-remedy matching is based on documented traditional practices and
                published ethnobotanical research. Individual responses to plant-based
                preparations vary significantly based on factors including age, weight, health
                status, medication interactions, allergies, and genetic factors.
              </li>
              <li>
                Geospatial plant location data is community-sourced and may be outdated,
                inaccurate, or incomplete. Plants may have been removed, damaged, or may no
                longer be present at indicated locations.
              </li>
              <li>
                The Service should never be the sole basis for decisions that could affect
                your health or safety. Always verify critical information through additional
                independent sources.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">8. Assumption of Risk</h2>
            <p className="mt-3">
              You expressly acknowledge and assume all risks associated with using the Service,
              including but not limited to risks arising from: consuming, applying, or
              otherwise using any plant or plant-based preparation identified or recommended
              by the Service; traveling to locations identified by the Service; interacting
              with the natural environment; and relying on AI-generated information. You
              agree that you are solely responsible for evaluating the accuracy, completeness,
              and usefulness of any information provided by the Service and for any actions
              you take based on such information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">9. Limitation of Liability</h2>
            <p className="mt-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PHOTOMED,
              ITS FOUNDERS, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, CONTRACTORS, PARTNERS,
              SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
              DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, USE, OR OTHER INTANGIBLE
              LOSSES, ARISING OUT OF OR IN CONNECTION WITH:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Your access to, use of, or inability to access or use the Service</li>
              <li>Any health outcome, adverse reaction, injury, or harm resulting from acting on information, recommendations, or identifications provided by the Service</li>
              <li>Any errors, inaccuracies, or omissions in the content, plant identifications, symptom matching, preparation instructions, or location data provided by the Service</li>
              <li>Any unauthorized access to or alteration of your data or transmissions</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any interruption, suspension, or termination of the Service</li>
            </ul>
            <p className="mt-3">
              THIS LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS
              BASED, INCLUDING NEGLIGENCE, CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER
              BASIS, EVEN IF PHOTOMED HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              IN NO EVENT SHALL PHOTOMED'S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING
              OUT OF OR RELATING TO THE SERVICE EXCEED THE AMOUNT YOU PAID TO PHOTOMED, IF
              ANY, DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">10. Indemnification</h2>
            <p className="mt-3">
              You agree to defend, indemnify, and hold harmless PhotoMed, its founders,
              officers, directors, employees, agents, contractors, partners, suppliers, and
              affiliates from and against any and all claims, damages, obligations, losses,
              liabilities, costs, or expenses (including reasonable attorneys' fees) arising
              from or related to: (a) your use of the Service; (b) your violation of these
              Terms; (c) your violation of any applicable law or regulation; (d) your
              violation of any rights of a third party; or (e) any claim that your User
              Content caused damage to a third party.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">11. Disclaimer of Warranties</h2>
            <p className="mt-3">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
              ACCURACY, RELIABILITY, OR COMPLETENESS. PHOTOMED DOES NOT WARRANT THAT THE
              SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS. PHOTOMED DOES NOT WARRANT THE ACCURACY OR RELIABILITY OF
              ANY PLANT IDENTIFICATION, SYMPTOM MATCHING, PREPARATION INSTRUCTION, OR LOCATION
              DATA PROVIDED THROUGH THE SERVICE.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">12. Account Termination and Suspension</h2>
            <p className="mt-3">
              We reserve the right, at our sole discretion, to suspend or terminate your
              access to the Service at any time, with or without notice, for any reason,
              including but not limited to: violation of these Terms; conduct that we
              determine is harmful to other users, the Service, or third parties; suspected
              fraudulent, abusive, or illegal activity; or extended periods of inactivity.
              Upon termination, your right to use the Service will immediately cease. All
              provisions of these Terms that by their nature should survive termination
              shall survive, including ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">13. Donations</h2>
            <p className="mt-3">
              Donations made through the Service are voluntary contributions to support the
              development and expansion of PhotoMed. Donations are non-refundable unless
              required by applicable law. Donation processing is handled by third-party
              payment processors (currently Paystack) subject to their own terms of service
              and privacy policies. PhotoMed does not store your full payment card details.
              Donations do not confer any ownership interest, equity, voting rights, or
              contractual claims against PhotoMed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">14. Third-Party Services and Links</h2>
            <p className="mt-3">
              The Service may contain links to third-party websites, services, or resources
              that are not owned or controlled by PhotoMed. We do not endorse and are not
              responsible for the content, privacy policies, practices, or availability of
              any third-party services. Your interactions with third-party services are
              governed solely by the terms and policies of those third parties. You acknowledge
              and agree that PhotoMed shall not be responsible or liable for any damage or
              loss caused by or in connection with the use of any third-party services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">15. Governing Law and Dispute Resolution</h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with the laws of
              the Republic of Kenya, without regard to its conflict of law principles. Any
              dispute arising out of or relating to these Terms or the Service shall first
              be attempted to be resolved through good-faith negotiation between the parties.
              If the dispute cannot be resolved through negotiation within thirty (30) days,
              either party may submit the dispute to binding arbitration under the rules of
              the Nairobi Centre for International Arbitration. The arbitration shall be
              conducted in English in Nairobi, Kenya. The arbitrator's decision shall be final
              and binding on both parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">16. Severability</h2>
            <p className="mt-3">
              If any provision of these Terms is held to be invalid, illegal, or unenforceable
              by a court of competent jurisdiction, such provision shall be modified to the
              minimum extent necessary to make it valid, legal, and enforceable while
              preserving the original intent of the provision. If modification is not possible,
              the invalid provision shall be severed, and the remaining provisions of these
              Terms shall continue in full force and effect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">17. Entire Agreement</h2>
            <p className="mt-3">
              These Terms, together with the Privacy Policy and Medical Disclaimer, constitute
              the entire agreement between you and PhotoMed regarding the use of the Service
              and supersede all prior agreements, understandings, representations, and
              warranties, both written and oral, regarding the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">18. Contact Information</h2>
            <p className="mt-3">
              For questions, concerns, or notices regarding these Terms of Service, please
              contact us at:
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
