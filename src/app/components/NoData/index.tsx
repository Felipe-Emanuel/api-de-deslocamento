import Link from "next/link";
import { Button } from "@mui/material";
import { StateType } from "@contexts/StateContext";
import { useDebounce } from "@hooks/useDebounce";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

interface NoDataProps {
  section: StateType | string | undefined;
}

export function NoData({ section = "cliente" }: NoDataProps) {
  const { setState } = useStateContext();
  const { setPageState } = usePageStateContext();
  const { debounced } = useDebounce();

  const changeState = () => setPageState("cadastrar");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>
        Nenhum {section} registrado :{"("}
      </h2>
      <Link href={section}>
        <Button
          onClick={() => {
            //@ts-ignore
            setState(section);
            debounced(changeState, 150);
          }}
          variant="contained"
          color="secondary"
        >
          Cadastre meu primeiro {section}!
        </Button>
      </Link>
    </div>
  );
}
