const data = [
    {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
  ];
  
  function rateCalculator(loan) {
    if (loan.principal >= 2500 && loan.time > 1 && loan.time < 3)
      return 3
    else if (loan.principal >= 2500 && loan.time >= 3)
      return 4
    else if (loan.principal < 2500 || loan.time <= 1)
      return 2
    else
      return 1
  }
  // formula( principal * rate * time) / 100
  function interestCalculator(loans){
    const interestData = loans.map(loan => {
      const rate = rateCalculator(loan)
  
      return {...loan, rate, interest: (loan.principal * loan.time * rate) / 100}
    })
  
    console.log(interestData)
  
    return interestData
  }
  
  interestCalculator(data)
  