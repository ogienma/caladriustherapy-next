import { Avatar, Box, Card, Flex, IconButton, Text, Tooltip } from "@radix-ui/themes";
import { TeamMember } from "../types/team";
import { RiHourglassLine } from "@remixicon/react";

interface TherapistCardProps {
  therapist: TeamMember;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  const headshotUrl = therapist.headshot ? `https:${therapist.headshot}` : undefined;

  return (
    <Box>
      <Card>
        <Flex gap="3" align="center" justify="between">
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
                {therapist.credentials.join(", ")}
              </Text>
            </Box>
          </Flex>
          {therapist.availability.toLowerCase() === "waitlist" && (
            <Tooltip content="This therapist currently has a waitlist">
              <IconButton radius="full" variant="ghost">
                <RiHourglassLine className="text-gray-300" size={20} />
              </IconButton>
            </Tooltip>
          )}
        </Flex>
      </Card>
    </Box>
  );
}
