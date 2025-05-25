import { useState } from 'react';
import { Card, Text, RadioGroup } from '@radix-ui/themes';
import quizData from '../data/quiz.yaml';
import { TeamMembers } from './TeamMembers';
import { useProviders } from '../hooks/useProviders';

interface QuizAnswer {
  questionId: string;
  value: string;
  matchKey: string;
  matchMode: 'equals' | 'contains_any';
}

export function Quiz() {
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const { providers, isLoading } = useProviders(answers);

  const handleAnswer = (questionId: string, value: string, matchKey: string, matchMode: 'equals' | 'contains_any') => {
    setAnswers((prev) => {
      const newAnswers = prev.filter((a) => a.questionId !== questionId);
      return [...newAnswers, { questionId, value, matchKey, matchMode }];
    });
  };

  return (
    <div className="space-y-8">
      {quizData.questions.map((question) => (
        <Card key={question.id} className="p-6">
          <Text size="5" weight="bold" className="mb-4">
            {question.title}
          </Text>
          <RadioGroup.Root
            value={answers.find((a) => a.questionId === question.id)?.value || ''}
            onValueChange={(value) => handleAnswer(question.id, value, question.match_key, question.match_mode)}
          >
            {question.options.map((option) => (
              <div key={option.value} className="flex items-center gap-2 mb-2">
                <RadioGroup.Item value={option.value} id={`${question.id}-${option.value}`} />
                <label htmlFor={`${question.id}-${option.value}`}>
                  <Text size="3">{option.label}</Text>
                </label>
              </div>
            ))}
          </RadioGroup.Root>
        </Card>
      ))}

      <div className="mt-8">
        <Text size="5" weight="bold" className="mb-4">
          Matching Providers
        </Text>
        {isLoading ? (
          <div className="text-center py-8">
            <Text size="5" weight="medium" color="gray">
              Loading providers...
            </Text>
          </div>
        ) : (
          <TeamMembers members={providers} />
        )}
      </div>
    </div>
  );
} 