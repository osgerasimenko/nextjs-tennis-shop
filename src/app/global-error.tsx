"use client";
import { FC } from 'react';

import { Error as ErrorComponent } from '@/components/Error/Error';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: FC<Props> = ({ error, reset }) => (
  <html>
    <body>
      <ErrorComponent error={error} reset={reset} />
    </body>
  </html>
);

export default GlobalError;
