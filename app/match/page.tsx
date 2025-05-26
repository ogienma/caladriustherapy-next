"use client";

import { Flex, Text, Box, Card, RadioCards, Button, Progress, Separator } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import useSWR from 'swr';
import Image from 'next/image';
import { TeamMembers } from '@/app/components/TeamMembers';
import { TeamMember } from '@/app/types/team';

interface QuizOption {
  label: string;
  value: string;
  skip_filter?: boolean;
}

interface QuizQuestion {
  id: string;
  title: string;
  type: string;
  match_key: string;
  match_mode: string;
  options: QuizOption[];
}


const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MatchPage() {
  const { data: questions = [], isLoading: isLoadingQuestions } = useSWR<QuizQuestion[]>('/api/quiz', fetcher);
  const { data: teamMembers = [], isLoading: isLoadingTeamMembers } = useSWR<TeamMember[]>('/api/team-members', fetcher);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [matchingMembers, setMatchingMembers] = useState<TeamMember[]>([]);

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const updateMatchingMembers = (newAnswers: Record<string, string>) => {
    const matching = teamMembers.filter(member => {
      return questions.every(question => {
        const answer = newAnswers[question.id];
        if (!answer || question.options.find(opt => opt.value === answer)?.skip_filter) {
          return true;
        }

        const memberValue = member[question.match_key as keyof TeamMember];
        if (question.match_mode === 'equals') {
          return memberValue === answer;
        } else if (question.match_mode === 'contains_any') {
          return Array.isArray(memberValue) 
            ? memberValue.some((value: string) => value === answer)
            : memberValue === answer;
        }
        return true;
      });
    });

    setMatchingMembers(matching);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (teamMembers.length > 0 && questions.length > 0) {
      updateMatchingMembers(answers);
    }
  }, [answers, teamMembers, questions]);

  if (isLoadingQuestions || isLoadingTeamMembers) {
    return (
      <Flex direction="column" gap="4" p="4" style={{ minHeight: "100vh" }} align="center" justify="center">
        <Text size="5">Loading...</Text>
      </Flex>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Flex direction="column" gap="4" pt="4">
      <Box width="100%" style={{ maxWidth: '217px', margin: '0 auto' }}>
        <Image
          src="/images/caladrius/horizontal-black.png"
          alt="Caladrius Logo"
          height={48}
          width={217}
        />
      </Box>

      <Progress value={progress} size="2" />

      <Box maxWidth="600px" mx="auto" width="100%">
        <Text size="5" weight="bold">
          {currentQuestion?.title}
        </Text>
        <Box mt="4">
          <RadioCards.Root
            value={answers[currentQuestion?.id] || ""}
            onValueChange={handleAnswer}
            columns="1"
          >
            {currentQuestion?.options.map((option) => (
              <RadioCards.Item key={option.value} value={option.value}>
                <Flex direction="column" width="100%">
                  <Text weight="bold">{option.label}</Text>
                </Flex>
              </RadioCards.Item>
            ))}
          </RadioCards.Root>
        </Box>
        <Flex justify="between" mt="4">
          <Button
            variant="soft"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <RiArrowLeftLine />
            Previous
          </Button>
          <Button
            variant="soft"
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
            <RiArrowRightLine />
          </Button>
        </Flex>

        <Box mt="8">
          <TeamMembers members={matchingMembers} />
        </Box>
      </Box>
    </Flex>
  );
}
