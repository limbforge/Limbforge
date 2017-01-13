class NameArea extends React.Component {
  componentDidMount(){
    $( "#tags" ).autocomplete({
      source: availableCities
    });
  }
  constructor(props) {
    super(props);
  }

  render() {
    var nameArea = <div></div>
    var selected_gender = this.props.gender;
    var classes =  this.props.showNameArea ? 'accordion-head active' : 'accordion-head';
    if (this.props.showNameArea) {
      var nameArea = (
        <div>
          <div className="row">
            <div className="col-xs-12">
              <p className="nested-label">Patient Name</p>
            </div>
          </div>
          <div className="row">
            <div className="fname col-xs-6">
              <p className="label nested-label">First</p>
              <input id="fname" type="text" placeholder="Max" name="name"/>
            </div>
            <div className="lname col-xs-6">
              <p className="label nested-label">Last</p>
              <input id="lname" type="text" placeholder="Hova" name="name"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p className="nested-label">Select Gender</p>
            </div>
          </div>
          <div id="gender-select" className="row">
            <div className="col-xs-6">
              <label>
                <input onChange={this.props.updateGender} type="radio" name="fb" value="male" checked={selected_gender == "male" ? "checked" : ""}/>
                <img src={this.props.man_diagram }/>
              </label>
            </div>
            <div className="col-xs-6">
              <label>
                <input onChange={this.props.updateGender} type="radio" name="fb" value="female" checked={selected_gender == "female" ? "checked" : ""}/>
                <img src={this.props.woman_diagram }/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p className="nested-label">Date of Birth</p>
              <input type="date" name="bday"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p className="nested-label">Cause of Amputation</p>
              <textarea></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p className="nested-label">City of Residence</p>
            </div>
          </div>
          <div className="ui-widget">
            <input id="tags" />
          </div>
          <button onClick={this.props.toggleNameArea}>CONTINUE</button>
        </div>
      );
    }
    return (
      <div>
        <div className={classes}>
          <h2>Patient</h2>
          <span className="arrow"></span>
          <span className="line"></span>
        </div>
        {nameArea}
      </div>
    )
  }
};