import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import FO from "./images/MAIN.jpg";

function MyMiddle() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -80]
  );

  const floatingGlow = {
    animate: shouldReduceMotion
      ? {}
      : {
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        },
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
      },
    },
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 80,
      scale: shouldReduceMotion ? 1 : 0.96,
      filter: shouldReduceMotion ? "none" : "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* === APPLE STYLE MOVING LIGHT BACKGROUND === */}
      <motion.div
        {...floatingGlow}
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.10), transparent 60%)",
          filter: "blur(80px)",
          top: "10%",
          left: "10%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -60, 40, 0],
                y: [0, 30, -40, 0],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 65%)",
          filter: "blur(90px)",
          top: "40%",
          right: "-10%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* subtle vignette like Apple UI */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
          zIndex: 1,
        }}
      />

      {/* MAIN CONTENT */}
      <motion.div
        className="container-fluid d-flex flex-column flex-md-row align-items-stretch justify-content-center gap-4 py-5"
        style={{
          marginTop: "-70px",
          position: "relative",
          zIndex: 2,
        }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TEXT */}
        <motion.div className="col-md-6 d-flex" variants={reveal}>
          <motion.div
            whileHover={
              shouldReduceMotion
                ? {}
                : { y: -10, rotateX: 2, rotateY: -2 }
            }
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="w-100 p-5 d-flex flex-column justify-content-center position-relative overflow-hidden"
            style={{
              borderRadius: "32px",
              background:
                "rgba(255,255,255,0.06)",
              backdropFilter: "blur(25px)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "white",
            }}
          >
            <motion.h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: "1.05",
                letterSpacing: "-2px",
              }}
            >
              Click Below
              <br />
              <span style={{ fontSize: "1.3rem", opacity: 0.7 }}>
                Tell Us Your Budget
              </span>
            </motion.h2>

            <Link to="/fillform">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn mt-4 px-5 py-3"
                style={{
                  borderRadius: "14px",
                  background: "white",
                  color: "black",
                  fontWeight: 500,
                  border: "none",
                }}
              >
                Go to Form →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div className="col-md-6 d-flex" variants={reveal}>
          <motion.div
            whileHover={{ rotateY: -6, rotateX: 4, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            style={{
              width: "100%",
              borderRadius: "32px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                zIndex: 2,
              }}
            />

            <motion.img
              src={FO}
              alt="Fill form"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                y: imageY,
              }}
              animate={
                shouldReduceMotion
                  ? {}
                  : { scale: [1, 1.05, 1] }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MyMiddle;