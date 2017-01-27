class NameArea extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $( "#tags" ).autocomplete({
      source: availableCities
    });
  }

  renderNameArea() {
    var selected_gender = this.props.gender;

    return (
      <div className="tab-padding">
        <div className="row">
          <div className="col-xs-12">
            <p className="nested-label">Patient Name</p>
          </div>
        </div>
        <div className="row">
          <div className="fname col-xs-6">
            <input id="fname" type="text" placeholder="First" name="name"/>
          </div>
          <div className="lname col-xs-6">
            <input id="lname" type="text" placeholder="Last" name="name"/>
          </div>
        </div>
        <AmputationCause />
        <div className="row">
          <div className="col-xs-12">
            <p className="nested-label">Select Gender</p>
          </div>
        </div>
        <div id="gender-select" className="row">
          <div className="col-xs-6">
            <label>
              <input onChange={this.props.updateGender} type="radio" name="fb" value="male" checked={selected_gender == "male" ? "checked" : ""}/>
              <img src={selected_gender == "male" ? this.props.man_diagram_selected : this.props.man_diagram }/>
              <p>Male</p>
            </label>
          </div>
          <div className="col-xs-6">
            <label>
              <input onChange={this.props.updateGender} type="radio" name="fb" value="female" checked={selected_gender == "female" ? "checked" : ""}/>
              <img src={selected_gender == "female" ? this.props.woman_diagram_selected : this.props.woman_diagram  }/>
              <p>Female</p>
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
            <p className="nested-label">City of Residence</p>
          </div>
        </div>
        <div className="ui-widget">
          <input id="tags" />
        </div>
        <button onClick={() => {this.props.updateAvailableAreas('amputation')}}>CONTINUE</button>
      </div>
    );
  }

  render() {
    var classes =  this.props.availableAreas.patient.selected ? 'accordion-head active' : 'accordion-head';
    return (
      <div>
        <div onClick={()=>this.props.updateSelectedArea('patient')} className={classes}>
          <h2>Patient</h2>
          <span className="arrow"></span>
        </div>
        {this.props.availableAreas.patient.selected ? this.renderNameArea() : ''}
      </div>
    )
  }
};
