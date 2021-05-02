import { Box, Container, Divider, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import "fontsource-open-sans"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navbar"
import { ExternalLinkIcon } from "@chakra-ui/icons"

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
        <Text fontSize="sm"> © {new Date().getFullYear()}, TrumpWisdom.com</Text>
        <Spacer />
        <Text fontSize="sm"> Made with ❤️ by <Link href="https://www.linkedin.com/in/stephenharrison/">Stephen Harrison <ExternalLinkIcon /></Link></Text>

      </Flex>
      <Text fontSize="sm">Thanks to <Link href="https://www.washingtonpost.com/politics/2021/01/24/trumps-false-or-misleading-claims-total-30573-over-four-years/">astonishing work <ExternalLinkIcon /></Link> by The Washington Post,
         we can <Link href="https://www.washingtonpost.com/graphics/politics/trump-claims-database/csv/wapo_trumpclaims_export-012021.csv.zip">download <ExternalLinkIcon /></Link> the complete list of
        Trump’s false or misleading claims total 30,573 over 4 years. So I did.
        </Text>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
