import Link from "next/link";
import { Button } from "@mui/material";
import { StateType } from "@contexts/StateContext";
import { useDebounce } from "@hooks/useDebounce";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

interface NoDataProps {
  noRouter?: boolean;
  section: StateType | string | undefined;
}

export function NoData({ section = "cliente", noRouter = false }: NoDataProps) {
  const { setState } = useStateContext();
  const { setPageState } = usePageStateContext();
  const { debounced } = useDebounce();

  const changePageState = () => setPageState("cadastrar");

  const normalizeSection = () => {
    if (section === "veiculo") {
      return "veículo";
    }

    return section;
  };

  const normalizePath = () => {
    if (section === "veículo") {
      return "veiculo";
    }

    return section;
  };

  const renderButton = () => (
    <Button
      onClick={() => {
        //@ts-ignore

        setState(normalizeSection());
        debounced(changePageState, 50);
      }}
      variant="contained"
      color="secondary"
    >
      Cadastrar meu primeiro {section}!
    </Button>
  );

  const renderLink = () => <Link href={normalizePath()}>{renderButton()}</Link>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>
        Nenhum {section} registrado :{"("}
      </h2>
      {noRouter ? renderButton() : renderLink()}
    </div>
  );
}
