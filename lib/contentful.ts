import { createClient } from 'contentful';
import { TeamMember } from '../app/types/team';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

interface TeamMemberFields extends EntrySkeletonType {
  contentTypeId: 'teamMember';
  fields: {
    name: string;
    email: string;
    gender: string;
    populations: string[];
    headshot?: Asset;
  };
}

interface TeamMemberEntry extends Entry<TeamMemberFields> {
  contentTypeId: 'teamMember';
}

// [
//   {
//     "id": "5096dA0ggOlyOHRaqhVe20",
//     "name": "De'Erik Bradley",
//     "email": "deerik.bradley@caladriustherapy.com",
//     "headshot": {
//       "metadata": {
//         "tags": [],
//         "concepts": []
//       },
//       "sys": {
//         "space": {
//           "sys": {
//             "type": "Link",
//             "linkType": "Space",
//             "id": "gkip9uuj6e3c"
//           }
//         },
//         "id": "6RVaLwbaR3ehWJMYZLsKrr",
//         "type": "Asset",
//         "createdAt": "2025-05-26T00:35:22.477Z",
//         "updatedAt": "2025-05-26T00:35:22.477Z",
//         "environment": {
//           "sys": {
//             "id": "master",
//             "type": "Link",
//             "linkType": "Environment"
//           }
//         },
//         "publishedVersion": 3,
//         "revision": 1,
//         "locale": "en-US"
//       },
//       "fields": {
//         "title": "headshot-deerik-bradley-500",
//         "file": {
//           "url": "//images.ctfassets.net/gkip9uuj6e3c/6RVaLwbaR3ehWJMYZLsKrr/e12fdd83f714957cb73521223e34165a/headshot-deerik-bradley-500.jpg",
//           "details": {
//             "size": 61082,
//             "image": {
//               "width": 500,
//               "height": 500
//             }
//           },
//           "fileName": "headshot-deerik-bradley-500.jpg",
//           "contentType": "image/jpeg"
//         }
//       }
//     },
//     "gender": "Male",
//     "populations": [
//       "Adult (18+)",
//       "Couple"
//     ]
//   },
//   {
//     "id": "oQRniuO05E3QFZsZ4NbCw",
//     "name": "Emily Lee",
//     "email": "emily.lee@caladriustherapy.com",
//     "headshot": {
//       "metadata": {
//         "tags": [],
//         "concepts": []
//       },
//       "sys": {
//         "space": {
//           "sys": {
//             "type": "Link",
//             "linkType": "Space",
//             "id": "gkip9uuj6e3c"
//           }
//         },
//         "id": "6eIws9YHH1wOAUMvoFS1n5",
//         "type": "Asset",
//         "createdAt": "2025-05-26T00:35:52.393Z",
//         "updatedAt": "2025-05-26T00:35:52.393Z",
//         "environment": {
//           "sys": {
//             "id": "master",
//             "type": "Link",
//             "linkType": "Environment"
//           }
//         },
//         "publishedVersion": 3,
//         "revision": 1,
//         "locale": "en-US"
//       },
//       "fields": {
//         "title": "headshot-emily-lee-500",
//         "file": {
//           "url": "//images.ctfassets.net/gkip9uuj6e3c/6eIws9YHH1wOAUMvoFS1n5/7f8f6c9b46abd66d436de243cdf637ea/headshot-emily-lee-500.jpg",
//           "details": {
//             "size": 46844,
//             "image": {
//               "width": 500,
//               "height": 500
//             }
//           },
//           "fileName": "headshot-emily-lee-500.jpg",
//           "contentType": "image/jpeg"
//         }
//       }
//     },
//     "gender": "Female",
//     "populations": [
//       "Adult (18+)"
//     ]
//   }
// ]


export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const { items } = await client.getEntries({
      content_type: 'teamMember',
      select: [
        'fields.name',
        'fields.gender',
        'fields.populations',
        'fields.email',
        'fields.headshot',
      ],
      include: 1,
    });

    return items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      email: item.fields.email,
      gender: item.fields.gender,
      populations: item.fields.populations,
      headshot: item.fields.headshot?.fields?.file?.url || '',
    }));
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
}