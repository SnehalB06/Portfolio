import React, { useState, useEffect } from "react";
import styles from "./CertificatesJSX.module.css";
import certificates from "../../data/certificates.json";

export const CertificatesJSX = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [certCategories, setCertCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Group certificates by category
    const grouped = certificates.reduce((acc, cert) => {
      acc[cert.Category] = acc[cert.Category] || [];
      acc[cert.Category].push(cert);
      return acc;
    }, {});
    setCertCategories(grouped);
    
    // Set default certificate
    const defaultCert = certificates[0]; // Assuming you want the first certificate as default
    setSelectedCert(defaultCert);
    setActiveCategory(defaultCert.Category); // Set the category of the default cert
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
      <h4>Select Certificates:</h4>
      <div className={styles.content}>
      <br></br>
        <div className={styles.leftPane}>
          <div className={styles.circularScrollContainer}>
            {Object.keys(certCategories).map((category) => (
              <div key={category} className={styles.certListCont}>
                <h2 onClick={() => setActiveCategory(category)} className={styles.categoryTitle}>{category}</h2>
                {activeCategory === category && certCategories[category].map((cert, idx) => (
                  <div
                    key={idx}
                    className={styles.circularItem}
                    onClick={() => handleCertClick(cert)}
                  >
                    <h6 className={styles.scrollItemList}>{cert.courseName}</h6>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
