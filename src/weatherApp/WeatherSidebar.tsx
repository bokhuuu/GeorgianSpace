import { QueryClientProvider, QueryClient } from "react-query";
import WeatherApp from "./WeatherComponent";
import Offcanvas from "react-bootstrap/Offcanvas";
import { motion } from "framer-motion";

const weatherQueryClient = new QueryClient();

interface WeatherSidebarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function WeatherSidebar({ show, setShow }: WeatherSidebarProps) {
  const handleClose = () => setShow(false);

  return (
    <QueryClientProvider client={weatherQueryClient}>
      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <div className="sidebar" style={{ overflow: "auto" }}>
            <Offcanvas.Header closeButton>
              <motion.div
                className="sidebar-title container d-flex justify-content-center "
                animate={{
                  scaleX: 0.8,
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
                  Today's Forecast
                </Offcanvas.Title>
              </motion.div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <WeatherApp />
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>
    </QueryClientProvider>
  );
}

export default WeatherSidebar;
