import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from "react"
import SEO from "../components/seo"

function Banner() {
  return (
    <Container centerContent>
      <Text fontSize="6xl">Trump is a Wanker</Text>
    </Container>
  )
}

function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <VStack spacing="8">
        <Banner />
      </VStack>
    </>
  )
}

export default IndexPage
