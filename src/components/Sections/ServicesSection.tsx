"use client";

import React from "react";
import Link from "next/link";

import { styles } from "@utils/styles";
import { Container, Row, Col } from "react-bootstrap";

// Website
// Mobile App
// Backend
// Frontend
// DevOps
// UI/UX

const ServicesSection = () => {
  const services = [
    {
      to: "/service/logo",
      title: "Backend Development",
      description:
        "At our software agency, we specialize in top-notch backend development services. Our expert team ensures the creation of scalable, efficient, and secure server-side architectures. From database design to API integrations, we focus on performance and reliability, providing a robust foundation for your digital solutions.",
      icon: "ml-des-62-Precision-compasses-graphics-design-tool-interface",
      style: styles("cd"),
    },
    {
      to: "/service/website/design",
      title: "Website Development",
      description:
        "Your website is often the first impression customers have of your business. Our expert website design services will ensure that your online presence is modern, functional, and visually appealing. From custom design to user experience, our team will work with you to create a website that showcases your brand and drives conversions.",
      icon: "ml-des-57-upload-download-sync-application-device-mobile-computer",
      style: styles("ab"),
    },
    {
      to: "/service/mobile",
      title: "Mobile app Development",
      description:
        "In today's mobile-first world, having a powerful mobile app can help you engage with your customers and stand out in a crowded market. Our experienced mobile app development team will work with you to turn your vision into a reality, creating a customized app that meets your unique business needs.",
      icon: "ml-tec-45-responsive-mobile-phone-tablet-computer-desktop-monitor-laptop",
      style: styles("ef"),
    },
    {
      to: "/service/seo",
      title: "Frontend Development",
      description:
        "At our software agency, we specialize in creating engaging and intuitive user interfaces through our top-tier frontend development services. From responsive web design to interactive applications, we leverage cutting-edge technologies to enhance user satisfaction and bring your digital vision to life.",
      icon: "ml-tec-8-search-magnifier-computer-desktop-monitor-laptop",
      style: styles("cd"),
    },
    // we are a software agency write short paragraph on frontend development services we provide
    {
      to: "/service/ppc",
      title: "DevOps",
      description:
        "At our software agency, we provide efficient DevOps services, integrating automation and continuous delivery to streamline your development processes. Our experts focus on speed, quality, and collaboration, enabling you to deliver software faster and more reliably, giving you a competitive edge in the digital landscape.",
      icon: "ml-symtwo-34-cursor-click-browser-website-arrow-computer",
      style: styles("ab"),
    },
    {
      to: "/service/smm",
      title: "UI/UX",
      description:
        "At our software agency, we provide top-tier UI/UX services. Our dedicated team designs visually stunning and intuitively functional interfaces, ensuring a seamless and engaging user experience for your digital products.*",
      icon: "ml-dat-63-database-computer-network-internet-globe-server",
      style: styles("ef"),
    },
  ];

  return (
    <section className="services z-3">
      <Container>
        <Row className="justify-content-center">
          {services.map(({ to, title, description, icon, style }, index) => {
            return (
              <Col md={6} lg={4} key={index} className="mb-5" data-aos="fade-up">
                <Link href={to} className="service-box text-center content-block">
                  <div className={`box-bg ${style.box}`}></div>
                  <span
                    className={`icon-container ${style.light}`}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className={`${icon} ${style.icon}`}></i>
                  </span>
                  <h5 className="text-center">{title}</h5>
                  <p className="service-description">{description}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export { ServicesSection };
