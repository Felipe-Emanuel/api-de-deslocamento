import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSearch } from "@hooks/useSearch";
import { Normalize } from "@/src/functions/Normalize";

interface SearchProps {
  size?: "small" | "medium";
  className?: string;
}

export function Search({ size = "medium", className = "" }: SearchProps) {
  const { capitalizeName } = Normalize();
  const { filteredData, state, handleOptionChange } = useSearch();

  return (
    <Autocomplete
      onChange={handleOptionChange}
      className={className}
      size={size}
      key={state}
      id={`${state} autocomplete`}
      options={filteredData || []}
      sx={{ width: 180 }}
      renderInput={(params) => (
        <TextField
          {...params}
          color="warning"
          variant="standard"
          size="medium"
          label={capitalizeName(state!)}
        />
      )}
    />
  );
}
