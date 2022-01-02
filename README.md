# react-fivem-boilerplate

A boilerplate to use react with fivem, bootstrapped with Vite.

## How to use it
You will need to change the RESOURCENAME with the name of your script.

```js
// context/Provider.jsx
export const ContextProvider = ({children}) => {
    //**//
    useNuiEvent('RESOURCENAME', 'toggleVisibility', setVisible)
    //**//
    return <Context.Provider value={value}>{children}</Context.Provider>
}
```

Run `npm run dev` to develop on browser.

Run `npm run build` to create a build to use on script.


## How to use nui-events

We need to use the hook 'useNuiEvent' to get the data sended from LUA.

```js 
// context/Provider.jsx
export const ContextProvider = ({children}) => {
    const [state, setState] = useState(false)
    useNuiEvent('RESOURCENAME', 'FUNCTIONNAME', setState)
    const value = {
        state, 
        setState,
    }
    return <Context.Provider value={value}>{children}</Context.Provider>
}
```
We receive the data from LUA, then we can use in all the componentes of react using a custom hook. 

```js
  // context/Provider.jsx
  export const useCustomState = () => {
    const {state, setState} = useContext(Context)
    return {state, setState}
}
```

```js
  // app.jsx
  const {state, setState} = useCustomState()
  return (
    <div>{state}</div>
  )
```

To send the data to react from LUA, we need to use the native SendNUIMessage and following data.
```lua
-- client/main.lua
SendNUIMessage({
  app = 'RESOURCENAME',
  method = 'FUNCTIONNAME', -- This method need to be the same as used on useNuiEvent hook.
  data = true
})
```
