"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

/* Top message */
function TopNotice() {
  return (
    <div className="top-notice text-center small py-1">
      Free shipping on Selected Plush — Only for the Halloween Window ·
      <a className="ms-1 text-decoration-underline" href="#">Don&apos;t Miss Out 👻</a>
    </div>
  );
}

/* Header with POP MART logo image */
function HeaderBar() {
  return (
    <div className="header-bar py-2 border-bottom">
      <Container className="d-flex align-items-center gap-3 justify-content-between">
        <Form className="d-none d-md-flex flex-grow-1" role="search">
          <div className="search-wrap d-flex align-items-center w-100">
            <i className="bi bi-search me-2" aria-hidden />
            <FormControl
              type="search"
              placeholder="PEACH RIOT"
              className="border-0 bg-transparent flex-grow-1"
            />
          </div>
        </Form>

        {/* Centered POP MART logo */}
        <a href="#" className="mx-auto mx-md-0 d-inline-flex align-items-center">
          <Image
            src="/popmart_logo.png"
            alt="POP MART"
            width={120}
            height={30}
            priority
            style={{ height: "30px", width: "auto" }}
          />
        </a>

        <div className="d-flex align-items-center gap-3 ms-md-auto">
          <i className="bi bi-headset" />
          <i className="bi bi-person" />
          <i className="bi bi-heart" />
          <i className="bi bi-bag" />
        </div>
      </Container>
    </div>
  );
}

/* Horizontal nav */
function MainNav() {
  return (
    <Navbar expand="lg" bg="white" className="border-bottom py-0">
      <Container>
        <Navbar.Toggle aria-controls="main-nav" className="border-0" />
        <Navbar.Collapse id="main-nav" className="justify-content-center">
          <Nav className="flex-row flex-wrap gap-3 py-2">
            <NavDropdown title="NEW & FEATURED" id="nav-new" renderMenuOnMount>
              <NavDropdown.Item>New Arrivals</NavDropdown.Item>
              <NavDropdown.Item>Trending</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CATEGORIES" id="nav-cat" renderMenuOnMount>
              <NavDropdown.Item>Blind Boxes</NavDropdown.Item>
              <NavDropdown.Item>Plush</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CHARACTERS" id="nav-char" renderMenuOnMount>
              <NavDropdown.Item>SKULLPANDA</NavDropdown.Item>
              <NavDropdown.Item>MOLLY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">STORE PICKUP</Nav.Link>
            <Nav.Link href="#" className="text-warning fw-semibold">
              HALLOWEEN CAMPAIGN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

/* Hero with stronger text visibility (overlay + copy panel) */
function Hero() {
  return (
    <section className="hero position-relative overflow-hidden">
      <Container>
        <div className="hero-inner d-flex align-items-center">
          <div className="hero-copy copy-panel text-center mx-auto">
            <div className="brand d-flex align-items-center justify-content-center gap-2 mb-2">
              <span className="brand-pop badge fs-6">POP MART</span>
              <span className="brand-sub fw-semibold text-white-50">Skullpanda</span>
            </div>
            <h1 className="display-3 fw-bold text-white mb-2 text-shadow">SKULLPANDA</h1>
          </div>
        </div>
      </Container>
      <div className="hero-dots d-flex gap-2 justify-content-center">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

/* Footer with horizontal link groups (scroll if too narrow) */
function Footer() {
  return (
    <footer className="site-footer mt-5 py-5 text-light">
      <Container>
        <Row className="footer-links justify-content-center text-center flex-nowrap">
          <Col xs="auto" className="footer-col">
            <div className="title fw-semibold mb-2">Support</div>
            <ul className="list-unstyled mb-0">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Track your order</a></li>
            </ul>
          </Col>
          <Col xs="auto" className="footer-col">
            <div className="title fw-semibold mb-2">About</div>
            <ul className="list-unstyled mb-0">
              <li><a href="#">Artists</a></li>
              <li><a href="#">About POP MART</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </Col>
          <Col xs="auto" className="footer-col">
            <div className="title fw-semibold mb-2">Shop</div>
            <ul className="list-unstyled mb-0">
              <li><a href="#">Launch Calendar</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </Col>
        </Row>

        <div className="divider my-4" />

        <Row className="text-center small">
          <Col>© {new Date().getFullYear()} POP MART (Demo)</Col>
        </Row>
      </Container>
    </footer>
  );
}

/** ✅ Default export */
export default function Page() {
  return (
    <main className="popmart">
      <TopNotice />
      <HeaderBar />
      <MainNav />
      <Hero />
      <Footer />
    </main>
  );
}
