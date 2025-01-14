import * as React from "react";
import { AppWrapper } from "context";
import { Container } from "react-bootstrap";
import {
  PolSEO,
  PolB2BHeader,
  PolB2BSuperBanner,
  PolB2BHelpYou,
  PolB2BIdols,
  PolB2BHowItWork,
  //PolB2BPartners,
  PolB2BFaq,
  PolB2BForm,
  PolB2BFooter,
  //PolB2BCases,
} from "components";
import { PolMessage } from "components";

const IndexPage = () => {
  return (
    <>
      <PolSEO />
      <AppWrapper>
        <main>
          <Container fluid className="px-0">
            <PolB2BHeader />
            <PolB2BSuperBanner />
            <PolB2BHelpYou />
            <PolB2BIdols />
            <PolB2BHowItWork />
            {/* <PolB2BCases />
            <PolB2BPartners /> */}
            <PolB2BForm />
            <PolB2BFaq />
            <PolB2BFooter />
          </Container>
          <PolMessage />
        </main>
      </AppWrapper>
    </>
  );
};

export default IndexPage;
