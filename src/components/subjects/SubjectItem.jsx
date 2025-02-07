import { ListItem, ListItemText } from "@mui/material"
import { languageToChip } from "../../enum/Languages";
import MarkCircle from "./MarkCircle";

const SubjectItem = ({
    courseName,
    description,
    termTaken,
    mark,
    languages
}) => {

    const formattedDescription = `${description} [${termTaken}]`
    return (
        <ListItem divider sx={{ width: '100%' }}>
            <MarkCircle mark={mark} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemText primary={courseName} secondary={formattedDescription} />
                <div style={{display:'flex', flexDirection: 'row', gap: '10px'}}>
                    {languages.map((lang, idx) => {
                        return languageToChip(lang, idx)
                    })}
                </div>
            </div>

        </ListItem>
    )
}

export default SubjectItem