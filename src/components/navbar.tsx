import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup, Flex, Heading, Link, Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function NavBar({ siteTitle, ...rest }) {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue(<MoonIcon />, <SunIcon />)

  return (
    <Flex as="header" {...rest}>
      <Heading >
        <Link
          as={GatsbyLink}
          to="/"
          _hover={{ textDecor: "none" }}
        >
          {siteTitle}
        </Link>
      </Heading>
      <Spacer />
      <ButtonGroup variant="link" spacing={6}>
        <Button aria-label="toggle light dark mode" onClick={toggleMode}>{text}</Button>
      </ButtonGroup>
    </Flex>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
