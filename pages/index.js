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
    const searchQuery = "canadian";
    router.push(`/search?query=${searchQuery}`);
  };

  return (
    <>
      <Layout>
        <div class="position-relative banner-wrapper">
          <div className="position-absolute top-0 start-0 w-100 h-100 banner"></div>
          <div class="position-relative z-1 py-5">
            <Container>
              <Row>
                <Col>

                </Col>
                <Col>
                  
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
}
