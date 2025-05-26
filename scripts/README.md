# Contentful Team Member Upload Script

This script uploads team member data from `team.yaml` to your Contentful space.

## Prerequisites

- Node.js 16 or higher
- npm or yarn
- Contentful space ID and Management API token

## Setup

1. Create a `.env` file in the `scripts` directory with your Contentful credentials:
   ```
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_MANAGEMENT_TOKEN=your_management_api_token
   ```

   Note: You'll need a Management API token, not a regular Content Delivery API token. You can create one in your Contentful space settings under "API keys" > "Content Management tokens".

2. Install dependencies:
   ```bash
   cd scripts
   npm install
   ```

## Usage

Run the upload script:
```bash
npm run upload
```

The script will:
1. Read the team member data from `app/data/team.yaml`
2. Create entries in Contentful for each team member
3. Publish the entries
4. Log the progress and any errors

## Error Handling

- If an error occurs during the upload of a specific team member, the script will log the error and continue with the next member
- If a critical error occurs (e.g., YAML parsing error), the script will exit with status code 1 