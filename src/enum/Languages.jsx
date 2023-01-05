import { Chip } from "@mui/material"

export const Languages = {
	C: "#4CAF50",
	Java: "#1E88E5",
	Python: "#EF5350", 
}

export const languageToChip = (language, idx) => {
    var key
    Object.keys(Languages).some(function (k) {
        if (Languages[k] === language) {
            key = k;
            return true;
        }
        return false
    });

    console.log(key)
    return <Chip label={key} style={{backgroundColor:language}} key={idx}/>
}