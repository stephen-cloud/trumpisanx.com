import { Button, Container, Flex, Spacer, Text, VStack } from '@chakra-ui/react';
import React, { useState } from "react";
import SEO from "../components/seo";
import Lie from '../lie';

const lies: Lie[] = require('../../data/lies.json');

function tellALie(): Lie {
  return lies[Math.floor(Math.random() * lies.length)];
}

function Lies() {
  const [lie, setLie] = useState<Lie>(tellALie());

  function onClick(event) {
    setLie(tellALie());
  }

  return (
    <>
      <Container maxWidth="100%" p={0}>
        <VStack spacing={8}>
          <Button
            size="sm"
            onClick={onClick}
          >More wisdom</Button>
          <Container maxWidth="80%">
            <VStack spacing={4}>
              <Text as="cite" fontSize="xl">{lie.claim}</Text>
              <Container maxWidth="100%">
                <Flex>
                  <Text>&mdash; {lie.location}, {lie.date}</Text>
                  <Spacer />
                  {
                    +lie.repeated_count > 0 ? <Text>Repeated: {lie.repeated_count}</Text> : <div />
                  }
                </Flex>
              </Container>
            </VStack>
          </Container>
          <Container maxWidth="100%" p={0}>

            <Text dangerouslySetInnerHTML={{ __html: lie.analysis }} />
          </Container>
        </VStack>
      </Container>
    </>
  )
}

function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <VStack spacing="8">
        <Lies />
      </VStack>
    </>
  )
}

export default IndexPage
