const Complaint = require('../controllers/complaints.controller');

module.exports = function (app) {
    app.route(app.rootUrl + '/complaints')
        .get(Complaint.list)
        .post(Complaint.create);
};