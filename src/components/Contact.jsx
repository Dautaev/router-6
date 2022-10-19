import React from "react";
import { YMaps,Map } from "react-yandex-maps";

import ymaps from "ymaps";

export function Contact() {
  return (   
      <YMaps>
        <Map
          defaultState={{
            center: [43.324675, 45.692376],
            zoom: 17,
              }}
        ></Map>
      </YMaps>
    
  );
}
