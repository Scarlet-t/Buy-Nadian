import Layout from "@/components/Layout";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  // TODO:
  // add public/Maple_Leaf.svg.png to button
  // add click handler to button (with useRouter)
  // fix styling (i suck balls at bootstrap pls if you like boostrap by some chance like do this pls jj pls xd)
  const router = useRouter();

  const handleSearchRedirect = () => {
    router.push(`/search`);
  };

  return (
    <>
      <Layout>
        <div
          className="banner-wrapper d-flex align-items-center"
          style={{ height: "100vh", position: "relative" }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 banner"></div>
          <div className="position-relative z-1 py-5 w-100">
            <Container>
              <Row className="align-items-center">
                <Col xs={6}></Col>
                <Col>
                  <h1 style={{"color":"#ffffff", "font-size":"8vh"}}>Find & Support Canadian-Made Food</h1>
                  <div class=" d-flex justify-content-center">
                  <button type="button" class="btn btn-danger btn-lg">Explore More</button>

                  </div>
                
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
}
