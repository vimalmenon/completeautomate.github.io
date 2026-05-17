'use client';

import { JSX } from 'react';

import { AdminSideNavigation } from '@component';
import { Env } from '@constants';
import { AdminContext, AuthContext, useAuthContext } from '@context';

import { notFound, useRouter } from 'next/navigation';

function AdminGuard({ children }: { children: React.ReactNode }): JSX.Element {
  const { configured, loading, user } = useAuthContext();
  const router = useRouter();

  if (!Env.ADMIN_ENABLED) {
    notFound();
  }

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
      </main>
    );
  }

  // Auth is configured but user isn't logged in — redirect to login
  if (configured && !user) {
    router.replace('/login');
    return <></>;
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

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <AuthContext>
      <AdminGuard>{children}</AdminGuard>
    </AuthContext>
  );
}
