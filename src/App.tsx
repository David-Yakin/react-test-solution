import "./App.css";
import BookCard from "./questions/question1";
import ToggleDiv from "./questions/question2";
import ColorChanger from "./questions/question3";
import ColoredDivs from "./questions/question4";
import Question5 from "./questions/question5";

function App() {
  return (
    <div>
      <div>Question 1</div>
      <BookCard
        book={{ name: "string", author: "author", year: 2020, forKids: true }}
      />
      <hr />
      <div>Question 2</div>
      <ToggleDiv />
      <hr />
      <div>Question 3</div>
      <ColorChanger />
      <hr />
      <div>Question 4</div>
      <ColoredDivs />
      <hr />
      <div>Question 5</div>
      <Question5 />
    </div>
  );
}

export default App;
