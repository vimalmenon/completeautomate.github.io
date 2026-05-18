import { JSX } from 'react';

export default function TermsPage(): JSX.Element {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.12)] backdrop-blur-xl sm:p-12">
          <p className="text-xs font-semibold tracking-[0.34em] text-primary uppercase">
            Terms &amp; Conditions
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <div className="mt-10 space-y-6 text-base leading-8 text-muted">
            <p>
              Welcome to CompleteAutomate. By accessing our website or using our services, you
              agree to be bound by these Terms &amp; Conditions. Please read them carefully.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">Services</h2>
            <p>
              CompleteAutomate provides automation consulting, AI system development, and related
              technology services. The specific scope, deliverables, and timelines for any
              engagement will be defined in a separate agreement or statement of work.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              User Responsibilities
            </h2>
            <p>By using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide accurate and complete information necessary for service delivery
              </li>
              <li>
                Use our services in compliance with all applicable laws and regulations
              </li>
              <li>
                Not misuse our systems, attempt unauthorized access, or disrupt service operations
              </li>
              <li>
                Maintain the confidentiality of any access credentials or API keys we provide
              </li>
            </ul>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Intellectual Property
            </h2>
            <p>
              All content, software, documentation, and deliverables provided by CompleteAutomate
              — including code, designs, workflows, and methodologies — are the intellectual
              property of CompleteAutomate unless otherwise specified in a written agreement.
              Upon full payment, clients receive a license to use deliverables for their intended
              business purpose.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
                Limitation of Liability
            </h2>
            <p>
              CompleteAutomate shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our services or website.
              Our total liability for any claim is limited to the amount paid by you for the
              specific service giving rise to the claim.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to our services at any time,
              without notice, for conduct that violates these terms or is otherwise harmful to
              our operations or other users. Clients may terminate engagements per the terms of
              their individual agreement.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State
              of Delaware, without regard to its conflict of law provisions. Any disputes shall
              be resolved in the courts of Delaware.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms &amp; Conditions from time to time. Changes will be
              posted on this page with an updated &quot;Last updated&quot; date. Continued use of
              our services after changes constitutes acceptance of the new terms.
            </p>

            <hr className="my-8 border-border/40" />

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Contact Information
            </h2>
            <p>
              If you have questions about these terms, please contact us at{' '}
              <a
                className="text-primary transition hover:text-primary-dark"
                href="mailto:hello@completeautomate.com"
              >
                hello@completeautomate.com
              </a>
              .
            </p>

            <p className="text-sm text-muted">Last updated: April 1, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
