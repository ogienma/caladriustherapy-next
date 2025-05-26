import { createClient } from 'contentful-management';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Contentful Management client
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});

interface TeamMemberYaml {
  id: string;
  name: string;
  letters: string;
  title: string;
  image: string;
  email: string;
  tagline: string;
  bio: string;
  gender: string;
  linkedin?: string;
  psychologytoday?: string;
  badges?: string[];
}

interface TeamYaml {
  members: TeamMemberYaml[];
}

async function uploadTeamMembers() {
  try {
    // Read and parse YAML file
    const yamlPath = path.join(process.cwd(), './team.yaml');
    const yamlContent = fs.readFileSync(yamlPath, 'utf8');
    const teamData = yaml.load(yamlContent) as TeamYaml;

    console.log(`Found ${teamData.members.length} team members to upload`);

    // Get the space
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    // Get the environment
    const environment = await space.getEnvironment('master');

    // Process each team member
    for (const member of teamData.members) {
      try {
        // Create entry
        const entry = await environment.createEntry('teamMember', {
          fields: {
            name: {
              'en-US': member.name
            },
            isProvider: {
              'en-US': true
            },
            gender: {
              'en-US': 'Female'
            },
            email: {
              'en-US': member.email
            },
            credentials: {
              'en-US': [member.letters]
            },
            titles: {
              'en-US': [member.title]
            },
            linkedIn: {
              'en-US': member.linkedin
            },
            psychologyToday: {
              'en-US': member.psychologytoday
            }
          }
        });

        // Publish the entry
        await entry.publish();

        console.log(`Successfully uploaded ${member.name}`);
      } catch (error) {
        console.error(`Error uploading ${member.name}:`, error);
      }
    }

    console.log('Team member upload completed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the upload
uploadTeamMembers(); 