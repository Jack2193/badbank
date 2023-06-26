/*function Spa(){
  return (
    <HashRouter>
      <navbar/>
    <UserContext.Provider value={{users:[{id: 1, name:'Jack',email:'jack@email',password:'123456789',balance:100}]}}>
        <div className="container" style={{padding: "100px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
*/

function Spa(){
  return (
    <HashRouter>
      <NavBar/>
    <UserContext.Provider value={{users:[{id: 1, name:'Jack',email:'jack@email',password:'123456789',balance:100}]}}>
        <div className="container" style={{padding: "100px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);