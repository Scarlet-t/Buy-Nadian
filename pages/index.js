import Layout from "@/components/Layout";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  // TODO:
  // add public/Maple_Leaf.svg.png to button
  // add click handler to button (with useRouter)
  // fix styling (i suck balls at bootstrap pls if you like boostrap by some chance like do this pls jj pls xd)

  return (
    <>
      <Layout >
        <div class="position-relative blur-wrapper">
          <div className="position-absolute top-0 start-0 w-100 h-100 blur-background"></div>
          <div class="position-relative z-1 py-5">
            <Container class="parent container d-flex justify-content-center">
                <Row class="justify-content-md-center">
                  <h1>HERO MESSAGE HERE</h1>
                  someone fix the formatting pls
                </Row>
                <Row class="row-sm">
                  <Button variant="secondary" className="button btn-xl">
                    Shop Canadian Now
                  </Button>
                </Row>
            </Container>
          </div>

        </div>
      </Layout>

    </>
  );
}
