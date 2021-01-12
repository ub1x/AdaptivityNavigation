# Для чего нужна эта библиотека?

- Для адаптивного ui навигации в зависимости от размеров экрана (В соответствии с [VKUI StyleGuide](https://vkcom.github.io/VKUI/#epic))

# Установка

Используя npm:

```sh
$ npm i @ub1x/adaptivitynavigation
```

Используя yarn:

```sh
$ yarn add @ub1x/adaptivitynavigation
```

# Использование

## NavigationProvider

Для начала нужно обернуть приложение в `NavigationProvider`

```jsx
// App.jsx
import { NavigationProvider } from "@ub1x/adaptivitynavigation";
// import activeStory from your storage (Redux or any)
const App = () => {
  <NavigationProvider activeStory={activeStory}>
    <App />
  </NavigationProvider>;
};
```

### Важно

Библиотека базируется на хуке [useAdaptivity](https://vkcom.github.io/VKUI/#!/Adaptivity), поэтому Ваше приложение должно быть обернуто в `AdaptivityProvider`

##### Пример

```jsx
// index.js
import ReactDOM from "react-dom";
import { AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import App from "./App";

ReactDOM.render(
  <AdaptivityProvider>
    <AppRoot>
      <App />
    </AppRoot>
  </AdaptivityProvider>,
  document.getElementById("root")
);
```

## buttons

`NavigationProvider` ожидает в себе набор кнопок, которые в дальнейшем будут использоваться для навигации.
`NavigationButton` нужно передать в пропс `buttons`, который инкапсулирует поведение `TabbarItem` и `Cell`

### Пример

```jsx
// App.jsx
import {
  NavigationProvider,
  NavigationButton,
} from "@ub1x/adaptivitynavigation";
// import activeStory from your storage (Redux or any)
const App = () => {
  <NavigationProvider
    activeStory={activeStory}
    buttons={
      <Fragment>
        <NavigationButton
          selected={activeStory === "main"}
          data-story="main"
          onClick={(e) =>
            alert("You click to button " + e.currentTarget.dataset.story)
          }
          text="Сервисы"
        >
          <Icon28ServicesOutline />
        </NavigationButton>
        <NavigationButton
          selected={activeStory === "clips"}
          data-story="clips"
          onClick={(e) =>
            alert("You click to button " + e.currentTarget.dataset.story)
          }
          text="Клипы"
        >
          <Icon28ClipOutline />
        </NavigationButton>
      </Fragment>
    }
  >
    <App />
  </NavigationProvider>;
};
```
