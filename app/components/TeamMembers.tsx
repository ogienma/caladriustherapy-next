import { Grid, Text } from '@radix-ui/themes';
import { TeamMember } from '../types/team';
import TherapistCard from './TherapistCard';

interface TeamMembersProps {
  members: TeamMember[];
}

export function TeamMembers({ members }: TeamMembersProps) {
  if (!members.length) {
    return (
      <div className="text-center py-8">
        <Text size="5" weight="medium" color="gray">
          No matching providers found
        </Text>
      </div>
    );
  }

  return (
    <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
      {members.map((member) => (
        <TherapistCard key={member.id} therapist={member} />
      ))}
    </Grid>
  );
} 