import React from 'react'

const TotalBlanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBlanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart"></div>
    </section>
  )
}

export default TotalBlanceBox