import { Chip } from "@mui/material"

export const Skills = {
	Android: "#4CAF50",
	Kotlin: "#1E88E5",
	Architecture: "#EF5350",
	Game_Development: "#FBC02D" 
}

export const skillToChip = (skill, idx) => {
    var key
    Object.keys(Skills).some(function (k) {
        if (Skills[k] === skill) {
            key = k;
            return true;
        }
        return false
    });

    console.log(key)
    return <Chip label={key} style={{backgroundColor:skill}} key={idx}/>
}