import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character/Character";
import { useCharacter } from "./components/Character/Character.logic";

const App = () => {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        char.moveLeft();
        break;
      case "KeyD":
      case "ArrowRight":
        char.moveRight();
        break;
      case "KeyW":
      case "ArrowUp":
        char.moveUp();
        break;
      case "KeyS":
      case "ArrowDown":
        char.moveDown();
        break;

      default:
        break;
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </C.Map>
    </C.Container>
  );
};

export default App;
