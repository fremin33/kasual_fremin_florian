import 'whatwg-fetch';
require('dotenv').config()



    var url = new URL("https://api.foursquare.com/v2/venues/search"),
    params = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        ll: '44.8404400,-0.5805000',
        categoryId: '4bf58dd8d48988d116941735',
        v: '20180323'
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then((results) => {
        return results.json();
    });
