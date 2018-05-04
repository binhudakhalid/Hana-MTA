function saveAdvertisement(advertisement) {
	console.log(advertisement.name);
  var conn = $.hdb.getConnection();
  var output = JSON.stringify(advertisement);
  var fnCreateadvertisement = conn.loadProcedure("POC.pocdb::createAdvertisement");
  var result = fnCreateadvertisement({IM_ADVERTISEMENT: advertisement.name, IM_NAME: advertisement.adOf});
  conn.commit();
  conn.close();

  if (result && result.EX_ERROR != null) { 
    return result.EX_ERROR;
  }
  else { return output; }
}

var advertisement = {
  name: $.request.parameters.get("name"),
  adOf: $.request.parameters.get("adOf")
};

// validate the inputs here!
var output = saveAdvertisement(advertisement);
$.response.contentType = "application/json";
$.response.setBody(output);