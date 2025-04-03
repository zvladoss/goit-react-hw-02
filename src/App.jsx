import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import friends from "./data/friendList.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";
import Container from "./components/Container/Container";
const App = () => {
  return (
    <Container>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
