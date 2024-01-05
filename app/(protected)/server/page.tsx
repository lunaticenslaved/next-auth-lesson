import { UserInfo } from '@/components/auth/user-info';
import { currentUser } from '@/lib/auth';

export default async function ServerPage() {
  const user = await currentUser();

  return <UserInfo label="Server component" user={user} />;
}