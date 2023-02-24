import logoHol from "../style/photos/logo/logoHol.png"
export default function Footer(){

    /*
    footer component,
    will display some information about the 
    project
    */
    return(
        <div className="footerDiv">
        <footer style={{color:"gray", }}>
            <small>@This is a project made by holbies from </small><img style={{maxWidth:"0.7rem"}} 
            src={logoHol}/><span style={{color:"#E11D3F"}}><small>holberton school</small></span>
        </footer>
        </div>
    )
}