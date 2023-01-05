import { ListItem, ListItemText } from "@mui/material"
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
        <ListItem>
            <MarkCircle mark={mark} />
            <ListItemText primary={courseName} secondary={formattedDescription} />
        </ListItem>
    )
}

export default SubjectItem