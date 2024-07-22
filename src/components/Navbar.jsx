const Navbar=({setCategory})=>{
  
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News Mag</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link active" style={{cursor:"pointer"}} onClick={()=>(setCategory("Technology"))}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" style={{cursor:"pointer"}} onClick={()=>(setCategory("Business"))}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" style={{cursor:"pointer"}} onClick={()=>(setCategory("Health"))}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" style={{cursor:"pointer"}} onClick={()=>(setCategory("Sports"))}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" style={{cursor:"pointer"}} onClick={()=>(setCategory("Entertainment"))}>Entertainment</div>
              </li> 
            </ul>
            
          </div>
          <div class="search-bar flex " style={{marginRight:"1vw"}}>
                <input type="text" id="search-Text" class="new-input" style={{all:"unsset",borderStyle:"None",marginRight:"6px",backgroundColor:"white",color:"black",paddingInline:"4px",borderRadius:"3px"}}placeholder="e.g virat"/>
                <button id="search-button" style={{all:"unset",backgroundColor:"white",color:"black",paddingInline:"4px",borderRadius:"3px"}} class="search-button" onClick={()=>{
                      const txt=document.getElementById("search-Text");
                      const val=txt.value;
                      setCategory(val);
                }}>Search</button>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar