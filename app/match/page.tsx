"use client";

import { Flex, Text, Box, Card, RadioCards, Button, Progress, Separator } from "@radix-ui/themes";
import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import useSWR from 'swr';
import Image from 'next/image';
import { TeamMembers } from '../components/TeamMembers';

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

interface TeamMember {
  id: string;
  name: string;
  letters: string;
  title: string;
  image: string;
  email: string;
  gender?: string;
  accepted_patient_types?: string[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MatchPage() {
  const { data: questions = [], isLoading: isLoadingQuestions } = useSWR<QuizQuestion[]>('/api/quiz', fetcher);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Convert answers to the format expected by useProviders
  const quizAnswers = Object.entries(answers).map(([questionId, value]) => {
    const question = questions.find(q => q.id === questionId);
    return {
      questionId,
      value,
      matchKey: question?.match_key || '',
      matchMode: question?.match_mode as 'equals' | 'contains_any'
    };
  });

  // Fetch and filter providers
  const { data: providers = [], isLoading: isLoadingProviders } = useSWR<TeamMember[]>('/api/providers', fetcher);

  const filteredProviders = providers.filter((provider) => {
    return quizAnswers.every((answer) => {
      // Skip if the provider doesn't have the property
      if (!(answer.matchKey in provider)) {
        return false;
      }

      const providerValue = provider[answer.matchKey as keyof TeamMember];
      
      if (answer.matchMode === 'equals') {
        return providerValue === answer.value;
      } else if (answer.matchMode === 'contains_any') {
        // For arrays like accepted_patient_types
        if (Array.isArray(providerValue)) {
          return providerValue.includes(answer.value);
        }
        return false;
      }
      
      return true;
    });
  });

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
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

  if (isLoadingQuestions) {
    return (
      <Flex direction="column" gap="4" p="4" style={{ minHeight: "100vh" }} align="center" justify="center">
        <Text size="5">Loading quiz...</Text>
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
          priority
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
          <Text size="5" weight="bold" mb="4">
            Matching Providers
          </Text>
          {isLoadingProviders ? (
            <Text size="5" weight="medium" color="gray" align="center">
              Loading providers...
            </Text>
          ) : (
            <TeamMembers members={filteredProviders} />
          )}
        </Box>
      </Box>
    </Flex>
  );
}
