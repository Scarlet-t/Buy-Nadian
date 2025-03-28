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
        <div class="position-relative blur-wrapper">
          <div className="position-absolute top-0 start-0 w-100 h-100 blur-background"></div>
          <div class="position-relative z-1 py-5">
            <Container class="parent container d-flex justify-content-center">
              <Row class="justify-content-md-center">
                <h1>HERO MESSAGE HERE</h1>
                someone fix the formatting pls
              </Row>
              <Row class="row-sm">
                {/* go to search page */}
                <Button
                  variant="secondary"
                  className="button btn-xl"
                  onClick={handleSearchRedirect} // redirect to search page
                >
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
