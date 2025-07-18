import { Avatar, Badge, Box, Card, Flex, IconButton, Text, Tooltip } from "@radix-ui/themes";
import { TeamMember } from "../types/team";
import { RiHourglassLine } from "@remixicon/react";

interface TherapistCardProps {
  therapist: TeamMember;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  const headshotUrl = therapist.headshot ? `https:${therapist.headshot}` : undefined;

  return (
    <Box>
      <Card asChild variant="classic">
      <a href={`https://caladriustherapy.com/about/#${therapist.slug}`}>
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
                <Flex gap="2">
                  {therapist.name}
                  {therapist.availability.toLowerCase() === "waitlist" && (
                    <Tooltip content="Fully booked but welcomes you to join their waitlist" delayDuration={0}>
                      <Badge color="gray" size="1" radius="full" variant="soft">Waitlist</Badge>
                      </Tooltip>
                  )}
                  {therapist.isIntakeOnly && (
                    <Tooltip content="Provides a specialized intake to determine treatment needs" delayDuration={0}>
                      <Badge color="gray" size="1" radius="full" variant="soft">Intake only</Badge>
                    </Tooltip>
                  )}
                </Flex>
              </Text>
              <Text as="div" size="2" color="gray">
                {therapist.credentials.join(", ")}
              </Text>
            </Box>
          </Flex>
        </Flex>
        </a>
      </Card>
    </Box>
  );
}
