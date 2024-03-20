import { useState, useEffect } from 'react'
import './Page.css'

function Page() {
  const [country, setCountry] = useState({
    commonName: 'Common Name : ',
    officialName: 'Official Name : ',
    capital: 'Capital : ',
    region: 'Region : ',
    // languages: 'Languages : ',
    area: 'Area : ',
    population: 'Population : ',
    timezones: 'Time Zones : ',
    // continents: 'continents : ',
    flags: 'Flags : '
  });

  useEffect(() => {
    const searchBtn = document.getElementById('searchbtn');
    searchBtn.addEventListener('click', () => {
      const searchVal = document.getElementById('searchtxt').value;
      const requestOptions = {
        method: 'GET'
      };
      console.log('Search value:', searchVal);

      fetch(`https://restcountries.com/v3.1/name/${searchVal}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          setCountry({
            commonName: `Common Name : ${searchVal}`,
            officialName: 'Official Name : ' + data[0]?.name?.official,
            capital: 'Capital :' + data[0]?.capital,
            region: 'Region : ' + data[0]?.region,
            // languages: Object.values(data[0].languages).join(', '),
            area: 'Area : ' + data[0]?.area,
            population: 'Population : ' + data[0]?.population,
            timezones: 'Timezone : ' + data[0]?.timezones,
            // continents: Object.values(data[0].continents).join(', '),
            flags: data[0]?.flags?.png

          });
        })
        .catch(error => console.error('Error fetching data', error));
    });
  }, []);
  return (
    <>

      <div>
        <header>
          <nav>
            <div className="nav-links" id="navLnks">
              <ul>
                {/* <li><a href="">HOME</a></li> */}
                <li><span style={{ fontSize: '25px' }}>&#128072;</span> <a href="">HOME</a></li>
                {/* <li><a href="#current-location">CURRNENT LOCATION</a></li> */}
              </ul>
            </div>
          </nav>
          <h1 className="title"><b>Country </b>Information</h1>

          <div className="user-interface">
            <input type="text" id="searchtxt" placeholder="Enter location" />
            <button id="searchbtn">Search</button>
          </div>
        </header>

        <section id='current-location'>
          <h1 className="headers">Current Location🌍</h1>
          <div className='countryData'>

            <h1 id="commonName">{country.commonName}</h1>
            <h1 id="officialName">{country.officialName}</h1>
            <h1 id="capital">{country.capital}</h1>
            <h1 id="region">{country.region}</h1>
            <h1 id="languages">{country.languages}</h1>
            <h1 id="area">{country.area}</h1>
            <h1 id="population">{country.population}</h1>
            <h1 id="timezones">{country.timezones}</h1>
            <h1 id="continents">{country.continents}</h1>
            <h1 id="flags"><img src={country.flags} alt="Flag : " /></h1>
          </div>
        </section>
      </div>

    </>
  )
}
export default Page