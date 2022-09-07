import { Container, Row, Col, Button, Form, Card, Image } from "react-bootstrap";
import Select from "react-select";
import vektor from "../assets/img/Vector.png";

function EditCar() {
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
              <Image src={vektor} className="vektoradm"></Image>
              <p className="padm2">Edit Car</p>
            </Col>
          </Row>
          <Row className="rowTitle2 mt-5 ms-3 my-auto ">
            <Col md className="d-flex justify-content-between mb-4">
              <h1 className="dataP mt-3">Edit Car</h1>
            </Col>
            <Row md={12} className="g-2 me-2 mb-5">
              <Card className="p-4">
                <Col></Col>
                <Form>
                  <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                    <Form.Label className="w-25">Nama/Type Mobil</Form.Label>
                    <Form.Control type="text" className="w-50" placeholder="Input nama / tipe mobil" />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex" controlId="formGroupPassword">
                    <Form.Label className="w-25">Harga</Form.Label>
                    <Form.Control type="text" className="w-50" placeholder="Input harga sewa mobil" />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                    <Form.Label className="w-25">Foto</Form.Label>
                    <Form.Control type="file" className="w-50" placeholder="Upload foto mobil" />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                    <Form.Label className="w-25">Kategori</Form.Label>
                    <Form.Select placeholder="Pilih kategori mobil" className="w-50">
                      <option>Pilih kategori mobil</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                    <Form.Label className="w-25">Created at</Form.Label>-{/* <Form.Control type="email" className="w-50" placeholder="Input nama / tipe mobil" /> */}
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                    <Form.Label className="w-25">Updated at</Form.Label>-{/* <Form.Control type="email" className="w-50" placeholder="Input nama / tipe mobil" /> */}
                  </Form.Group>
                </Form>
              </Card>
              <Row style={{marginTop:"150px"}}>
                <Col className=" td-flex ">
                  <Button className="me-2">Cancel</Button>
                  <Button className="">Save </Button>
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default EditCar;
