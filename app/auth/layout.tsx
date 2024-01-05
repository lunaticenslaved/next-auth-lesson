import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return <div className="h-full flex items-center justify-center bg-transparent">{children}</div>;
}
