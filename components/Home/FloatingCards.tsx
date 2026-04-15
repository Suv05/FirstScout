import styles from "./HeroSection.module.css";

const FloatingCards = () => {
  return (
    <>
      <div className={styles["fs-collage"]}>

        <div className={styles["fs-badge"]}
          style={{ top: 8, left: "18%", background: "#6C63FF", color: "#fff", boxShadow: "0 4px 14px rgba(108,99,255,0.35)", animationDelay: "0s" }}>
          #campaign
        </div>
        <div className={styles["fs-badge"]}
          style={{ top: 12, right: "12%", background: "#fff", color: "#333", boxShadow: "0 4px 14px rgba(0,0,0,0.1)", animationDelay: "1s" }}>
          #viral
        </div>
        <div className={styles["fs-badge"]}
          style={{ top: "50%", left: "4%", background: "#FF6B6B", color: "#fff", boxShadow: "0 4px 14px rgba(255,107,107,0.35)", animationDelay: "0.5s" }}>
          #trend
        </div>
        <div className={styles["fs-badge"]}
          style={{ bottom: 20, right: "22%", background: "#11998e", color: "#fff", boxShadow: "0 4px 14px rgba(17,153,142,0.35)", animationDelay: "1.5s" }}>
          #ROI
        </div>
        <div className={styles["fs-badge"]}
          style={{ bottom: 30, left: "15%", background: "#fff", color: "#333", boxShadow: "0 4px 14px rgba(0,0,0,0.1)", animationDelay: "2s" }}>
          #creators
        </div>

        <div className={styles["fs-grid"]}>

          {/* Card 1 */}
          <div className={`${styles["fs-card"]} ${styles.c1}`}
            style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)" }}>
            <svg className={styles["fs-bg-pattern"]} viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
              <circle cx="320" cy="40" r="80" fill="#fff" />
              <circle cx="350" cy="200" r="50" fill="#fff" />
              <circle cx="50" cy="180" r="30" fill="#fff" />
            </svg>
            <div className={styles["fs-card-inner"]}>
              <div>
                <div className={styles["fs-icon-wrap"]}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className={styles["fs-tag"]} style={{ marginBottom: 10 }}>Core service</div>
                <p className={styles["fs-card-title"]}>Influencer campaign execution</p>
                <p className={styles["fs-card-sub"]}>End-to-end campaign management — creator discovery, briefing, live reporting & results</p>
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6C63FF" }}></span>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B6B" }}></span>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#11998e" }}></span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles["fs-card"]} ${styles.c2}`}
            style={{ background: "linear-gradient(150deg, #ff6a00, #ee0979)" }}>
            <svg className={styles["fs-bg-pattern"]} viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
              <rect x="120" y="-20" width="100" height="100" rx="20" transform="rotate(30 170 30)" fill="#fff" />
              <rect x="-20" y="160" width="70" height="70" rx="14" transform="rotate(-15 15 195)" fill="#fff" />
            </svg>
            <div className={styles["fs-card-inner"]}>
              <div>
                <div className={styles["fs-icon-wrap"]}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                </div>
                <p className={styles["fs-card-title"]}>UGC & short-form</p>
                <p className={styles["fs-card-sub"]}>Scroll-stopping Reels, Shorts & TikTok by vetted creators</p>
              </div>
              <div style={{ display: "flex", gap: 4, marginTop: 14 }}>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 10, padding: "3px 8px", borderRadius: 8 }}>Reels</span>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 10, padding: "3px 8px", borderRadius: 8 }}>Shorts</span>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 10, padding: "3px 8px", borderRadius: 8 }}>TikTok</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles["fs-card"]} ${styles.c3}`}
            style={{ background: "linear-gradient(160deg, #2d1b69, #11998e)" }}>
            <svg className={styles["fs-bg-pattern"]} viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,20 190,80 110,80" fill="#fff" />
              <polygon points="30,180 70,240 -10,240" fill="#fff" />
              <polygon points="160,180 180,220 140,220" fill="#fff" />
            </svg>
            <div className={styles["fs-card-inner"]} style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <div>
                <div style={{ fontSize: 42, fontWeight: 700, color: "#fff", lineHeight: 1 }}>2500+</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, margin: "4px 0 0", fontWeight: 500 }}>Creators worldwide</p>
                <div style={{ width: 40, height: 2, background: "rgba(255,255,255,0.25)", margin: "16px auto" }}></div>
                <div style={{ fontSize: 34, fontWeight: 700, color: "#fff", lineHeight: 1 }}>150+</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, margin: "4px 0 0", fontWeight: 500 }}>Brands served</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={`${styles["fs-card"]} ${styles.c4}`}
            style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
            <svg className={styles["fs-bg-pattern"]} viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
              <circle cx="160" cy="30" r="60" fill="#fff" />
              <circle cx="30" cy="220" r="40" fill="#fff" />
            </svg>
            <div className={styles["fs-card-inner"]}>
              <div>
                <div className={styles["fs-icon-wrap"]}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <p className={styles["fs-card-title"]}>Creator management</p>
                <p className={styles["fs-card-sub"]}>Contracts, briefs, timelines, revisions & payments</p>
              </div>
              <div style={{ display: "flex", marginTop: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.25)", border: "2px solid rgba(255,255,255,0.5)" }}></div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.5)", marginLeft: -8 }}></div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.5)", marginLeft: -8 }}></div>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginLeft: 8, alignSelf: "center" }}>+2.5k</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className={`${styles["fs-card"]} ${styles.c5}`}
            style={{ background: "linear-gradient(135deg, #0f3443, #34e89e)" }}>
            <svg className={styles["fs-bg-pattern"]} viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="50" x2="200" y2="50" stroke="#fff" strokeWidth="1" />
              <line x1="0" y1="100" x2="200" y2="100" stroke="#fff" strokeWidth="1" />
              <line x1="0" y1="150" x2="200" y2="150" stroke="#fff" strokeWidth="1" />
              <line x1="0" y1="200" x2="200" y2="200" stroke="#fff" strokeWidth="1" />
              <polyline points="10,200 50,160 90,170 130,100 170,60 200,30" fill="none" stroke="#fff" strokeWidth="3" />
            </svg>
            <div className={styles["fs-card-inner"]}>
              <div>
                <div className={styles["fs-icon-wrap"]}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                  </svg>
                </div>
                <p className={styles["fs-card-title"]}>Performance optimization</p>
                <p className={styles["fs-card-sub"]}>Data-backed iteration to maximise your ROI</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginTop: 14, height: 36 }}>
                <div style={{ width: 14, background: "rgba(255,255,255,0.2)", borderRadius: "4px 4px 0 0", height: "40%" }}></div>
                <div style={{ width: 14, background: "rgba(255,255,255,0.25)", borderRadius: "4px 4px 0 0", height: "55%" }}></div>
                <div style={{ width: 14, background: "rgba(255,255,255,0.3)", borderRadius: "4px 4px 0 0", height: "70%" }}></div>
                <div style={{ width: 14, background: "rgba(255,255,255,0.4)", borderRadius: "4px 4px 0 0", height: "90%" }}></div>
                <div style={{ width: 14, background: "rgba(255,255,255,0.5)", borderRadius: "4px 4px 0 0", height: "100%" }}></div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className={`${styles["fs-card"]} ${styles.c6}`}
            style={{ background: "linear-gradient(135deg, #c94b4b, #4b134f)" }}>
            <svg className={styles["fs-bg-pattern"]} viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="8" fill="#fff" />
              <circle cx="120" cy="30" r="5" fill="#fff" />
              <circle cx="200" cy="80" r="10" fill="#fff" />
              <circle cx="300" cy="40" r="6" fill="#fff" />
              <circle cx="350" cy="100" r="8" fill="#fff" />
              <circle cx="80" cy="180" r="6" fill="#fff" />
              <circle cx="250" cy="200" r="7" fill="#fff" />
              <circle cx="370" cy="190" r="5" fill="#fff" />
              <line x1="50" y1="50" x2="120" y2="30" stroke="#fff" strokeWidth="0.5" />
              <line x1="120" y1="30" x2="200" y2="80" stroke="#fff" strokeWidth="0.5" />
              <line x1="200" y1="80" x2="300" y2="40" stroke="#fff" strokeWidth="0.5" />
              <line x1="300" y1="40" x2="350" y2="100" stroke="#fff" strokeWidth="0.5" />
              <line x1="80" y1="180" x2="250" y2="200" stroke="#fff" strokeWidth="0.5" />
            </svg>
            <div className={styles["fs-card-inner"]}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div className={styles["fs-icon-wrap"]}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <p className={styles["fs-card-title"]}>Regional campaigns & product launches</p>
                  <p className={styles["fs-card-sub"]}>Hyperlocal strategies for Tier 1, 2 & 3 cities — orchestrated rollouts that build hype and convert</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: "fit-content", marginLeft: 12 }}>
                  <span style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", fontSize: 9, padding: "3px 8px", borderRadius: 6, textAlign: "center" }}>Tier 1</span>
                  <span style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", fontSize: 9, padding: "3px 8px", borderRadius: 6, textAlign: "center" }}>Tier 2</span>
                  <span style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", fontSize: 9, padding: "3px 8px", borderRadius: 6, textAlign: "center" }}>Tier 3</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FloatingCards;