import { Grid, Text, Flex } from '@radix-ui/themes';
import { TeamMember } from '../types/team';
import TherapistCard from './TherapistCard';

interface TherapistsProps {
  members: TeamMember[];
}

export function Therapists({ members }: TherapistsProps) {
  if (!members.length) {
    return (
      <Flex direction="column" gap="3" align="center" py="6">
        <Text size="4" weight="bold" align="center">
          No matches found — but we're here to help
        </Text>
        <Text size="3" color="gray" align="center">
          It looks like no therapists currently meet all of your preferences.
          Please <a href="mailto:hello@caladriustherapy.com" className="text-blue-600 hover:underline">contact us</a> and our team will gladly assist you in finding the right fit.
        </Text>
      </Flex>
    );
  }

  // Sort members so that waitlist members appear at the bottom
  const sortedMembers = [...members].sort((a, b) => {
    const aIsWaitlist = a.availability.toLowerCase() === "waitlist";
    const bIsWaitlist = b.availability.toLowerCase() === "waitlist";
    if (aIsWaitlist && !bIsWaitlist) return 1;
    if (!aIsWaitlist && bIsWaitlist) return -1;
    return 0;
  });

  return (
    <Grid columns={{ initial: "1", sm: "1", md: "2" }} gap="4">
      {sortedMembers.map((member) => (
        <TherapistCard key={member.id} therapist={member} />
      ))}
    </Grid>
  );
} 