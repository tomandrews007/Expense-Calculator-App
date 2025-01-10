import React, { useState, useEffect } from 'react'
import {
  VStack,
  Button,
  useToast,
  Text,
  HStack,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Badge
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ParticipantList from './ParticipantList'
import SettlementPlan from './SettlementPlan'
import { calculateSettlements } from '../utils/calculations'

const MotionBox = motion(Box)

function ExpenseSplitter() {
  const [participants, setParticipants] = useState([
    { id: 1, name: '', amount: '' }
  ])
  const [settlements, setSettlements] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    average: 0
  })
  const toast = useToast()

  useEffect(() => {
    const total = participants.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)
    const average = participants.length ? total / participants.length : 0
    setStats({ total, average })
  }, [participants])

  const calculateSplit = () => {
    if (!validateInputs()) {
      toast({
        title: 'Invalid Input',
        description: 'Please fill in all fields with valid amounts',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    const result = calculateSettlements(participants)
    setSettlements(result)
  }

  const validateInputs = () => {
    return participants.every(p => 
      p.name.trim() && 
      !isNaN(p.amount) && 
      Number(p.amount) > 0
    )
  }

  return (
    <VStack spacing={6} w="100%">
      <StatGroup w="100%" bg="blue.50" p={4} borderRadius="lg" shadow="sm">
        <Stat>
          <StatLabel>Total Expenses</StatLabel>
          <StatNumber>
            <MotionBox
              display="inline-block"
              animate={{ scale: stats.total ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              ${stats.total.toFixed(2)}
            </MotionBox>
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Average Per Person</StatLabel>
          <StatNumber>${stats.average.toFixed(2)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Participants</StatLabel>
          <StatNumber>
            <Badge colorScheme="blue" fontSize="lg" p={2}>
              {participants.length}
            </Badge>
          </StatNumber>
        </Stat>
      </StatGroup>

      <ParticipantList 
        participants={participants} 
        setParticipants={setParticipants} 
      />

      <Button 
        colorScheme="blue"
        size="lg"
        onClick={calculateSplit}
        isDisabled={participants.length < 2}
        w="200px"
        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
        transition="all 0.2s"
      >
        Calculate Split
      </Button>

      {settlements.length > 0 && (
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          w="100%"
        >
          <SettlementPlan settlements={settlements} />
        </MotionBox>
      )}
    </VStack>
  )
}

export default ExpenseSplitter
