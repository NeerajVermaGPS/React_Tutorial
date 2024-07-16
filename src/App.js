import './App.css';
import React from 'react';
// import Form from './components/Form';
// import Hello from './components/Hello';
// import RefTut from './components/RefTut';
// import Styling from './components/Styling';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import NameList from './components/NameList';
// import PortalsD from './components/PortalsD';
// import ClickFunc from './components/ClickFunc';
// import PersonObj from './components/PersonObj';
// import CompA from './components/Contexts/CompA';
// import CompD from './components/Contexts/CompD';
// import { UserProvider } from './components/Contexts/UserContext';
// import ClickClass from './components/ClickClass';
// import LifecycleA from './components/LifecycleA';
// import ParentComp from './components/ParentComp';
// import FRParentRef from './components/FRParentRef';
// import UserGreeting from './components/UserGreeting';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import DestructProp from './components/DestructProp';
// import ErrorBoundary from './components/ErrorBoundary';
// import ErrorHandling from './components/ErrorHandling';
// import PostList from './components/HTTPSRqsts/PostList';
// import CreatePost from './components/HTTPSRqsts/CreatePost';
// import ReCounter from './components/RenderProps/Counter';
// import ReClickCounter from './components/RenderProps/ClickCounter';
// import ReHoverCounter from './components/RenderProps/HoverCounter';
// import DestructPropClass from './components/DestructPropClass';
// import "./components/files/Style.css"
// import styles from "./components/files/Style.module.css"
// import Greet from "./components/Greet" //there are two methods to import, any name (when export in Greet is Greet), {Greet}(for name exports)

class App extends React.Component {
  // Used for Modal implementation with PortalsD.js
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      isModalOpen: false
  //   }

  //   this.handleModal = this.handleModal.bind(this)
  // }
  
  // handleModal = () => {
  //   this.state.isModalOpen ? this.setState({isModalOpen: false}) : this.setState({isModalOpen: true})
  //   console.log("Modal Open is: ", this.state.isModalOpen)
  // }

  render() {
    return (
      <div className="App">
        {/* <h1 className={styles.success}>Success Class from Module CSS: Not inherited in child components</h1>
        <h1 className='error'>Error Class from Direct CSS: Inherited in child components</h1>
        <Greet name="Madam"/>
        <Greet name="Neeraj"/>
        <Greet name="Ladali"><button>Jai Shree Krishna</button></Greet>
        <Welcome name="Madam"/>
        <Welcome name="Radha">This is again secret.</Welcome>
        <Hello />
        <Message/>
        <DestructProp name="Madam" newName="Rooh">It works by breaking the props into its components</DestructProp>        
        <DestructPropClass name="Madam" newName="Rooh">It works by breaking the props into its components</DestructPropClass>
        <ClickFunc />
        <ClickClass />
        <UserGreeting />
        <PersonObj />
        <NameList />
        <Styling primary={true} fontXL={true}/>
        <Form />
        <LifecycleA />
        <ParentComp />
        <RefTut />
        <FRParentRef />
        <button onClick={this.handleModal}>Open Modal</button>
        {this.state.isModalOpen ? <PortalsD><button onClick={this.handleModal}>Close Modal</button></PortalsD> : ""}
        <ErrorBoundary>
        <ErrorHandling heroName="Batman"/> // Change batman with joker to see the error handling
        <ErrorHandling heroName="Madam"/> 
        <Counter sec={10}></Counter>
        </ErrorBoundary>
        <ClickCounter name="Madam"/>
        <HoverCounter />
        <ReCounter render={(count, incrementCount) => {
            return <ReClickCounter count={count} incrementCount={incrementCount}/>
        }}/>
        <ReCounter render={(count, incrementCount) => {
            return <ReHoverCounter count={count} incrementCount={incrementCount}/>
        }} />
        <UserProvider value="Madam">
          <CompA />
        </UserProvider>
        <UserProvider value="Unknown">
          <CompD />
        </UserProvider>
        <PostList/>
        <CreatePost /> */}
      </div>
    );
  }
}

export default App;