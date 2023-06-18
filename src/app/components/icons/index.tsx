import HomeIcon from '@mui/icons-material/Home';
import Person3Icon from "@mui/icons-material/Person3";
import PreviewIcon from '@mui/icons-material/Preview';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { StateType } from "@contexts/StateContext";
import { StatePageType } from "@contexts/PageStateContext";

interface StateTypeProps {
  state: StateType
}

interface StatePageTypeProps {
  pageState: StatePageType
}

export const ClientIcon = ({state}: StateTypeProps) => <Person3Icon color={state === "cliente" ? "secondary" : 'inherit'} />
export const DisplacementIcon = ({state}: StateTypeProps) => <DepartureBoardIcon color={state === "deslocamento" ? "secondary" : 'inherit'} />
export const ConductorIcon = ({state}: StateTypeProps) => <EngineeringIcon  color={state === "condutor" ? "secondary" : 'inherit'} />
export const VehicleIcon = ({state}: StateTypeProps) => <DirectionsCarIcon color={state === "veículo" ? "secondary" : 'inherit'} />
export const HomePageIcon = ({pageState}: StatePageTypeProps) => <HomeIcon color={pageState === "início" ? "secondary" : 'inherit'} />
export const ExploreIcon = ({pageState}: StatePageTypeProps) => <TravelExploreIcon color={pageState === "explorar" ? "secondary" : 'inherit'} />
export const RegisterIcon = ({pageState}: StatePageTypeProps) => <HowToRegIcon color={pageState === "cadastrar" ? "secondary" : 'inherit'} />
export const MyLastSeenIcon = ({pageState}: StatePageTypeProps) => <PreviewIcon color={pageState === "meus registros" ? "secondary" : 'inherit'} />




