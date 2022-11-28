import * as React from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { ButtonGroup } from "@mui/material";

const action = (
  <Stack spacing={2} direction="row">
    <ButtonGroup>
      <Button variant="contained" color="success">
        C
      </Button>
      <Button variant="text" color="success">
        0
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="contained">D</Button>
      <Button variant="text">0</Button>
    </ButtonGroup>
  </Stack>
);

export default function DenseTable() {
  return (
    <Stack spacing={2.3}>
      <SnackbarContent message="YYYY-MM-DD" action={action} />
      <SnackbarContent message="YYYY-MM-DD" action={action} />
      <SnackbarContent message="YYYY-MM-DD" action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
      <SnackbarContent message={"YYYY-MM-DD"} action={action} />
    </Stack>
  );
}
