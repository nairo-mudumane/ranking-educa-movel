import React from "react";
import { Container } from "@mui/material";
import { Head, Layout, Title } from "../../components";

export function Home() {
  return (
    <React.Fragment>
      <Head />
      <Layout>
        <Container>
          <Title text="title here" />
        </Container>
      </Layout>
    </React.Fragment>
  );
}
