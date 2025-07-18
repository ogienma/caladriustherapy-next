import { createClient } from 'contentful';
import { TeamMember, DEFAULT_TEAM_MEMBER } from '../app/types/team';
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
    appointmentModes: string[];
    isProvider: boolean;
    paymentOptions: string[];
    specialties: string[];
    availability: string;
    isIntakeOnly: boolean;
  };
}

interface TeamMemberEntry extends Entry<TeamMemberFields> {
  contentTypeId: 'teamMember';
}

function transformTeamMember(item: any): TeamMember {
  return {
    id: item.sys.id,
    name: item.fields.name,
    slug: item.fields.name.toLowerCase().replace(/ /g, '-'),
    email: item.fields.email,
    gender: item.fields.gender,
    isProvider: item.fields.isProvider,
    headshot: item.fields.headshot?.fields?.file?.url || DEFAULT_TEAM_MEMBER.headshot,
    populations: item.fields.populations || DEFAULT_TEAM_MEMBER.populations,
    credentials: item.fields.credentials || DEFAULT_TEAM_MEMBER.credentials,
    appointmentModes: item.fields.appointmentModes || DEFAULT_TEAM_MEMBER.appointmentModes,
    paymentOptions: item.fields.paymentOptions || DEFAULT_TEAM_MEMBER.paymentOptions,
    specialties: item.fields.specialties || DEFAULT_TEAM_MEMBER.specialties,
    availability: item.fields.availability || DEFAULT_TEAM_MEMBER.availability,
    isIntakeOnly: item.fields.isIntakeOnly ?? DEFAULT_TEAM_MEMBER.isIntakeOnly,
  };
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const { items } = await client.getEntries<TeamMemberEntry>({
      content_type: 'teamMember',
      select: [
        'fields.name',
        'fields.email',
        'fields.headshot',
        'fields.credentials',
        'fields.isProvider',
        'fields.gender',
        'fields.populations',
        'fields.appointmentModes',
        'fields.paymentOptions',
        'fields.specialties',
        'fields.availability',
        'fields.isIntakeOnly',
      ],
      include: 1,
    });

    return items.map(transformTeamMember);
  } catch (error) {
    throw error;
  }
}