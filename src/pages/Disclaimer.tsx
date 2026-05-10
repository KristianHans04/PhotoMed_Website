import { Section } from '@/components/ui/Section'

export default function Disclaimer() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-text-primary">Medical Disclaimer</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: May 2026</p>

        <div className="mt-10 space-y-10 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-text-primary">1. General Disclaimer</h2>
            <p className="mt-3">
              THE INFORMATION PROVIDED BY PHOTOMED, INCLUDING BUT NOT LIMITED TO PLANT
              IDENTIFICATIONS, SYMPTOM-BASED REMEDY SUGGESTIONS, PREPARATION INSTRUCTIONS,
              AND GEOSPATIAL PLANT LOCATION DATA, IS PROVIDED FOR EDUCATIONAL AND
              INFORMATIONAL PURPOSES ONLY. PHOTOMED DOES NOT PROVIDE MEDICAL ADVICE, MEDICAL
              DIAGNOSIS, OR PROFESSIONAL HEALTHCARE TREATMENT OF ANY KIND.
            </p>
            <p className="mt-3">
              Nothing contained in the PhotoMed mobile application, website, or any related
              services should be construed as medical advice, a recommendation for treatment,
              or a substitute for the advice of a qualified healthcare professional. The
              content provided is based on published ethnobotanical research and documented
              traditional practices and is intended solely to surface existing knowledge about
              the traditional uses of plants.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">2. Not a Substitute for Professional Medical Care</h2>
            <p className="mt-3">
              PhotoMed is designed to be used as a complementary informational resource. It is
              not designed, intended, or suitable to serve as a substitute for professional
              medical advice, diagnosis, or treatment. You should never disregard, delay, or
              discontinue professional medical advice or treatment because of information you
              have obtained through the Service.
            </p>
            <p className="mt-3">
              If you are experiencing a medical emergency, call your local emergency services
              immediately. If you are experiencing severe, persistent, or worsening symptoms,
              consult a qualified healthcare provider without delay. PhotoMed is not equipped
              to handle medical emergencies, acute conditions, or chronic disease management.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">3. Scope of Symptom Coverage</h2>
            <p className="mt-3">
              PhotoMed is designed to address common everyday symptoms only, including but not
              limited to: headaches, mild stomach discomfort, minor skin irritation, common
              cold symptoms, minor coughs, mild nausea, and minor burns. The Service does not
              and should not be used to address, diagnose, or treat:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Diseases, including but not limited to cancer, HIV/AIDS, COVID-19, malaria, tuberculosis, diabetes, cardiovascular disease, or any other acute or chronic disease</li>
              <li>Severe allergic reactions or anaphylaxis</li>
              <li>Mental health conditions including depression, anxiety, psychosis, or suicidal ideation</li>
              <li>Injuries requiring surgical intervention</li>
              <li>Conditions requiring prescription medication</li>
              <li>Symptoms in infants or neonates</li>
              <li>Pregnancy-related complications or symptoms</li>
              <li>Any condition that a reasonable person would consider to require professional medical evaluation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">4. AI and Technology Limitations</h2>
            <p className="mt-3">
              PhotoMed uses artificial intelligence technologies for plant identification and
              symptom-to-remedy matching. These technologies have inherent limitations:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                Plant identification accuracy depends on image quality, lighting conditions,
                plant condition, angle of capture, and the representation of the species in
                training data. Misidentification is possible and may have serious consequences
                if the misidentified plant is toxic or harmful.
              </li>
              <li>
                Symptom-to-remedy matching is probabilistic and based on documented traditional
                uses. It does not account for your complete medical history, current medications,
                allergies, genetic factors, or individual physiological responses.
              </li>
              <li>
                Geospatial plant location data is community-sourced and may be outdated,
                inaccurate, or reflect plants that are no longer present at indicated locations.
              </li>
              <li>
                AI-generated responses may occasionally contain errors, omissions, or
                inappropriate recommendations despite our best efforts to ensure accuracy.
              </li>
            </ul>
            <p className="mt-3">
              You must always exercise independent judgment and verify information before
              consuming, applying, or otherwise using any plant or plant-based preparation.
              When in doubt, do not proceed — consult a healthcare professional or botanist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">5. Plant Safety Warnings</h2>
            <p className="mt-3">
              Many plants that have medicinal properties also carry risks. You expressly
              acknowledge and accept the following:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                Some medicinal plants are toxic in certain doses, when prepared incorrectly,
                or when consumed by individuals with specific health conditions, allergies,
                or medication regimens. Toxicity can range from mild gastrointestinal
                discomfort to organ failure or death.
              </li>
              <li>
                Plant-based preparations may interact adversely with pharmaceutical
                medications, including but not limited to blood thinners, antidepressants,
                immunosuppressants, contraceptives, and blood pressure medications. If you
                are taking any medication, consult your healthcare provider before using any
                plant-based preparation.
              </li>
              <li>
                Many medicinal plants have toxic look-alikes. While PhotoMed includes a
                camera-based confirmation feature, this feature has limitations and should not
                be relied upon as the sole method of plant verification.
              </li>
              <li>
                Pregnant and nursing individuals should exercise extreme caution with any
                plant-based preparation, as many plants that are safe for the general
                population may be harmful during pregnancy or lactation.
              </li>
              <li>
                Children, elderly individuals, and immunocompromised persons may respond
                differently to plant-based preparations than healthy adults.
              </li>
              <li>
                Environmental factors such as soil contamination, pesticide exposure, and
                proximity to pollution sources may affect the safety of plants even when the
                species identification is correct.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">6. Assumption of Risk and Waiver</h2>
            <p className="mt-3">
              BY USING THE SERVICE, YOU EXPRESSLY ACKNOWLEDGE AND ASSUME ALL RISKS ASSOCIATED
              WITH USING, CONSUMING, APPLYING, OR OTHERWISE INTERACTING WITH ANY PLANT OR
              PLANT-BASED PREPARATION IDENTIFIED, RECOMMENDED, OR DESCRIBED BY THE SERVICE.
              YOU AGREE THAT PHOTOMED, ITS FOUNDERS, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
              CONTRACTORS, AND AFFILIATES SHALL NOT BE HELD LIABLE FOR ANY ADVERSE HEALTH
              OUTCOME, INJURY, ALLERGIC REACTION, POISONING, OR DEATH ARISING FROM YOUR USE
              OF THE SERVICE OR YOUR RELIANCE ON INFORMATION PROVIDED BY THE SERVICE.
            </p>
            <p className="mt-3">
              This assumption of risk applies regardless of whether the adverse outcome
              resulted from an error in plant identification, an error in symptom-to-remedy
              matching, incorrect preparation instructions, outdated location data, or any
              other cause related to the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">7. No Doctor-Patient Relationship</h2>
            <p className="mt-3">
              Use of the Service does not create a doctor-patient, therapist-patient, or any
              other healthcare provider-patient relationship between you and PhotoMed, its
              employees, contractors, or any affiliated party. The AI chatbot is a software
              tool that surfaces ethnobotanical information — it is not a healthcare provider
              and does not have the ability to examine, diagnose, or treat you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">8. Research and Evidence Basis</h2>
            <p className="mt-3">
              The ethnobotanical information provided by PhotoMed is derived from published
              scientific literature, documented traditional practices, and community knowledge.
              The inclusion of a plant or remedy in the Service does not constitute an
              endorsement of its efficacy or safety by PhotoMed. Many traditional remedies
              have not been subjected to rigorous clinical trials, and the evidence for their
              efficacy may be limited to observational studies, in-vitro research, or
              traditional documentation. PhotoMed presents this information transparently and
              encourages users to evaluate it critically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">9. Regulatory Status</h2>
            <p className="mt-3">
              PhotoMed is not a medical device, pharmaceutical product, or regulated health
              service. The Service has not been evaluated, approved, or certified by any
              national or international health regulatory authority, including but not limited
              to the U.S. Food and Drug Administration (FDA), the European Medicines Agency
              (EMA), the Kenya Pharmacy and Poisons Board, or any equivalent regulatory body.
              No claims made by or through the Service should be interpreted as having
              regulatory approval or endorsement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">10. Contact Information</h2>
            <p className="mt-3">
              If you have questions about this Medical Disclaimer or need to report an adverse
              event, please contact us immediately at:
            </p>
            <p className="mt-3 text-sm">
              Email: support@photomed.app
              <br />
              Subject line: "Medical Disclaimer / Adverse Event Report"
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
