import { QueryClientProvider, QueryClient } from "react-query";
import { useTranslation } from "react-i18next";
import WeatherComponent from "./WeatherComponent";
import { motion } from "framer-motion";
import Offcanvas from "react-bootstrap/Offcanvas";

const weatherQueryClient = new QueryClient();

interface WeatherSidebarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function WeatherSidebar({ show, setShow }: WeatherSidebarProps) {
  const handleClose = () => setShow(false);
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={weatherQueryClient}>
      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <div
            className="sidebar"
            style={{ overflow: "auto", height: "100vh" }}
          >
            <Offcanvas.Header closeButton>
              <motion.div
                className="sidebar-title container d-flex justify-content-center mt-3 mb-3 rounded-5"
                animate={{
                  scaleX: 0.8,
                  scaleY: 1.2,
                  textShadow: "0px 0px 12px rgb(255,255,255)",
                  boxShadow: "0px 0px 12px rgb(255,255,255)",
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
              >
                <Offcanvas.Title
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  {t("offcanvas_title")}
                </Offcanvas.Title>
              </motion.div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <WeatherComponent />
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>
    </QueryClientProvider>
  );
}

export default WeatherSidebar;
