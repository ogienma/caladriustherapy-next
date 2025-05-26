// app/team/page.tsx
import { getTeamMembers } from '@/lib/contentful';

export const revalidate = 60;   // optional: ISR every minute

export default async function Team() {
  const members = await getTeamMembers();

  return (
    <pre>{JSON.stringify(members, null, 2)}</pre>
  );
}
