import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { TeamMember } from "../types/team";

interface TherapistCardProps {
  therapist: TeamMember;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  const headshotUrl = therapist.headshot ? `https:${therapist.headshot}` : undefined;

  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src={headshotUrl}
            radius="full"
            fallback={therapist.name.charAt(0)}
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              {therapist.name}
            </Text>
            <Text as="div" size="2" color="gray">
              {therapist.populations.join(", ")}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}
