import React from 'react'
import {
  VStack,
  Box,
  Text,
  Divider,
  List,
  ListItem
} from '@chakra-ui/react'

function SettlementPlan({ settlements }) {
  const total = settlements.reduce((sum, s) => sum + s.amount, 0)

  return (
    <Box w="100%" p={6} borderWidth={1} borderRadius="lg" bg="white" shadow="md">
      <VStack align="stretch" spacing={4}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          Settlement Plan (Total: ${total.toFixed(2)})
        </Text>
        <Divider />
        <List spacing={3}>
          {settlements.map((settlement, index) => (
            <ListItem key={index} p={2} bg="gray.50" borderRadius="md">
              <Text>
                {settlement.from} pays {settlement.to} ${settlement.amount.toFixed(2)}
              </Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  )
}

export default SettlementPlan
