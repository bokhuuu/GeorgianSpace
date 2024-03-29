import { useState } from "react";
import { motion } from "framer-motion";
import LocationModal from "./LocationModal";
import binocularsIcon from "../../../public/assets/icons/binoculars.png";

interface LocationCardProps {
  id: number;
  name: string;
  intro: string;
  description: string;
  imageURLs: string[];
}

const LocationCard: React.FC<LocationCardProps> = ({
  name,
  intro,
  description,
  imageURLs,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="profile-card card col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
        style={{
          border: "white solid 1px",
          opacity: 0.84,
        }}
      >
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{
            borderBottom: "white solid 1px",
          }}
        >
          <h5 className="fw-bolder">{name}</h5>
          <motion.button
            className="d-flex justify-content-center mb-2"
            animate={{
              scale: [1, 1.2, 1],
              textShadow: "0px 10px 20px rgb(255,255,255)",
              boxShadow: "0px 10px 20px rgb(255,255,255)",
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            style={{
              backgroundImage: `url(${binocularsIcon})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "50px",
              height: "50px",
              borderRadius: "10%",
            }}
            onClick={handleToggleModal}
          ></motion.button>
        </div>
        <div className="card-body">
          <p className="card-text pt-3 fw-light">{intro}</p>
        </div>
      </div>
      <LocationModal
        name={name}
        description={description}
        imageURLs={imageURLs}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default LocationCard;
