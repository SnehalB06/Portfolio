import React, { useState } from "react";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";

export const Certificates = () => {
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
      <div className={styles.content}>
        {certificates.map((cert, id) => (
          <div key={id} className={styles.card} onClick={() => openModal(cert)}>
            <div className={styles.cardInner}>
              {/* Front of the card */}
              <div className={styles.cardFront}>
                <p className={styles.courseName}>{cert.courseName}</p>
              </div>

              {/* Back of the card */}
              <div className={styles.cardBack}>
                {cert.imageSrc ? (
                  <img
                    src={cert.imageSrc}
                    alt={`${cert.courseName} certificate`}
                    className={styles.certificateImage}
                  />
                ) : cert.pdfSrc ? (
                  <iframe
                    src={cert.pdfSrc}
                    title={`${cert.courseName} PDF`}
                    className={styles.pdfFrame}
                  />
                ) : null}
              </div>
            </div>
          </div>
        ))}
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
