import { createClient } from 'contentful';
import { TeamMember } from '../app/types/team';
import { Asset, Entry } from 'contentful';

// [
//   {
//     "id": "oQRniuO05E3QFZsZ4NbCw",
//     "name": "Emily Lee",
//     "email": "emily.lee@caladriustherapy.com",
//     "gender": "Female",
//     "populations": [
//       "Adult (18+)"
//     ],
//     "headshot": "//images.ctfassets.net/gkip9uuj6e3c/6eIws9YHH1wOAUMvoFS1n5/7f8f6c9b46abd66d436de243cdf637ea/headshot-emily-lee-500.jpg",
//     "credentials": [
//       "LCSW-A"
//     ]
//   },
//   {
//     "id": "5096dA0ggOlyOHRaqhVe20",
//     "name": "De'Erik Bradley",
//     "email": "deerik.bradley@caladriustherapy.com",
//     "gender": "Male",
//     "populations": [
//       "Adult (18+)",
//       "Couple"
//     ],
//     "headshot": "//images.ctfassets.net/gkip9uuj6e3c/6RVaLwbaR3ehWJMYZLsKrr/e12fdd83f714957cb73521223e34165a/headshot-deerik-bradley-500.jpg",
//     "credentials": [
//       "LCSW-A"
//     ]
//   }
// ]


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