import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  FormControl,
  Button,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const SearchForm = (props) => {
  const [name, setName] = useState();
  const [semester, setSemester] = useState(4);
  const [year, setYear] = useState(2017);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/result/${year}/${name}/${semester}`);
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack
        w={["100%", "80%"]}
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={[4, 5, 6]}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Get your results
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  placeholder={"Enter your full name"}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Semester</FormLabel>
                <Select
                  onChange={(e) => setSemester(e.currentTarget.value)}
                  placeholder="Choose your semester"
                >
                  <option value="1">1st semester</option>
                  <option value="2">2nd semester</option>
                  <option value="3">3rd semester</option>
                  <option value="4">4th semester</option>
                  <option value="5">5th semester</option>
                  <option value="6">6th semester</option>
                </Select>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Year</FormLabel>
                <Select
                  onChange={(e) => setYear(e.currentTarget.value)}
                  placeholder="Choose your year"
                >
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Check result
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SearchForm;
