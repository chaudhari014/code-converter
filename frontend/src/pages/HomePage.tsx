import {
  Box,
  Container,
  HStack,
  Select,
  Stack,
  Button,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import API from "../API";
import CodeEditor from "../component/CodeEditore";
import Loading from "../component/Loading";
import Markdown from "react-markdown";

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState("JavaScript");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("Write your code here");
  const [message, setMessage] = useState(
    "# Hi there, *Output will be here...*!"
  );

  const messageBoxRef = useRef<HTMLDivElement>(null);
  const handleConvert = async () => {
    messageBoxRef.current?.focus();
    if (code && language) {
      let obj = {
        code: code,
        language: language,
      };
      setLoading(true);
      try {
        const response = await fetch(`${API}/convert`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        if (response.ok) {
          const data = await response.json();
          setLoading(false);
          setMessage(data?.code);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };
  const handleDebug = async () => {
    messageBoxRef.current?.focus();
    if (code) {
      let obj = {
        code: code,
      };
      setLoading(true);
      try {
        const response = await fetch(`${API}/debug`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        if (response.ok) {
          const data = await response.json();
          setLoading(false);
          setMessage(data?.code);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };
  const handleQualityCheck = async () => {
    messageBoxRef.current?.focus();
    if (code) {
      let obj = {
        code: code,
      };
      setLoading(true);
      try {
        const response = await fetch(`${API}/debug`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        if (response.ok) {
          const data = await response.json();
          setLoading(false);
          setMessage(data?.code);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  return (
    <Box color={"white"}>
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        justifyContent={"space-around"}
        alignItems={"center"}
        bg={"#E3F2FD"}
        padding={"15px"}
      >
        <HStack>
          <Select
            bg="tomato"
            borderColor="tomato"
            color="black"
            width={"200px"}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            isDisabled={loading}
          >
            <option value="javaScript">JavaScript</option>
            <option value="python">Python</option>
            <option value="php">php</option>
            <option value="java">Java</option>
          </Select>
          <Button
            colorScheme="green"
            onClick={handleConvert}
            isDisabled={loading}
          >
            CONVERT
          </Button>
        </HStack>
       
        <HStack justifyContent={"center"}>
          <Button colorScheme="red" onClick={handleDebug} isDisabled={loading}>
            DEBUG
          </Button>
          <Button
            colorScheme="telegram"
            onClick={handleQualityCheck}
            isDisabled={loading}
          >
            QUALITY CHECK
          </Button>
        </HStack>
      </Stack>

      <Container
        maxW={"100%"}
        style={{ minHeight: "calc(100vh - 195px)", overflow: "hidden" }}
        margin={"0px"}
        padding={"0px"}
      >
        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          margin={"0px"}
          spacing={0}
          bg={"black"}
        >
          <Box width={{ base: "100%", md: "100%", lg: "50%" }}>
            <CodeEditor code={code} onChange={handleCodeChange} />
          </Box>
          <Box
            overflowY={"auto"}
            className="custom-scrollbar"
            width={{ base: "100%", md: "100%", lg: "50%" }}
            height={"calc(100vh - 195px)"}
            padding={"10px"}
          >
            {loading ? (
              <Stack
                justifyContent={"center"}
                height={"calc(100vh - 195px)"}
                alignItems={"center"}
              >
                <Loading />
              </Stack>
            ) : (
              <Box
                style={{ paddingLeft: "20px" }}
                ref={messageBoxRef}
                tabIndex={0}
              >
                <Markdown>{message}</Markdown>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
