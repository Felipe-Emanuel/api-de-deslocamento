import styles from "./FormInput.module.scss"
import { useInput } from "@hooks/useInput";
import { TextField, Box } from "@mui/material";
import { FormControlComp } from "../FormControl";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "../../data/hooks/usePageStateContext";

interface FormInputProps {
  handleClick?: () => void;
  id?: number;
  className?: string;
  isEdditForm?: boolean;
  isDisplacementForm?: boolean;
}

export const inputType = (objectKey: string) => {
  if (objectKey === "vencimento") {
    return "date";
  }

  if (
    objectKey === "número" ||
    objectKey === "habilitação" ||
    objectKey === "quilometragem" ||
    objectKey === "rodagem" ||
    objectKey === "fabricado" ||
    objectKey === "documento" ||
    objectKey === "quilometro_final"
  ) {
    return "number";
  }

  return "text";
};

export const inputLabel = (objectKey: string) => {
  if (objectKey === "vencimento") {
    return "";
  }

  if (objectKey === "quilometro_final") {
    return "QUILOMETRAGEM FINAL";
  }
  return objectKey.toUpperCase();
};

export function FormInput({
  id = 0,
  isEdditForm = false,
}: FormInputProps) {
  const {
    clientForm,
    conductorForm,
    displacementForm,
    vehicleForm,
    client,
    conductor,
    displacement,
    vehicle,
    updatedConductor,
    updateClient,
    updatedDisplacement,
    updatedVehicle,
  } = useInput()!;
  const { state, outHome, handleChange } = useStateContext();
  const { pageState } = usePageStateContext();

  const homeFormOptions = {
    cliente: client,
    condutor: conductor,
    deslocamento: displacement,
    veículo: vehicle,
  };

  const formOptions = {
    cliente: clientForm,
    condutor: conductorForm,
    deslocamento: displacementForm,
    veículo: vehicleForm,
  };

  const edditFormOptions = {
    cliente: updateClient?.(String(id)),
    condutor: updatedConductor?.(id),
    deslocamento: updatedDisplacement?.(id),
    veículo: updatedVehicle?.(id),
  };

  const form = outHome ? formOptions : homeFormOptions;
  const renderForm = isEdditForm ? edditFormOptions : form;

  return (
    <>
      {Object?.keys(renderForm[state ?? "cliente"]).map((objectKey, i) => {

        if (
          objectKey === "idCondutor" ||
          objectKey === "idVeiculo" ||
          objectKey === "idCliente"
        ) {
          return <FormControlComp key={i} objectKey={objectKey} />;
        }

        if (
          objectKey === "Início" ||
          objectKey === "deslocamento_final" ||
          objectKey === "quilometragem"
        ) {
          return null;
        }

        const inputValue = () => {
          if (objectKey === "id") {
            return id;
          }

          //@ts-expect-error: form não se adequa à tipagem de state (StateType)
          return renderForm[state!][objectKey] || "";
        };

        return (
          <Box
            key={i}
            width={{ width: isEdditForm || pageState === "cadastrar" ? "100%" : "25ch"}}
            component="form"
            sx={{
              "& > :not(style)": { my: 0.5, width: isEdditForm || pageState === "cadastrar" ? "100%" : "25ch", padding: objectKey === "vencimento" ? 1 : 0 },
              position: "relative"
            }}
            >
            <TextField
              InputProps={{
                readOnly: objectKey === "id",
              }}
              className={styles.formInput}
              autoComplete="autocomplete"
              required
              //@ts-ignore
              value={inputValue()}
              data-testid={objectKey}
              key={i}
              onChange={handleChange}
              name={objectKey}
              id={objectKey}
              type={inputType(objectKey)}
              label={inputLabel(objectKey)}
              color="warning"
              variant="standard"
              size="small"
            />
          </Box>
        );
      })}
    </>
  );
}
