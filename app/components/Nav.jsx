var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-title">
          <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
            <button className="menu-icon dark" type="button" data-toggle></button>
          </span>      
        </div>
        <div id="responsive-menu">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Work</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Résumé</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>GitHub</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Eric Hodges
              </li>
            </ul>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = Nav;
