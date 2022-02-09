import logoImg from "../../assets/disney.png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Disney Logo" />
        <button>
          <WbSunnyIcon />
        </button>
      </Content>
    </Container>
  );
}
