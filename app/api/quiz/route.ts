import { NextResponse } from 'next/server';
import quizData from '../../data/quiz.yaml';

export async function GET() {
  return NextResponse.json(quizData.questions);
} 