import React, { useContext, useState } from "react";
import CounterComp from "./pages/CounterComp";
import CounterReducer from "./pages/CounterReducer";
import PropsComp from "./pages/PropsComp";
import FormPage from "./pages/FormPage";
import FormPage2 from "./pages/FormPage2";
import FetchApi from "./pages/FetchApi";
import EffectPrac from "./pages/EffectPrac";
import UserContext from "./CommonComp/UserContext";
import CounterReducerMock from "./MockInterview/CounterReducerMock";
import { ReducerFunctInput } from "./UseReducerExample/ReducerFunctInput";
import ReducerWithSingleComp from "./MockInterview/ReducerWithSingleComp";
import AddItemAction from "./redux1/AddItemAction";
import AddItemComp from "./redux1/AddItemComp";
import RefExample from "./pages/RefExample";
import ExpensiveComponent from "./pages/ExpensiveComponent";
import FormPrac from "./pages/FormPrac";
import TodoCompPrac from "./pages/TodoCompPrac";
import FetchLink from "./pages/FetchLink";
import ShowData from "./CustomHooks/ShowData";
import Nav from "./Routing/Nav";
import { Outlet } from "react-router-dom";
import DataUsage from "./ContextApi/DataUsage";
import FormHandle from "./pages/FormHandle";
import WithBorder from "./HOC/WithBorder";
import WithText from "./HOC/WithText";

const App = () => {
  // const { id, user } = useContext(UserContext);
  // const [details, setDetails] = useState({ id, user });
  // console.log(details);

  const TextWithBorder = WithBorder(WithText);

  // const { id, name } = useContext(UserContext);
  // const [details, setDetails] = useState({ id, name });

  // const data = [
  //   {
  //     id: 1,
  //     name: "John",
  //   },
  //   {
  //     id: 2,
  //     name: "Doe",
  //   },
  // ];
  return (
    <div>
      <TextWithBorder text="Hello HOC!!!!!!" />
      <TextWithBorder text="hiiii bindu" />
      {/* <EffectPrac /> */}
      {/* <FormHandle /> */}
      {/* <UserContext.Provider value={{ details, setDetails }}>
        <DataUsage />
      </UserContext.Provider> */}
      {/* <AddItemAction /> */}
      {/* <AddItemComp /> */}
      {/* <ReducerWithSingleComp /> */}
      {/* <ReducerFunctInput /> */}
      {/* <CounterReducerMock /> */}
      {/* <UserContext.Provider value={{ details, setDetails }}>
        <EffectPrac />
      </UserContext.Provider> */}
      {/* <FetchApi /> */}
      {/* <PropsComp props={data} /> */}
      {/* <CounterComp /> */}
      {/* <CounterReducer /> */}
      {/* <FormPage /> */}
      {/* <FormPage2 /> */}
      {/* <RefExample /> */}
      {/* <ExpensiveComponent /> */}
      {/* <FormPrac /> */}
      {/* <TodoCompPrac /> */}
      {/* <FetchLink /> */}
      {/* <ShowData /> */}
      {/* <Nav />
      <Outlet /> */}
    </div>
  );
};

export default App;
