const MarkCircle = ({mark}) => {
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40px', width:'40px', borderRadius:'20px', marginRight:'10px', backgroundColor:'gray'}}>
            {mark}
        </div>
    )
}

export default MarkCircle