import { Chip } from "@mui/material"

export const Languages = {
	C: "#4CAF50",
	Java: "#1E88E5",
	Python: "#EF5350", 
    Prolog: "#ce93d8",
    React: "#81c784"
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
    return <Chip label={key} style={{width:'100px', backgroundColor:language}} key={idx}/>
}