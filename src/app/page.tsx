import GithubIcon from "@/styles/GithubIcon";
import GoogleIcon from "@/styles/GoogleIcon";
import { Button, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack isInline>
      <Button
        leftIcon={<GithubIcon />}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        size="md"
        _hover={{ bg: "gray.700" }}
        _active={{
          bg: "gray.800",
          transform: "scale(0.95)",
        }}
        // onClick={(e) => signinWithGitHub()}
      >
        Sign In with GitHub
      </Button>
      <Button
        leftIcon={<GoogleIcon />}
        backgroundColor="white"
        color="gray.900"
        fontWeight="medium"
        variant="outline"
        size="md"
        _hover={{ bg: "gray.100" }}
        _active={{
          bg: "gray.100",
          transform: "scale(0.95)",
        }}
        // onClick={(e) => signinWithGoogle()}
      >
        Sign In with Google
      </Button>
    </Stack>
  );
}
