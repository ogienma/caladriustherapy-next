import { NextResponse } from 'next/server';
import teamData from '../../data/team.yaml';

export async function GET() {
  return NextResponse.json(teamData.members);
} 