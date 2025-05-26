import { createClient } from 'contentful';
import { TeamMember } from '../app/types/team';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

interface TeamMemberFields {
  contentTypeId: 'teamMember';
  fields: {
    name: string;
    email: string;
    gender: string;
    populations: string[];
    headshot?: Asset;
    credentials: string[];
  };
}

interface TeamMemberEntry extends Entry<TeamMemberFields> {
  contentTypeId: 'teamMember';
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const { items } = await client.getEntries<TeamMemberEntry>({
      content_type: 'teamMember',
      select: [
        'fields.name',
        'fields.gender',
        'fields.populations',
        'fields.email',
        'fields.headshot',
        'fields.credentials',
      ],
      include: 1,
    });

    return items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      email: item.fields.email,
      gender: item.fields.gender,
      populations: item.fields.populations || [],
      headshot: item.fields.headshot?.fields?.file?.url || '',
      credentials: item.fields.credentials || [],
    } as TeamMember));
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
}