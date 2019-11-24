const ModelStandup = require('./StandupModel')

module.exports = {
    index: function (req, res) {
        ModelStandup.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        ModelStandup.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        ModelStandup.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        ModelStandup.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ModelStandup.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(show)
        })
    },

    upload: function (req, res) {
        ModelStandup.findByIdAndUpdate(req.params.id, {
            image_url: req.file.url
        }, {
            new: true
        }).then(function (row) {
            res.send(row)
        })
    }
}