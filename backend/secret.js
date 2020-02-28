const secrets = {

  dbUri: "mongodb://dbUser:dbUserPassword@report-shard-00-02-zebjd.mongodb.net:27017/test?ssl=true&replicaSet=report-shard-0&authSource=admin&retryWrites=true&w=majority"

};

const getSecret = key => secrets[key];

module.exports = getSecret;
