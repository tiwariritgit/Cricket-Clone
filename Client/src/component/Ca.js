import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, CardGroup, Button} from 'react-bootstrap';  
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Design/Ca.css';
const API_KEY = 'e6cf0362-5541-4e18-882a-00c335d0c231';

// import Images from '../Images/images3.jpeg';
  

const Anu=()=>{  

  const [liveMatches, setLiveMatches] = useState([]);
  const teams = ['IND', 'AUS', 'NZL', 'ENG', 'PAK', 'RSA', 'AFG', 'SRL', 'NED', 'BAN'];

  const getNumericMonth = (month) =>  {
    if(month == 'Jan') return '01';
    else if(month == 'Feb') return '02';
    else if(month == 'Mar') return '03';
    else if(month == 'Apr') return '04';
    else if(month == 'May') return '05';
    else if(month == 'Jun') return '06';
    else if(month == 'Jul') return '07';
    else if(month == 'Aug') return '08';
    else if(month == 'Sep') return '09';
    else if(month == 'Oct') return '10';
    else if(month == 'Nov') return '11';
    else return '12';
  }

  const getLiveMatches = async () => {

    const date = new Date();
    const dateInfo = date.toString().split(' ');
    let currentDate = `${dateInfo[3]}-${getNumericMonth(dateInfo[1])}-${dateInfo[2]}`;
    console.log("date = "+currentDate);

    const url = `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`;

    const resp = await fetch(url);
    const jsonResp = await resp.json();
    const fixtures = jsonResp['data'];
    console.log(fixtures);

    const matches = [];

    for(let fixture of fixtures) {
      let matchDateTime = fixture['dateTimeGMT'];
      let matchDate = matchDateTime.split('T')[0];

      if(matchDate == currentDate) {
        matches.push(fixture);
      }
    }
    console.log("liveMatches before= "+liveMatches.length);
    console.log("matches= "+matches.length);
    setLiveMatches(matches);
    console.log("liveMatches after="+liveMatches.length);
  }

  const getData=async()=>{
    const options = {
    headers: {
      'X-RapidAPI-Key': '4f125e75c2msh2781c5dba20edcdp17a359jsn173c12c37926',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
   };
    const url = `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data['data']);
  }


  useEffect(() => {
    getLiveMatches();
  }, []);
  
  return (  
    
    <div className="App">
      <Container className='fluid'>  
          {
            liveMatches.map((fixture, i) => {
            return <Card >  
                    <Card.Body>  
                      <Card.Title>Match {i}</Card.Title>  
                      <Card.Text>  
                        <div className='team1'>{fixture.t1}  {fixture.t1s}</div>
                        <div className='team2'>{fixture.t2}  {fixture.t2s}</div>
                        <div className='result'>{fixture.status}</div>
                      </Card.Text>  
                      {/* <Button variant="primary">Go somewhere</Button>   */}
                    </Card.Body>  
                  </Card> 
            })
          }
      </Container>  
    </div>  
  );  
}  
export default Anu;  