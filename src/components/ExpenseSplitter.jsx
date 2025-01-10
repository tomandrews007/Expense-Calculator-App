import React, { useState } from 'react'
import {
  Box,
  Button,
  VStack,
  useToast
} from '@chakra-ui/react'
import ParticipantList from './ParticipantList'
import SettlementPlan from './SettlementPlan'
import { calculateSettlements } from '../utils/calculations'

function ExpenseSplitter() {
  const [participants, setParticipants] = useState([
    { id: 1, name: '', amount: '' }
  ])
  const [settlements, setSettlements] = useState([])
  const toast = useToast()

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
      <ParticipantList 
        participants={participants} 
        setParticipants={setParticipants} 
      />
      <Button 
        colorScheme="blue" 
        onClick={calculateSplit}
        isDisabled={participants.length < 2}
        w="200px"
      >
        Calculate Split
      </Button>
      {settlements.length > 0 && (
        <SettlementPlan settlements={settlements} />
      )}
    </VStack>
  )
}

export default ExpenseSplitter
