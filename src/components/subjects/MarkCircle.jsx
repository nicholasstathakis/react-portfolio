const MarkCircle = ({ mark }) => {

    const markAsInt = parseInt(mark, 10)

    var colour
    if (markAsInt === 100) {
        colour = '#ef9a9a'
    } else if (markAsInt >= 95) {
        colour = '#c8e6c9'
    } else if (markAsInt >= 85) {
        colour = '#ffff8d'
    } else {
        colour = '#ff8a80'
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            height: '60px', 
            width: '60px', 
            borderRadius: '30px', 
            marginRight: '10px', 
            backgroundColor: colour,
            color:'black',
            fontWeight:'bolder',
            border: '5px dotted black'
        }}>
            {mark}
        </div>
    )
}

export default MarkCircle