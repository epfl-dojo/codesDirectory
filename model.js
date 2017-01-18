export const RepoLinks = new Mongo.Collection('RepoLinks');
const SimpleSchema = require('simpl-schema').default;

var Person = String;
RepoLinks_schema = new SimpleSchema({
    repoUri: {
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
    "contact": {
        type: Person,
        label: "Contact"
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
