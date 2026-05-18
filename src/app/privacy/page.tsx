import { JSX } from 'react';

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.12)] backdrop-blur-xl sm:p-12">
          <p className="text-xs font-semibold tracking-[0.34em] text-primary uppercase">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
            Your privacy matters to us.
          </h1>
          <div className="mt-10 space-y-6 text-base leading-8 text-muted">
            <p>
              At CompleteAutomate, we are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when you use our website
              and services.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Information We Collect
            </h2>
            <p>
              We may collect the following types of information when you interact with our site or
              services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Personal Information:</strong> Name, email
                address, and any details you provide through our contact form.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> Pages visited, time spent,
                and interactions with our site, collected through analytics tools to help us improve
                your experience.
              </li>
              <li>
                <strong className="text-foreground">Communication Data:</strong> Records of
                correspondence if you email or message us.
              </li>
            </ul>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Improve our website, content, and service offerings</li>
              <li>Send occasional updates or relevant information (only with your consent)</li>
              <li>Monitor and analyze usage trends to enhance user experience</li>
            </ul>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share data with trusted service providers (e.g., hosting, analytics, email) who assist
              us in operating our business, provided they agree to keep your information
              confidential and use it solely for the purposes we specify.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">Cookies</h2>
            <p>
              Our website uses cookies — small text files stored on your device — to enhance
              functionality and analyze site traffic. You can control cookie preferences through
              your browser settings. Disabling cookies may affect certain features of the site.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Data Retention
            </h2>
            <p>
              We retain your personal information only as long as necessary to fulfill the purposes
              outlined in this policy, or as required by applicable law. When no longer needed, data
              is securely deleted or anonymized.
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your data, subject to legal obligations</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a
                className="text-primary transition hover:text-primary-dark"
                href="mailto:hello@completeautomate.com"
              >
                hello@completeautomate.com
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">Security</h2>
            <p>
              We implement industry-standard security measures — including encryption, access
              controls, and regular audits — to protect your personal information. However, no
              method of transmission or storage is completely secure, and we cannot guarantee
              absolute security.
            </p>

            <hr className="my-8 border-border/40" />

            <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
              Contact Information
            </h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy, reach out
              to us at{' '}
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
