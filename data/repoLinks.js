RepoLinks = new Mongo.Collection('RepoLinks');
const SimpleSchema = require('simpl-schema').default;

var Person = String;
RepoLinks_schema = new SimpleSchema({
    url: {
        type: String,
        label: "URL"
    },
    tags: {
        type: Array,
    },
    "tags.$": {
        type: String,
        regEx: /^[A-Za-z0-9-]+$/,
        label: "Tags"
    },
    "created.by": {
        type: Person,
        label: "Created by"
    },
    "created.at": {
        type: Date,
        label: "Created on"
    },
    ratings: {
        type: Array
    },
    "ratings.$.by": {
        type: Person,
        label: "Rated by"
    },
    "ratings.$.stars": {
        type: Number,
        label: "Stars"
    }
});

RepoLinks.attachSchema(RepoLinks_schema);
