'use client'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEventHandler } from "react";

type FormInputType = {
  nome?: string;
  cidade?: string;
  uf?: string;
  número?: number;
  Início?: string;
  categoria?: string;
  habilitação?: string;
  motivo?: string;
  observação?: string;
  licença?: string;
  modelo?: string;
  fabricado?: string;
};

interface FormInputProps {
  object: FormInputType;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export function FormInput({ object, onChange }: FormInputProps) {
  return (
    <>
      <Box
        width={{ width: "50%" }}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {Object.keys(object).map((key, i) => (
          <TextField
            key={i}
            onChange={onChange}
            name={key}
            id={key}
            label={key.toUpperCase()}
            color="warning"
            variant="standard"
            size="small"
          />
        ))}
      </Box>
    </>
  );
}
