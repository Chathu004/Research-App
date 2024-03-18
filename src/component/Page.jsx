import './Page.css'
function Page(){
    return(
    <>
    <div>
        <header>
          <nav>
            <div className="nav-links" id="navLnks">
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="#current-location">CURRNENT LOCATION</a></li>


              </ul>
            </div>
          </nav>
          <h1 className="title"><b>Country </b>Information</h1>

          <div className="user-interface">
            <input type="text" id="searchtxt" placeholder="Enter location" />
            <button id="searchbtn">Search</button>

          </div>

        </header>

        <section id="current-location">
          <h1 className="heders">Current Location🌍</h1>
          <div>

            <h1 id="commonName"></h1>
            <h1 id="officialName"></h1>
            <h1 id="region"></h1>
            <h1 id="languages"></h1>
            <h1 id="area"></h1>
            <h1 id="population"></h1>
            <h1 id="flag"></h1>
            {/* <img id="img" src={whether.img} alt="" /> */}


          </div>

        </section>

      </div>

    </>
    )
}
export default Page