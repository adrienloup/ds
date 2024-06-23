export default function TestContextAndReducer() {
  console.log("TestContextAndReducer");

  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
