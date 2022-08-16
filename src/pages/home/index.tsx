import React from "react";
import { Container } from "@mui/material";
import { CustomContainer, Head, Layout, Title } from "../../components";

export function Home() {
  return (
    <React.Fragment>
      <Head />
      <Layout>
        <Container>
          <Title text="title here" />

          <CustomContainer>
            <h2>home</h2>
          </CustomContainer>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
