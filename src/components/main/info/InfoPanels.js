import "./info.css";
import React from "react";

import { Panel } from "./Panel.js";

class InfoPanels extends React.Component {
  render() {
    return (
      <>
        <Panel
          mainText="Enjoy on your TV."
          subText="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          imageUrl={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          }
        />
        <Panel
          mainText="Download your shows to watch offline."
          subText="Save your favorites easily and always have something to watch."
          imageUrl={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          }
        />
        <Panel
          mainText="Watch everywhere."
          subText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          imageUrl={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          }
        />
        <Panel
          mainText="Create profiles for kids."
          subText="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          imageUrl={
            "https://occ-0-472-448.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
          }
        />
      </>
    );
  }
}

export { InfoPanels };
