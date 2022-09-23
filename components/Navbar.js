import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useWallet } from "use-wallet";

import NextLink from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const wallet = useWallet();

  return (
    <Box>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        pos="fixed"
        top="0"
        w={"full"}
        minH={"60px"}
        boxShadow={"sm"}
        zIndex="999"
        justify={"center"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(26, 32, 44, 0.8)"
          ),
        }}
      >
        <Container as={Flex} maxW={"7xl"} align={"center"}>
          <Flex flex={{ base: 1 }} justify="start" ml={{ base: -2, md: 0 }}>
            <Heading
              textAlign="left"
              fontFamily={"heading"}
              color={useColorModeValue("teal.800", "white")}
              as="h2"
              size="lg"
            >
              <Box
                as={"span"}
                color={useColorModeValue("teal.400", "teal.300")}
                position={"relative"}
                zIndex={10}
                _after={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  w: "full",
                  h: "30%",
                  bg: useColorModeValue("teal.100", "teal.900"),
                  zIndex: -1,
                }}
              >
                <img
                  width={"40px"}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA6dJREFUeF7tnTFuWzEQBakupU8iwEDq3ManEFIZOYWPodqN6wAGfBKrc6cA7lL+nQUeCU7qLEm/HQ35v76k0+18vQ//bZvASQC27f33Hy4Ae/dfADbvvwAIgIfArRnwDLB1+z0Ebt5+ARAA7wPszYBngL3772Xg5v0XAAHwPsDWDHgG2Lr9XgZu3v4GAP7++YVC/Hl5Q/V0fjT5GCO9fjo/3gJoA+gfQOcXAHgIpA0QgKxBNQBUQBpgOr8ACAB7KNQtIHuI1QDwKgQKwKsADaAB0IuIKowCiBbvfYAxaAMEwMtA9CKkAKLJNYAGSBuMzu99AKgA2gBqMDq/AAiAN4IIA/QVqAF8O5jwh29E4S0ArX7wQySdP11PDULXLwA0QVgvAOF7+bB/uFwABABDRAZwCyDpNdRqAA3QgFF9CA1Qz66lUgNogBaQqoNogGpyTXUaQAM0oVQbRgPUcmur0gAaoA2mykAaoJJaY40G0ACNOB0fSgMcz6y1QgNogFagjg6GDfDy43x0zv/+/9PXB6pfvTidnwCECRIADYAQpAbVACh+XqwBNACiSAOg+PLFGkADIAo1AIovX6wBNACiUAOg+PLFGkADIAo1AIovX6wBNACiUAOg+PLFGkADIAo1AIovXxw3wOv1ds/H4ApSCZwEIBX9HPMKwBx9iK1CAGLRzzGxAMzRh9gqBCAW/RwTC8AcfYitQgBi0c8xsQDM0YfYKgQgFv0cEwvAHH2IrUIAYtHPMbEAzNGH2CoEIBb9HBMLwBx9iK1CAGLRzzEx/nAo/cULGsP78ycdAtU//n5A9bSYfsOIAMAOCED4K140APvpWg2gAbK/GgbzHxpAA1CGUL1nAM8ACCBa7FWAl4GIIQ+BKL4x3ALcAiBCrNwtwC0AEeQWgOJzCxi+F+B7AfA1xMq9EeSNIEYQrPYqwKsAiBArx1cB6Y+H0z8gfQZZff3xJ4JWD3D19QsAM/AQgM0DFAABQAmkzzBuAah9wy0A5rd8gG4BkIDVA1x9/W4BmwMsAAKQ/abQ1RW6+vo1gAbQAIQBDUDSG+tfRwuAAKAEvBN4YU+0pANc3gC3M/tsIMJ/jPgzhXT9tJ4CROfHTwXTBaRfwXT9tF4Awo+U0QbSegEQAMoQqncLQPHxYg2gAThFYAQNAMLrKNUAGqCDo/IYGqAcXU+hBtAAPSQVR9EAxeC6yjSABuhiqTSOBijF1lekATRAH02FkTRAIbTOEg2gATp5OjzWP4LKiw42hPSbAAAAAElFTkSuQmCC"
                />
              </Box>
            </Heading>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            <Button
              fontSize={"md"}
              fontWeight={600}
              variant={"link"}
              display={{ base: "none", md: "inline-flex" }}
            >
              <NextLink href="/campaign/new">Create Campaign</NextLink>
            </Button>

            {wallet.status === "connected" ? (
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {wallet.account.substr(0, 10) + "..."}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => wallet.reset()}>
                    {" "}
                    Disconnect Wallet{" "}
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <div>
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"md"}
                  fontWeight={600}
                  color={"white"}
                  bg={"teal.400"}
                  href={"#"}
                  _hover={{
                    bg: "teal.300",
                  }}
                  onClick={() => wallet.connect()}
                >
                  Connect Wallet{" "}
                </Button>
              </div>
            )}
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
}
