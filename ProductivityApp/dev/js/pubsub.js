const pubsub = {};

(function(myObject) {

  let topics = {};

  let subUid = -1;

  myObject.publish = function( topic, args ) {

    if ( !topics[topic] ) {
      return false;
    }

    let subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func( topic, args );
    }

    return this;
  };

  myObject.subscribe = function( topic, func ) {

    if (!topics[topic]) {
      topics[topic] = [];
    }

    let token = ( ++subUid ).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token;
  };

  myObject.unsubscribe = function( token ) {
    for ( let m in topics ) {
      if ( topics[m] ) {
        for ( let i = 0, j = topics[m].length; i < j; i++ ) {
          if ( topics[m][i].token === token ) {
            topics[m].splice( i, 1 );
            return token;
          }
        }
      }
    }
    return this;
  };
}( pubsub ));

export default pubsub;