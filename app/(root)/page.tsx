import HeaderBox from '@/components/HeaderBox'
import TotalBlanceBox from '@/components/TotalBlanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Chamod' };

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBlanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home