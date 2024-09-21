import React, { useState, useEffect } from "react";
import styles from "./CertificatesJSX.module.css";
import certificates from "../../data/certificates.json";

export const CertificatesJSX = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [categorizedCerts, setCategorizedCerts] = useState({});

  useEffect(() => {
    // Group certificates by category
    const groupedCerts = certificates.reduce((acc, cert) => {
      if (!acc[cert.Category]) {
        acc[cert.Category] = [];
      }
      acc[cert.Category].push(cert);
      return acc;
    }, {});

    setCategorizedCerts(groupedCerts);
    
    // Set the default certificate
    const defaultCert = certificates.find(cert => cert.default);
    if (defaultCert) {
      setSelectedCert(defaultCert);
    }
  }, []);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      
      <div className={styles.content}>
        <div className={styles.leftPane}>
          {Object.keys(categorizedCerts).map(category => (
            <div key={category} className={styles.circularScrollContainer}>
              <h3>{category}</h3>
              {categorizedCerts[category].map((cert, idx) => (
                <div 
                  key={idx} 
                  className={styles.circularItem}
                  onClick={() => handleCertClick(cert)}
                >
                  <h6>{cert.courseName}</h6>
                </div>
              ))}
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className={styles.rightPane}>
            <div className={styles.certificateDisplay}>
              <div className={styles.imageContainer} onClick={openModal}>
                <img
                  src={selectedCert.imageSrc}
                  alt={`${selectedCert.courseName} certificate`}
                  className={styles.certificateImageVisible} 
                />
                <span className={styles.zoomIcon}>🔍</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <img
              src={selectedCert.imageSrc}
              alt={`${selectedCert.courseName} certificate`}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};
