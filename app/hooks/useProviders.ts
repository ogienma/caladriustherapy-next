import useSWR from 'swr';

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

interface QuizAnswer {
  questionId: string;
  value: string;
  matchKey: string;
  matchMode: 'equals' | 'contains_any';
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProviders(quizAnswers: QuizAnswer[] = []) {
  const { data: providers, error, isLoading } = useSWR<TeamMember[]>('/api/providers', fetcher);

  const filteredProviders = providers?.filter((provider) => {
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

  return {
    providers: filteredProviders || [],
    isLoading,
    error,
  };
} 