var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

// Handle POST requests
exports.addRSVP = function(req, res) {

    var rsvpEmail = req.body.rsvpEmail;

    console.log(rsvpEmail);

    data.rsvp.push(rsvpEmail);

    res.send(rsvpEmail);
}
