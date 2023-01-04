import { Chip, Divider } from "@mui/material";

const CustomDivider = ({title}) => {
    return (<>
        <br />
        <Divider>
            <Chip label={title.toUpperCase()} />
        </Divider>
        <br />
    </>
    )
}

export default CustomDivider;