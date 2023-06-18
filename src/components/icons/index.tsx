import Person3Icon from "@mui/icons-material/Person3";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PreviewIcon from '@mui/icons-material/Preview';
import { StateType } from "@/src/data/contexts/StateContext";
import { StatePageType } from "@/src/data/contexts/PageStateContext";


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




