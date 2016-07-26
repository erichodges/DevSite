var React = require('react');

var Work = React.createClass({

  render: function() {
    return (
      <div>
        <div className="row">
          <div className="columns  medium-centered large-centered">
            <div className="hr"></div>
          </div>
          <div className="row work">
            <div className="small-11 medium-3 columns">
              <div>
                <img src="../images/todo_app.png"/>
              </div>
            </div>
            <div className="small-11 medium-3 columns">
              <div>
                <img src="../images/poli-tweet.png"/>
              </div>
            </div>
            <div className="small-11 medium-3 columns">
              <div>
                <img src="../images/tea-rex.png"/>
              </div>
            </div>
            <div className="small-11 medium-3 columns">
              <div>
                <img src="../images/todo_app.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Work;
