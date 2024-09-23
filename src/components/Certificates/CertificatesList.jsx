import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CertificatesJSX.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const CertificatesJSX = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Open modal for selected certificate
  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  // Close modal
  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.carouselWrapper}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          centerMode={true}
          centerSlidePercentage={100} // Adjust percentage to fit nicely
          dynamicHeight={false}
          swipeable={true}
        >
          {certificates.map((cert, id) => (
            <div key={id} className={styles.carouselCard} onClick={() => openModal(cert)}>
              {cert.imageSrc ? (
                <img
                  src={getImageUrl(cert.imageSrc)}
                  alt={`${cert.courseName} certificate`}
                  className={styles.certificateImage}
                />
              ) : cert.pdfSrc ? (
                <iframe
                  src={getImageUrl(cert.pdfSrc)}
                  title={`${cert.courseName} PDF`}
                  className={styles.pdfFrame}
                />
              ) : null}
              <p className={styles.courseName}>{cert.courseName}</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal for enlarged certificate */}
      {selectedCert && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            {selectedCert.imageSrc ? (
              <img
                src={selectedCert.imageSrc}
                alt={`${selectedCert.courseName} certificate`}
                className={styles.modalImage}
              />
            ) : selectedCert.pdfSrc ? (
              <iframe
                src={selectedCert.pdfSrc}
                title={`${selectedCert.courseName} PDF`}
                className={styles.modalPdf}
              />
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};
