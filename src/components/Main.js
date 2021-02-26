import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  MenuButton,
  Spacer,
  Box,
  Menu,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Main = (props) => {
  return (
    <Box>
      <Flex p="3" backgroundColor="teal" alignItems="center">
        <Box>
          <Heading color="white">
            <Link to="/">BCA Results</Link>
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton as={Button} backgroundColor="white" color="black">
              All Results
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/results/2019/1">2019 FIRST SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2018/3">2018 THIRD SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2018/2">2018 SECOND SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2018/1">2018 FIRST SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2017/5">2017 FIFTH SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2017/4">2017 FOURTH SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2017/3">2017 THIRD SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2016/6">2016 SIXTH SEM</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/results/2016/5">2016 FIFTH SEM</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Main;
