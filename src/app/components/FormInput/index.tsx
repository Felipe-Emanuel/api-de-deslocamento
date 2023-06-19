import { TextField, Box } from "@mui/material";
import { ChangeEventHandler } from "react";

type FormInputType = {
  nome?: string;
  cidade?: string;
  uf?: string;
  número?: number;
  Início?: Date;
  categoria?: string;
  habilitação?: number;
  motivo?: string;
  observação?: string;
  licença?: string;
  modelo?: string;
  fabricado?: Date;
};

interface FormInputProps {
  object: FormInputType;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export function FormInput({ object, onChange }: FormInputProps) {
  return (
    <Box
      width={{ width: "50%" }}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {Object.keys(object).map((key, i) => {
        const inputType = () => {
          if (key === "Início" || key === "fabricado") {
            return "date";
          }
          if (key === "número" || key === "habilitação") {
            return "number";
          }
          return "string";
        };

        const inputLabel = () => {
          if (key === "Início" || key === "fabricado") {
            return "";
          }
          return key.toUpperCase()
        }

        return (
          <TextField
            data-testid={key}
            key={i}
            onChange={onChange}
            name={key}
            id={key}
            type={inputType()}
            label={inputLabel()}
            color="warning"
            variant="standard"
            size="small"
          />
        );
      })}
    </Box>
  );
}
