function saveAdvertisement(advertisement) {
	console.log(advertisement.name);
  var conn = $.hdb.getConnection();
  var output = JSON.stringify(advertisement);
  var fnCreateadvertisement = conn.loadProcedure("POC.pocdb::deleteAd");
  var result = fnCreateadvertisement({IM_ADVERTISEMENT: advertisement.name});
  conn.commit();
  conn.close();

  if (result && result.EX_ERROR != null) { 
     return {body : result,
     status: $.net.http.BAD_REQUEST};
  }
  else { 
  	   return {body : output,
  	   	status: $.net.http.CREATED};
  	   	
  	   }
}

var body = $.request.body.asString();
var advertisement = JSON.parse(body);


// validate the inputs here!
var output = saveAdvertisement(advertisement);
$.response.contentType = "application/json";
$.response.setBody(output.body);
$.response.status = output.status;


