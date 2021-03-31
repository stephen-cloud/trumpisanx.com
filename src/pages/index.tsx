import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useState } from "react"
import SEO from "../components/seo"
const insults: string[] = require('../../insults.json');
const prefixes: string[] = require('../../prefixes.json');

function randomInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}

function randomPrefix() {
  return prefixes[Math.floor(Math.random() * prefixes.length)];
}

function Banner() {
  return (
    <Container maxWidth="6xl" centerContent>
      <Text fontSize="6xl">Trump is a {randomInsult()} {randomInsult()}</Text>
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
