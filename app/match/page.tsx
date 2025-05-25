"use client";

import { Flex, Text, Box, RadioGroup, RadioCards } from "@radix-ui/themes";
import { useState } from "react";
import { RiArrowLeftLine } from "@remixicon/react";

export default function MatchPage() {
  const [selectedGender, setSelectedGender] = useState<string>("");

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Box maxWidth="600px">
        <RadioCards.Root defaultValue="1" columns="1">
          <RadioCards.Item value="1">
            <Flex direction="column" width="100%">
              <Text weight="bold">8-core CPU</Text>
              <Text>32 GB RAM</Text>
            </Flex>
          </RadioCards.Item>
          <RadioCards.Item value="2">
            <Flex direction="column" width="100%">
              <Text weight="bold">6-core CPU</Text>
              <Text>24 GB RAM</Text>
            </Flex>
          </RadioCards.Item>
          <RadioCards.Item value="3">
            <Flex direction="column" width="100%">
              <Text weight="bold">4-core CPU</Text>
              <Text>16 GB RAM</Text>
            </Flex>
          </RadioCards.Item>
        </RadioCards.Root>
      </Box>
    </Flex>
  );
}
