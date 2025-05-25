import { RiUser3Line } from '@remixicon/react';
import { Card, Text } from '@radix-ui/themes';

interface TeamMember {
  id: string;
  name: string;
  letters: string;
  title: string;
  image: string;
  email: string;
  gender?: string;
  accepted_patient_types?: string[];
}

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {members.map((member) => (
        <Card key={member.id} className="p-4">
          <div className="flex items-center gap-4">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <RiUser3Line className="w-8 h-8 text-gray-400" />
              </div>
            )}
            <div>
              <Text size="4" weight="bold">
                {member.name}
              </Text>
              <Text size="2" color="gray">
                {member.letters}
              </Text>
              <Text size="2" color="gray">
                {member.title}
              </Text>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
} 