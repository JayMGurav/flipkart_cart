import styled from "styled-components";
import Image from "next/image";

import Link from "next/link";

const Header = styled.header`
  top: 0;
  padding: 0 calc((100% - 900px) / 2);
  background: var(--color-brand-primary);
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  align-items:center;
  justify-content:space-between;

  a{
    margin: 2rem;
    text-decoration;
    color: #fff;
  }
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
        <div>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </Div>
    </Header>
  );
}

export default HeaderBar;
