withdraw.js
function Withdraw() {
   

  function handle () {
      
      return true;
  }

  return (
      <Card
        bgcolor="primary"
        header="Withdraw"
        withdraw={handle}
        submitButtonWithdraw="Withdrawl Successful"
      />
  )
}