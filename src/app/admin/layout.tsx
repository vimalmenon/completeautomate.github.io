import { JSX } from 'react';

import { AdminSideNavigation } from '@component';
import { Env } from '@constants';
import { AdminContext } from '@context';

import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  description: 'This is the website for Complete Automate',
  title: 'Admin | Complete Automate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  if (!Env.ADMIN_ENABLED) {
    notFound();
  }
  return (
    <AdminContext>
      <main className="flex-1 bg-background text-foreground">
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <AdminSideNavigation />
            {children}
          </div>
        </section>
      </main>
    </AdminContext>
  );
}
