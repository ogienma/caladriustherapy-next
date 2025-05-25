'use client';

import { Box, VStack,

 RadioCard 

 } from '@chakra-ui/react';

 const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
  { value: "astro", title: "Astro" },
]

export default function MatchPage() {
  return (
    <RadioCard.Root defaultValue="next">
    <RadioCard.Label>Select framework</RadioCard.Label>
    <VStack align="stretch">
      {items.map((item) => (
        <RadioCard.Item key={item.value} value={item.value}>
          <RadioCard.ItemHiddenInput />
          <RadioCard.ItemControl>
            <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
            <RadioCard.ItemIndicator />
          </RadioCard.ItemControl>
        </RadioCard.Item>
      ))}
    </VStack>
  </RadioCard.Root>
  );
} 