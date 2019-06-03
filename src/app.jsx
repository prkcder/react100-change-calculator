import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  calculate(amountDue, amountReceived) {
    let totalDue = amountReceived - amountDue;
    let owed = (amountDue - amountReceived);
    this.setState({totalDue: totalDue.toFixed(2)});
    this.setState({owed: owed.toFixed(2)});


    let newTotal = (amountReceived * 100)-(amountDue*100);

    let Tw = Math.floor(newTotal/2000);
    this.setState({twenties: Tw});

    let Te = Math.floor(((newTotal)-(Tw*2000))/1000);
    this.setState({tens: Te});

    let Fi = Math.floor(((newTotal)-(Tw*2000)-(Te*1000))/500);
    this.setState({fives: Fi});

    let On = Math.floor(((newTotal)-(Tw*2000)-(Te*1000)-(Fi*500))/100);
    this.setState({ones: On});

    let Qa = Math.floor(((newTotal)-(Tw*2000)-(Te*1000)-(Fi*500)-(On*100))/25);
    this.setState({quarters: Qa});

    let Di = Math.floor(((newTotal)-(Tw*2000)-(Te*1000)-(Fi*500)-(On*100)-(Qa*25))/10);
    this.setState({dimes: Di});

    let Ni = Math.floor(((newTotal)-(Tw*2000)-(Te*1000)-(Fi*500)-(On*100) -(Qa*25)-(Di*10))/5);
    this.setState({nickels: Ni});
    
    let Pe = Math.ceil(((newTotal)-(Tw*2000)-(Te*1000)-(Fi*500)-(On*100) -(Qa*25)-(Di*10)-(Ni*5))/1);
    this.setState({pennies: Pe})
    


}




  render() {
   return(
   <div className="container">
    <header>
      <h1 id="tagline" className="text-white">Change Calculator</h1>
      <hr />
    </header>




    <div className="container">





      <div className="row">
      <div className="col-md-4">

      <div className="card">

              <div className="card-body">
      <h6 className="card-title">Enter Information</h6>

      <form>
        <div className="form-group">
          <label htmlFor="amountDue" >How much is due?</label>
          <input name="amountDue" type="number" className="form-control" placeholder="0" value={this.state.amountDue} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="amountReceived" >How much was received?</label>
          <input name="amountReceived" type="number" className="form-control" placeholder="0" value={this.state.amountReceived} onChange={this.handleChange}/>
        </div>
      </form>

        <button type="button" className="btn btn-primary btn-block" onClick={()=>{this.calculate(this.state.amountDue, this.state.amountReceived)}} >Calculate</button>
              </div>

      </div>

      </div>
      
      
      


      <div className="col-md-8 card">
<div>
   {/* { if(totalDue > 0) {

      <div className="text-center alert alert-success">The total change due is <strong>${this.state.totalDue}</strong></div>

    } else {

      <div className="text-center alert alert-danger"><strong>Additional money owed ${this.state.owed}</strong></div>
   
    }
  } */}
</div>

   <br/>

      <div className="row">
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Twenties</h6>
          <p className="change text-center">{this.state.twenties}</p>
          </div>
        </div>
        </div>
      
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Tens</h6>
          <p className="change text-center">{this.state.tens}</p>
          </div>
        </div>
        </div>
      
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Fives</h6>
          <p className="change text-center">{this.state.fives}</p>
          </div>
        </div>
        </div>
      
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Ones</h6>
          <p className="change text-center">{this.state.ones}</p>
          </div>
        </div>
        </div>
      
      
    
    {/* the row 6 className="text-center" stops at this div */}
      </div>

<br></br>


      <div className="row">
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Quarters</h6>
          <p className="change text-center">{this.state.quarters}</p>
          </div>
        </div>
        </div>
      
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Dimes</h6>
          <p className="change text-center">{this.state.dimes}</p>
          </div>
        </div>
        </div>
      
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Nickels</h6>
          <p className="change text-center">{this.state.nickels}</p>
          </div>
        </div>
        </div>
      
        <div className="col-md-3">
        <div className="card well">
          <div className="card-body">
          <h6 className="text-center">Pennies</h6>
          <p className="change text-center">{this.state.pennies}</p>
          </div>
        </div>
        </div>
      
      
    
    {/* the row 2 stops at this div */}
      </div>
















{/* column 8 card */}
      </div>
      
      
      
      
      
      
      
      
      {/* right below first row */}
      </div>


{/* right below header */}
    </div>













{/* right below return */}
    </div>
   )
}
}
export default App;
