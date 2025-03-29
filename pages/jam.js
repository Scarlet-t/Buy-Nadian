import MainNav from "@/components/MainNav";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap";
import Layout from "@/components/Layout";
export default function Jam() {
    return <>

    <Layout>
        <div
          className="cutcorners-wrappers d-flex align-items-center"
          style={{ height: "200vh", position: "relative" }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 cutcorners"></div>
          <div className="position-relative z-1 py-5 w-100">
            <Container>
            </Container>
          </div>
        </div>
      </Layout>
    </>
    ;
}