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
            <Container class="d-flex justify-content-center align-items-center min-vh-100">
                  <Button variant="secondary" className="button btn-xl">
                    Shop Canadian Now
                  </Button>
            </Container>
          </div>

        </div>
      </Layout>

    </>
  );
}
