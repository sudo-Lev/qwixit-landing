export type HudState = "processing" | "success";

const PROCESSING = "PROCESSING".split("");

/** The native Qwixit HUD at product size (236×58 including its 6px glow gutter). */
export function ProductHud({ state, className = "" }: { state: HudState; className?: string }) {
  return (
    <div
      className={`qx-hud ${className}`}
      data-state={state}
      role="status"
      aria-label={state === "success" ? "Qwixit: ready, text replaced" : "Qwixit: processing"}
    >
      <div className="qx-hud__frame">
        <div className="qx-hud__body" aria-hidden>
          <i className="qx-hud__bar" />
          <span className="qx-hud__face">
            <i className="qx-hud__pulse" />
            <span className="qx-hud__face-frame">
              <span className="qx-hud__face-inner">
                <span className="qx-hud__processing hud-look">
                  <b>[ ¬_¬ ]</b>
                  <b>[ •_• ]</b>
                  <b>[ ¬‿¬ ]</b>
                </span>
                <span className="qx-hud__success">[ ^_- ]</span>
              </span>
            </span>
          </span>
          <span className="qx-hud__label">
            <span className="qx-hud__processing">
              <strong className="qx-hud__wave">
                {PROCESSING.map((letter, index) => (
                  <b key={index} style={{ animationDelay: `${index * 40}ms` }}>
                    {letter}
                  </b>
                ))}
              </strong>
              <i className="qx-hud__trace">
                <b />
              </i>
            </span>
            <span className="qx-hud__success">
              <strong>READY</strong>
              <small>— TEXT REPLACED</small>
            </span>
          </span>
          <span className="qx-hud__badge">
            <b className="qx-hud__processing">AI</b>
            <b className="qx-hud__success">OK</b>
          </span>
        </div>
      </div>
    </div>
  );
}
