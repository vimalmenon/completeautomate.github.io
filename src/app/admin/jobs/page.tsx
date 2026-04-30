import { JSX } from 'react';

import { JobPage } from '@page';

export default function AdminJobsPage(): JSX.Element {
  return (
    <div className="space-y-6 lg:col-span-9">
      <JobPage />
    </div>
  );
}
