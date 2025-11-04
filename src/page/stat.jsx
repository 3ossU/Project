import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const Stat = () => {
    return ( 
    <>
    
         <div style={{ backgroundColor: '#ffffffff', minHeight: '100vh', padding: '2rem' }}>
        <Container className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#DFDFDF',maxWidth: '1000px' }}>
          <h3 className="fw-bold mb-4">สถิติ</h3>

          {/* ส่วนอสังหา */}
          <Card className="mb-4 shadow-sm border-0" style={{ backgroundColor: '#eef3fb' }}>
            <Card.Body>
              <Row className="text-center">
                <Col md={4}>
                  <i className="bi bi-building-fill" style={{ fontSize: '2.5rem', color: '#0045FF' }}></i>
                  <p className="fw-semibold mt-2 mb-0">จำนวนอสังหาทั้งหมด</p>
                  <h5 className="fw-bold">10000</h5>
                </Col>

                <Col md={4}>
                  <i className="bi bi-check-circle-fill" style={{ fontSize: '2.5rem', color: '#00b140' }}></i>
                  <p className="fw-semibold mt-2 mb-0">ประกาศอสังหาที่ถูกขาย/เช่า</p>
                  <h5 className="fw-bold">7000</h5>
                </Col>

                <Col md={4}>
                  <i className="bi bi-info-circle-fill" style={{ fontSize: '2.5rem', color: '#f7b500' }}></i>
                  <p className="fw-semibold mt-2 mb-0">ประกาศอสังหาที่ยังไม่ถูกขาย/เช่า</p>
                  <h5 className="fw-bold">3000</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* ส่วนผู้ใช้งาน */}
          <Card className="mb-4 shadow-sm border-0" style={{ backgroundColor: '#eef3fb' }}>
            <Card.Body>
              <Row className="text-center">
                <Col md={4}>
                  <i className="bi bi-people-fill" style={{ fontSize: '2.5rem', color: '#0045FF' }}></i>
                  <p className="fw-semibold mt-2 mb-0">จำนวนผู้ใช้งาน</p>
                  <h5 className="fw-bold">10000</h5>
                </Col>

                <Col md={4}>
                  <i className="bi bi-person-fill" style={{ fontSize: '2.5rem', color: '#00b140' }}></i>
                  <p className="fw-semibold mt-2 mb-0">ผู้ซื้อ</p>
                  <h5 className="fw-bold">6000</h5>
                </Col>

                <Col md={4}>
                  <i className="bi bi-person-badge-fill" style={{ fontSize: '2.5rem', color: '#f7b500' }}></i>
                  <p className="fw-semibold mt-2 mb-0">ผู้ขาย</p>
                  <h5 className="fw-bold">4000</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* ปุ่ม Export */}
          <div className="text-start">
            <Button variant="primary" className="px-4 rounded-3">
              <i className="bi bi-download me-2"></i>
              Export
            </Button>
          </div>
        </Container>
      </div>

    </> 
    );
}
 
export default Stat;