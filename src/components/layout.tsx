import { Box, Container, Divider, Flex, Link, Spacer, Text, VStack } from '@chakra-ui/react'
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navbar"
import "fontsource-open-sans"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container maxWidth="4xl">
      <NavBar my="4" siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Divider />
      <Box my="4" as="main">
        {children}
      </Box>
      <Divider />
      <Flex as="footer" my="4">
        © {new Date().getFullYear()}, Trump is ...
          <Spacer />
          Made with ❤️ by Stephen Harrison
        </Flex>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
