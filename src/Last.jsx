import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import ho from "./images/ho.png";
import rent from "./images/rent.png";
import sell from "./images/sell.png";

function LastPage() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // ✅ WHATSAPP LINK FUNCTION (NO <a> TAG NEEDED)
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello James, I am interested in getting started. Please send me more details."
    );

    window.open(`https://wa.me/2348132329028?text=${msg}`, "_blank");
  };

  // Smooth parallax
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -60]
  );

  // Cleaner + smoother slide animation
  const smoothSlideLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -120,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Floating images
  const floatingImage = {
    animate: shouldReduceMotion
      ? {}
      : {
          y: [0, -8, 0],
        },

    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Reusable card style
  const cardStyle = {
    borderRadius: "28px",
    background: "rgba(255,255,255,0.96)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
    border: "1px solid rgba(255,255,255,0.5)",
    overflow: "hidden",
    willChange: "transform",
  };

  return (
    <div className="container py-5 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center mb-5"
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "700",
            letterSpacing: "-2px",
            lineHeight: "1",
          }}
        >
          Find Your Perfect Home
        </h1>

        <p
          className="mx-auto mt-4"
          style={{
            maxWidth: "750px",
            fontSize: "1.2rem",
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          Buy, rent, or sell with confidence. We make finding your next home
          simple, modern, and stress-free with smooth experiences designed for
          real people.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* CARD 1 */}
        <motion.div
          className="col"
          variants={smoothSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -12,
                    scale: 1.025,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="h-100"
            style={cardStyle}
          >
            <div className="p-4 d-flex flex-column h-100">
              <motion.img
                {...floatingImage}
                src={ho}
                alt="Buy home"
                className="img-fluid"
                style={{
                  height: "220px",
                  objectFit: "contain",
                }}
              />

              <h2
                className="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "2rem",
                  letterSpacing: "-1px",
                }}
              >
                Buy a Home
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                }}
              >
                Own your dream home with flexible payment options and affordable
                plans designed to fit your lifestyle and budget.
              </p>

              <motion.button
                onClick={openWhatsApp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.96,
                      }
                }
                className="btn btn-dark mt-auto py-3"
                style={{
                  borderRadius: "16px",
                  fontWeight: "500",
                  border: "none",
                }}
              >
                Get Started →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="col"
          variants={smoothSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -12,
                    scale: 1.025,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="h-100"
            style={cardStyle}
          >
            <div className="p-4 d-flex flex-column h-100">
              <motion.img
                {...floatingImage}
                src={rent}
                alt="Rent home"
                className="img-fluid"
                style={{
                  height: "220px",
                  objectFit: "contain",
                }}
              />

              <h2
                className="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "2rem",
                  letterSpacing: "-1px",
                }}
              >
                Rent a Home
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                }}
              >
                Discover quality rental homes in prime locations with pricing
                and comfort tailored to your everyday needs.
              </p>

              <motion.button
                onClick={openWhatsApp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.96,
                      }
                }
                className="btn btn-dark mt-auto py-3"
                style={{
                  borderRadius: "16px",
                  border: "none",
                }}
              >
                Get Started →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="col"
          variants={smoothSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -12,
                    scale: 1.025,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="h-100"
            style={cardStyle}
          >
            <div className="p-4 d-flex flex-column h-100">
              <motion.img
                {...floatingImage}
                src={sell}
                alt="Sell home"
                className="img-fluid"
                style={{
                  height: "220px",
                  objectFit: "contain",
                }}
              />

              <h2
                className="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "2rem",
                  letterSpacing: "-1px",
                }}
              >
                Sell a Home
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                }}
              >
                Connect with serious buyers and sell your property faster with
                trusted support every step of the way.
              </p>

              <motion.button
                onClick={openWhatsApp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.96,
                      }
                }
                className="btn btn-dark mt-auto py-3"
                style={{
                  borderRadius: "16px",
                  border: "none",
                }}
              >
                Get Started →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-5"
      >
        <motion.div
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.01,
                }
          }
          style={{
            borderRadius: "36px",
            background: "linear-gradient(135deg, #111 0%, #1f1f1f 100%)",
            padding: "5rem 2rem",
            color: "white",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 25px 70px rgba(0,0,0,0.20)",
          }}
        >
          {/* Smooth moving light */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: ["-120%", "220%"],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "30%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              transform: "skewX(-20deg)",
            }}
          />

          <motion.div style={{ y: yParallax }}>
            <h1
              className="text-center"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: "700",
                letterSpacing: "-2px",
              }}
            >
              Your Next Home Starts Here
            </h1>

            <p
              className="mx-auto text-center mt-4"
              style={{
                maxWidth: "760px",
                fontSize: "1.2rem",
                lineHeight: "1.9",
                opacity: 0.85,
              }}
            >
              Explore modern homes, flexible rentals, and seamless selling
              experiences — all designed to make your real estate journey feel
              effortless and enjoyable.
            </p>

            {/*  OPTIONAL EXTRA BUTTON IN BOTTOM SECTION */}
            <div className="text-center mt-4">
              <motion.button
                onClick={openWhatsApp}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.96,
                      }
                }
                className="btn btn-light px-5 py-3"
                style={{
                  borderRadius: "18px",
                  fontWeight: "600",
                  border: "none",
                }}
              >
                Chat on WhatsApp →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LastPage;