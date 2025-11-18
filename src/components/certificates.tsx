import React from "react";

interface Certificate {
  id: number;
  certificate: React.ReactNode;
}

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates = ({ certificates }: CertificatesProps) => {
  return (
    <>
      <div className="logo-scroll-container">
        <div className="logo-scroll">
          {certificates.map((item) => (
            <div
              className="flex justify-center items-center mx-4"
              key={item.id}
            >
              {item.certificate}
            </div>
          ))}
          {certificates.map((item) => (
            <div
              className="flex justify-center items-center mx-4"
              key={item.id + 6}
            >
              {item.certificate}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
