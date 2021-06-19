import styled from "styled-components";
import Image from "next/image";

const Header = styled.header`
  top: 0;
  padding: 0 calc((100% - 900px) / 2);
  background: var(--color-brand-primary);
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;
`;

function HeaderBar() {
  return (
    <Header>
      <Div>
        <Image
          src="/flipkartLogo.png"
          width="60"
          height="20"
          alt="Flipkart logo"
        />
      </Div>
    </Header>
  );
}

export default HeaderBar;
