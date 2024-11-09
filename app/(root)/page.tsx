import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = {firstName: 'Adrian', lastName: 'Johan', email: 'adrian@gmail.com'};

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transaction efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={10000}
                    />
                </header>
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[
                    {
                        name: "Adrian Johan",
                        currentBalance: 1200.50,
                        mask: 1234
                    },
                    {
                        name: "Adrian Johan",
                        currentBalance: 1200.50,
                        mask: 1234
                    }
                ]}
            />
        </section>
    );
};

export default Home;
