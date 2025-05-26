import { NextResponse } from 'next/server';
import { getTeamMembers } from '@/lib/contentful';

export async function GET() {
  try {
    const members = await getTeamMembers();
    return NextResponse.json(members);
  } catch (error) {
    console.error('Error in team members API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
} 