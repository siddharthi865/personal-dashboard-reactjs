import { barData, pieData } from "./data/chartData";
import ChartCard from "./components/ChartCard";
import UserCard from "./components/UserCard";
import TodoList from "./components/TodoList";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="grid gap-6 md:grid-cols-3">
        <UserCard />

        <ChartCard title="Weekly Activity" data={barData} />
        <ChartCard title="Time Distribution" data={pieData} />

        <div className="md:col-span-3">
          <TodoList />
        </div>
      </div>
    </Layout>
  );
}

export default App;
