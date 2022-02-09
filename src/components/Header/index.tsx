import { useContext } from "react";

import logoImg from "../../assets/disney.png";
import { Container, Content } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Disney Logo" />
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </Content>
    </Container>
  );
}
