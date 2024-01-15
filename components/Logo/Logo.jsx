import { Typography } from "@mui/joy";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <Typography onClick={() => router.push("/")} sx={{ cursor: "pointer" }}>
      Logo
    </Typography>
  );
};

export default Logo;
