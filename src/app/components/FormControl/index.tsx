import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";
import { getData } from "@services/client";
import { useEffect } from "react";
import { filtaredData } from "@contexts/PageStateContext";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

interface FormControlProps {
  objectKey: "idCondutor" | "idVeiculo" | "idCliente";
}

export function FormControlComp({ objectKey }: FormControlProps) {
  const { state } = useStateContext();

  const {
    options,
    ids,
    handleIdChange,
    setClients,
    setConductors,
    setVehicles,
    filtaredData,
  } = usePageStateContext();

  useEffect(() => {
    if (state === "deslocamento") {
      const get = async () => {
        const [dataClient, dataConductor, dataVehicle] = await Promise.all([
          getData("cliente"),
          getData("condutor"),
          getData("veiculo"),
        ]);

        setClients(dataClient);
        setConductors(dataConductor);
        setVehicles(dataVehicle);
      };

      get();
    }
  }, []);

  return (
    <>
      <Box
        width={{ width: "100%" }}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{objectKey}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ids[objectKey] || []}
            label={objectKey}
            onChange={(e) => handleIdChange(e, objectKey)}
          >
            {options[objectKey]?.map((item) => {
              const filtaredDataParams: filtaredData = {
                objectKey,
                id: item.id,
              };

              return (
                <MenuItem
                  key={item.id}
                  value={item.id}
                  onClick={() => filtaredData(filtaredDataParams)}
                >
                  {item.id}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
