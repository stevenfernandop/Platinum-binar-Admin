import { Container, Row, Col, Button, Form, Card, Image } from "react-bootstrap";
import Select from "react-select";
import vektor from "../assets/img/Vector.png";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";

function Cars() {
  const monthList = [
    { value: "June - 2022", label: "June - 2022" },
    { value: "Juli - 2022", label: "Juli - 2022" },
    { value: "Agustus - 2022", label: "Agustus - 2022" },
    { value: "September - 2022", label: "September - 2022" },
  ];
  const limitList = [{ value: "10", label: "10" }];
  const jtpList = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];
  return (
    <Container fluid id="dashboard" style={{ marginLeft: "80px", backgroundColor: "#E5E5E5", marginTop: "-834px" }}>
      <Row className="d-flex me-5">
        <Col md={2}>
          <div className="side2 bg-white" style={{ width: "220px", height: "834px", marginLeft: "-20px", paddingTop: "20px" }}>
            <p className="dash-judul pt-1">Cars</p>
            <p className="dash-judul2">List Cars</p>
          </div>
        </Col>
        <Col md={10}>
          <Row className="rowTitle ms-2">
            <Col className="d-flex gap-2 align-items-center">
              <p className="padm ">Cars</p>
              <Image src={vektor} className="vektoradm"></Image>
              <p className="padm2">List Cars</p>
            </Col>
          </Row>
          <Row className="rowTitle2 mt-5 ms-3 my-auto">
            <Col md className="d-flex justify-content-between mb-4">
              <h1 className="dataP mt-3">List Cars</h1>
              <Link to="/ancar">
              <Button className="mt-2 p-2 " style={{ height: "36px", backgroundColor: "blue", lineHeight: "10px"}}>
                + Add New Car
              </Button>
              </Link>
            </Col>

            <Row>
              <Col md className="d-flex gap-2 mb-3">
                <Button>All</Button>
                <Button>2-4 people</Button>
                <Button>4-6 people</Button>
                <Button>6-8 people</Button>
              </Col>
            </Row>
            <Row md={12} className="g-2 me-2">
              <Col md={4}>
                <Card className="mb-3">
                  <Card.Img className="p-4" variant="top" src="https://placeimg.com/200/100/animals" alt="Gambar tidak tersedia" />
                  <Card.Body>
                    <Card.Text className="mb-1">Nama/Tipe Mobil </Card.Text>
                    <Card.Subtitle className="fw-bold pt-2">Rp 500.000 / hari</Card.Subtitle>
                    <Card.Subtitle className="pt-3">6-8 people</Card.Subtitle>
                    <Card.Subtitle className="pt-3">Updated at 4 Apr 2022, 09.00</Card.Subtitle>

                    <Col className="d-flex justify-content-between fw-bold mt-3 gap-3">
                      <Button className="w-50">Delete</Button>
                      <Button className="w-50">Edit </Button>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3">
                  <Card.Img className="p-4" variant="top" src="https://placeimg.com/200/100/animals" alt="Gambar tidak tersedia" />
                  <Card.Body>
                    <Card.Text className="mb-1">Nama/Tipe Mobil </Card.Text>
                    <Card.Subtitle className="fw-bold pt-2">Rp 500.000 / hari</Card.Subtitle>
                    <Card.Subtitle className="pt-3">6-8 people</Card.Subtitle>
                    <Card.Subtitle className="pt-3">Updated at 4 Apr 2022, 09.00</Card.Subtitle>

                    <Col className="d-flex justify-content-between fw-bold mt-3 gap-3">
                      <Button className="w-50">Delete</Button>
                      <Button className="w-50">Edit </Button>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3">
                  <Card.Img className="p-4" variant="top" src="https://placeimg.com/200/100/animals" alt="Gambar tidak tersedia" />
                  <Card.Body>
                    <Card.Text className="mb-1">Nama/Tipe Mobil </Card.Text>
                    <Card.Subtitle className="fw-bold pt-2">Rp 500.000 / hari</Card.Subtitle>
                    <Card.Subtitle className="pt-3">6-8 people</Card.Subtitle>
                    <Card.Subtitle className="pt-3">Updated at 4 Apr 2022, 09.00</Card.Subtitle>

                    <Col className="d-flex justify-content-between fw-bold mt-3 gap-3">
                      <Button className="w-50">Delete</Button>
                      <Button className="w-50">Edit </Button>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Cars;
