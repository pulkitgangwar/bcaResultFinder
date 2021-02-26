import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SearchForm = (props) => {
  const classes = useStyles();

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

/*
<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Search Results
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
            props.history.push(`/result/${year}/${name}/${semester}`);
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            select
            value={year}
            onChange={e => setYear(e.target.value)}
            required
            fullWidth
            id="year"
            label="Admission Year"
            name="year"
          >
            <MenuItem key={1} value={2016}>
              2016
            </MenuItem>
            <MenuItem key={2} value={2017}>
              2017
            </MenuItem>
            <MenuItem key={3} value={2018}>
              2018
            </MenuItem>
            <MenuItem key={4} value={2019}>
              2019
            </MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            select
            value={semester}
            onChange={e => setSemester(e.target.value)}
            required
            fullWidth
            id="semester"
            label="Semester"
            name="semester"
          >
            <MenuItem key={1} value={1}>
              1st Semester
            </MenuItem>
            <MenuItem key={2} value={2}>
              2nd Semester
            </MenuItem>
            <MenuItem key={3} value={3}>
              3rd Semester
            </MenuItem>
            <MenuItem key={4} value={4}>
              4th Semester
            </MenuItem>
            <MenuItem key={5} value={5}>
              5th Semester
            </MenuItem>
            <MenuItem key={6} value={6}>
              6th Semester
            </MenuItem>
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Get Result
          </Button>
        </form>
      </div>
    </Container>
*/
