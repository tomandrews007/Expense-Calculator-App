import React from 'react'
import {
  VStack,
  Box,
  Text,
  Divider,
  List,
  ListItem,
  Icon,
  HStack
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionListItem = motion(ListItem)

function SettlementPlan({ settlements }) {
  const total = settlements.reduce((sum, s) => sum + s.amount, 0)

  return (
    <Box w="100%" p={6} borderWidth={1} borderRadius="lg" bg="white" shadow="lg">
      <VStack align="stretch" spacing={4}>
        <Text fontSize="xl" fontWeight="bold" textAlign="center" color="blue.700">
          Settlement Plan
        </Text>
        <Text textAlign="center" color="gray.600">
          Total Amount: ${total.toFixed(2)}
        </Text>
        <Divider />
        <List spacing={3}>
          {settlements.map((settlement, index) => (
            <MotionListItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              p={4}
              bg="blue.50"
              borderRadius="md"
              _hover={{ bg: 'blue.100' }}
              transition="background 0.2s"
            >
              <HStack justify="space-between" align="center">
                <Text fontWeight="medium" color="blue.700">
                  {settlement.from}
                </Text>
                <HStack spacing={2}>
                  <Icon as={FaArrowRight} color="blue.500" />
                  <Text fontWeight="bold" color="green.600">
                    ${settlement.amount.toFixed(2)}
                  </Text>
                </HStack>
                <Text fontWeight="medium" color="blue.700">
                  {settlement.to}
                </Text>
              </HStack>
            </MotionListItem>
          ))}
        </List>
      </VStack>
    </Box>
  )
}

export default SettlementPlan
