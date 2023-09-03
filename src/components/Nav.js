import React, { useState, useEffect } from "react";

function Nav() {
    const [activeWeapons, setActiveWeapons] = useState([]);
    const [activeStickers, setActiveStickers] = useState(
        {
            "katowice 2014": [],
            "cologne 2014": [],
            "dreamhack 2014": [],
            "katowice 2015": []
        }
    );

    const weapons = ["Ak-47", "M4a4", "M4a1-s", "AWP", "Desert Eagle", "Usp-s", "Glock", "P2000"]

    const stickerData = {
        "katowice 2014": ["ESL Wolf (Foil)","ESL Skull (Foil)","3DMAX (Holo)","Ninjas in Pyjamas (Holo)","Titan (Holo)","Natus Vincere (Holo)","Clan-Mystik (Holo)","mousesports (Holo)","iBUYPOWER (Holo)","Vox Eminor (Holo)","Virtus.Pro (Holo)","Reason Gaming (Holo)","compLexity Gaming (Holo)","Team Dignitas (Holo)","Fnatic (Holo)","HellRaisers (Holo)","Team LDLC.com (Holo)","LGB eSports (Holo)","Vox Eminor","Natus Vincere","LGB eSports","mousesports","Team Dignitas","Virtus.Pro","3DMAX","Clan-Mystik","Fnatic","compLexity Gaming","HellRaisers","Ninjas in Pyjamas","Titan","iBUYPOWER","Reason Gaming","Team LDLC.com"],
        "cologne 2014": ["Team Dignitas (Holo)","iBUYPOWER (Holo)","dAT team (Holo)","Titan (Holo)","London Conspiracy (Holo)","Team LDLC.com (Holo)","Vox Eminor (Holo)","Cloud9 (Holo)","Natus Vincere (Holo)","Copenhagen Wolves (Holo)","HellRaisers (Holo)","Epsilon eSports (Holo)","MTS GameGod Wolf (Holo)","Virtus.Pro (Holo)","Fnatic (Holo)","Ninjas in Pyjamas (Holo)","iBUYPOWER,Team Dignitas","Titan,London Conspiracy","Vox Eminor","Team LDLC.com","Cloud9,Natus Vincere","HellRaisers","Epsilon eSports","dAT team","Virtus.Pro","Fnatic","Copenhagen Wolves","Ninjas in Pyjamas","MTS GameGod Wolf"],
        "dreamhack 2014": ["Team Dignitas (Foil)","Cloud9 (Foil)","Fnatic (Foil)","Natus Vincere (Foil)","DreamHack Winter 2014 (Foil)","Ninjas in Pyjamas (Foil)","Virtus.Pro (Foil)","Team Dignitas (Holo)","Fnatic (Holo)","Cloud9 (Holo)","Virtus.Pro (Holo)","Natus Vincere (Holo)","Ninjas in Pyjamas (Holo)","iBUYPOWER","Bravado Gaming","Planetkey Dynamics","Team Dignitas","Flipsid3 Tactics","Copenhagen Wolves","Cloud9","HellRaisers","Team LDLC.com","myXMG","ESC Gaming","Ninjas in Pyjamas","PENTA Sports","Fnatic","Virtus.Pro","DreamHack Winter 2014"],
        "katowice 2015": ["LGB eSports (Foil)","Titan (Foil)","Vox Eminor (Foil)","3DMAX (Foil)","Counter Logic Gaming (Foil)","Cloud9 G2A (Foil)","Flipsid3 Tactics (Foil)","Natus Vincere (Foil)","HellRaisers (Foil)","Fnatic (Foil)","Keyd Stars (Foil)","Virtus.pro (Foil)","Ninjas in Pyjamas (Foil)","Team EnVyUs (Foil)","TSM Kinguin (Foil)","ESL One (Foil)","PENTA Sports (Foil)","Vox Eminor (Holo)","Titan (Holo)","Natus Vincere (Holo)","LGB eSports (Holo)","Cloud9 G2A (Holo)","Counter Logic Gaming (Holo)","Flipsid3 Tactics (Holo)","Virtus.pro (Holo)","Keyd Stars (Holo)","3DMAX (Holo)","HellRaisers (Holo)","Fnatic (Holo)","TSM Kinguin (Holo)","Ninjas in Pyjamas (Holo)","Team EnVyUs (Holo)","PENTA Sports (Holo)","Vox Eminor","LGB eSports","Titan","3DMAX","HellRaisers","Flipsid3 Tactics","Cloud9 G2A","Counter Logic Gaming","Keyd Stars","Natus Vincere","Virtus.pro","Fnatic","Team EnVyUs","TSM Kinguin","Ninjas in Pyjamas","PENTA Sports","ESL One"]
    }


    const handleWeaponChoice = (e) => {
        const weapon = e.target.innerHTML;

        if (!activeWeapons.includes(weapon)) {
            setActiveWeapons(prevWeapons => [...prevWeapons, weapon]);
        } else if (activeWeapons.includes(weapon)) {
            setActiveWeapons(prevWeapons => prevWeapons.filter(w => w !== weapon));       
        }
    }

    const handleStickerChoice = (e) => {
        const sticker = e.target.innerHTML;
        const tournament = e.currentTarget.parentElement.parentElement.getAttribute("data-tournament");
        
        const newActiveStickers = { ...activeStickers };
        
        if (!activeStickers[tournament].includes(sticker)) {
            newActiveStickers[tournament] = [...newActiveStickers[tournament], sticker];
        } else if (activeStickers[tournament].includes(sticker)) {
            newActiveStickers[tournament] = newActiveStickers[tournament].filter(existingSticker => existingSticker !== sticker);
        }

        setActiveStickers(newActiveStickers);
    }

    useEffect(() => {
        console.log(activeStickers);
    }, [activeStickers]);


    return (
        <div>
            <div className="Nav">
                <div className="weapons">
                    {weapons.map(weapon => (
                        <p
                        className={activeWeapons.includes(weapon) ? "active" : ""}
                        key={weapon} 
                        onClick={handleWeaponChoice}>{weapon}
                        </p>
                    ))}
                </div>
                <br></br>
                <div className="stickers">
                    {Object.entries(stickerData).map(([tournament, stickers]) => {
                        return ( 
                        <div className="dropdown" key={tournament} data-tournament={tournament}>
                            <p>{tournament}</p>
                            <div className="dropdown-content">
                                {stickers.map(sticker => (
                                    <p
                                    className={activeStickers[tournament].includes(sticker) ? "active" : ""}
                                    onClick={handleStickerChoice} 
                                    key={`${tournament} | ${sticker}`}>{sticker}
                                    </p>
                                ))}
                            </div>
                        </div>)
                    })}
                </div>
            </div>

        </div>   
    );
  }
  
  export default Nav;