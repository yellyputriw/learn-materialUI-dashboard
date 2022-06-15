import { Button, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { styled } from "@mui/system";

function TutorialApp() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#ddd",
    margin: 5,
    "&:hover": {
      backgroundColor: "red",
    },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<PowerSettingsNewIcon />}
        variant="contained"
        color="otherColor"
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" color="initial" component="p">
        p dengan ukuran h
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#ddd",
          margin: 5,
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        Uniq Button
      </Button>
      <BlueButton>custom Button</BlueButton>
    </div>
  );
}

export default TutorialApp;
