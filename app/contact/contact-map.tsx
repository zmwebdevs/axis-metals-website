"use client";

import { useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps?q=152+Toryork+Drive,+Toronto,+ON+M9L+1X6&output=embed";

export function ContactMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="contact-map">
      {loaded ? (
        <iframe
          title="Map showing Axis Metals at 152 Toryork Drive, Toronto"
          src={MAP_SRC}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          className="map-consent"
          onClick={() => setLoaded(true)}
        >
          <span className="map-consent-title">Load map</span>
          <span className="map-consent-copy">
            Opens an embedded Google Map for 152 Toryork Drive, Toronto. Google
            may set cookies when the map loads.
          </span>
        </button>
      )}
    </div>
  );
}
