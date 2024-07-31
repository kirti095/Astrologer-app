function cardclick(zodaicsign) {
      getzodaicdetails(zodaicsign);
      changeimage(zodaicsign);
  }
  
  function getzodaicdetails(zodaicsign) {
      const URL = "https://daily-horoscope-api-apiverve.p.rapidapi.com/v1/horoscopesign";
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'daily-horoscope-api-apiverve.p.rapidapi.com',
            'x-rapidapi-key': 'd37035f7f7msh5748783ef8b2a1cp1af2bfjsn4194c0ca579f'
        }
    };

    fetch(`${URL}?sign=${zodaicsign}&day=today`, options)
        .then(response => response.json())
        .then(showzodaicdetails)
        .catch(error => console.error('Error:', error));
  }

  function showzodaicdetails(response) {
      let current_date = document.getElementById('current_date');
      let today = new Date().toString().split(' ').splice(1, 3).join(' ');
      current_date.innerText = today;
      
      let lucky_time = document.getElementById('lucky_time');
      lucky_time.innerText = `${response.data.luckyTime}`;
  
      let lucky_number = document.getElementById('lucky_number');
      lucky_number.innerText = `${response.data.luckyNumber}`;
  
      let color = document.getElementById('color');
      color.innerText = `${response.data.color}`;
  
      let mood = document.getElementById('mood');
      mood.innerText = `${response.data.mood}`;
  
      let description = document.getElementById('description');
      description.innerText = `${response.data.horoscope}`;
  }
  
  function changeimage(zodaicsign) {
      let zodaicimage = document.getElementById('zodaicimg');
  
      switch (zodaicsign) {
          case 'aries':
              zodaicimage.setAttribute("src", `aries.jpeg`);
              break;
          case 'taurus':
              zodaicimage.setAttribute("src", `Taurus.webp`);
              break;
          case 'gemini':
              zodaicimage.setAttribute("src", `Gemini.webp`);
              break;
          case 'cancer':
              zodaicimage.setAttribute("src", `Cancer.webp`);
              break;
          case 'leo':
              zodaicimage.setAttribute("src", `Leo.webp`);
              break;
          case 'virgo':
              zodaicimage.setAttribute("src", `Virgo.webp`);
              break;
          case 'libra':
              zodaicimage.setAttribute("src", `libra.jpeg`);
              break;
          case 'scorpio':
              zodaicimage.setAttribute("src", `Scorpio.webp`);
              break;
          case 'sagittarius':
              zodaicimage.setAttribute("src", `Sagittarius.webp`);
              break;
          case 'capricorn':
              zodaicimage.setAttribute("src", `Capricorn.webp`);
              break;
          case 'aquarius':
              zodaicimage.setAttribute("src", `Aquarius.webp`);
              break;
          default:
              zodaicimage.setAttribute("src", `Pisces.webp`);
      }
  }