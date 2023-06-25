function Deposit() {
   
  function handle() {
      
      return true;
  }

  return (
      <Card
        bgcolor="primary"
        header="Deposit"
        deposit={handle}
        submitButtonDeposit="Deposit Successful"
      />
  )
}