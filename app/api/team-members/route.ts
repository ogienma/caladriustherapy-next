import { NextResponse } from 'next/server';
import { getTeamMembers } from '@/lib/contentful';

export async function GET() {
  try {
    const members = await getTeamMembers();
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json(
      { error: 'failed to fetch' },
      { status: 500 }
    );
  }
} 