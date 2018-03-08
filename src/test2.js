 import React from 'react';
 import ReactDOM from 'react-dom';

// class ProductCategoryRow extends React.Component {
//     render() {
//         return <tr><th colSpan="2">{this.props.category}</th></tr>;
//     }
// }

// class ProductRow extends React.Component {
//     render(){
//         var name = this.props.stocked ?
//             this.props.product.name : 
//             <span style={{color: 'red'}}>
//                 {this.props.product.name}
//             </span>;

//             return (
//                 <tr>
//                     <td>{name}</td>
//                     <td>{this.props.product.price}</td>                                                      
//                 </tr>
//             );
//     }
// }

// class ProductTable extends React.Component {
//     render() {
//         var rows = [];
//         var lastCategory = null;
//         this.props.products.forEach(function(product){
//             if (product.category !== lastCategory){
//                 rows.push(
//                     <ProductCategoryRow 
//                         category={product.category} 
//                         key={product.category} 
//                     />
//                 );
//             }
//             rows.push(<ProductRow product={product} key={product.name} />);
//             lastCategory = product.category;
//         });

//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// }

// class SearchBar extends React.Component{
//     render(){
//         return (
//             <form>
//                 <input type="text" placeholder="Search..." />
//                 <p>
//                     <input type="chekbox" />
//                     {' '}
//                     Only show procuct in stock
//                 </p>
//             </form>
//         );
//     }
// }

// class FilterableProductTable extends React.Component {
//     render () {
//         return (
//             <div>
//                 <SearchBar />
//                 <ProductTable products={this.props.products} />
//             </div>
//         );
//     }
// }

// var PRODUCTS = [
//     { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
//     { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Basketball' },
//     { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Footbafll'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// ReactDOM.render(
//     <FilterableProductTable products={PRODUCTS} />,
//     document.getElementById('app')
// );

// function App1() {
//     return <Greeting firstName="Ben" lastName="Hector" />
// }

// //等价操作
// function App2(){
//     const props = { firstName: 'Ben', lastName: 'Hector' };
//     return <Greeting {...props} />;
// }

// function Item (props) {
//     return <li>{props.message}</li>;
// }

// function TodoList() {
//     const todos = ['finish doc', 'submit pr', 'nag dan toreview'];
//     return (
//         <ul> 
//             {todos.map((message) => <Item 
//                                         key={message} 
//                                         message={message}
//                                     />)}
//         </ul>
//     );
// }

// function Repeat(props) {
//     let items = [];
//     for (let i = 0; i < props.numTimes; i++) {
//         items.push(props.children(i));
//     }

//     return <div>{items}</div>
// }

// function ListOfTenThings() {
//     return (
//         < Repeat numTimes={10}>
//             {(index) => <div key={index}> This is item 
//                 {index} in ths list</div>}
//         </Repeat>
//     )
// }

// import PropTypes from 'prop-types';

// class Greeting extends React.Component {
//     render() {
//         return (
//             <h1>Hello, {this.props.name}</h1>
//         );
//     }
// }

// Greeting.PropTypes = {
//     name: PropTypes.string
// };

// class Greeting extends React.Component {
//     render() {
//         return (
//             <h1>Hello, {this.props.name}</h1>
//         );
//     }
// }

// //为属性指定默认值
// Greeting.defaultProps = {
//     name: 'Stranger'
// };

// class CustomTextInput extends   React.Component {
//     constructor(props) {
//         super(props);
//         this.focus = this.focus.bind(this);
//     }

//     focus () {
//         // 直接使用原生api使text输入框获得焦点
//         this.textInput.focus();
//     }

//     render() {
//         //使用‘ref’的回调将text输入框的DOM节点存储搭到React
//         //实例上（比如：this.textInput）
//         return (
//             <div> 
//                 <input 
//                     type="text"
//                     ref={(input)=>{this.textInput = input; }} />
//                 <input
//                     type="button"
//                     value="Focus the text input"
//                     onClick={this.focus} />    
//             </div>
//         );
//     }
// }

// class AutoFocusTextInput extends React.Component {
//     componentDidMount() {
//         this.textInput.focusTextInput();
//     }

//     render() {
//         return (
//             <CustomTextInput
//                 ref = {(input) => {this.textInput = input; }} />
//         );
//     }
// }


// function CustomTextInput (props) {
//     return (
//         <div>
//             <input ref={props.inputRef} />
//         </div>
//     );
// }

// class Parent extends React.Component {
//     render() {
//         return (
//             <CustomTextInput 
//                 inputRef={el => this.inputElement = el} />
//         );
//     }
// }

// function CustomTextInput (props) {
//     return (
//         <div>
//             <input ref={props.inputRef} />
//         </div>
//     );
// }

// function Parent(props) {
//     return (
//         <div>
//             My input: <CustomTextInput inputRef = {props.inputRef} />    
//         </div>
//     )
// }

// class Grandparent extends React.Component {
//     render() {
//         return (
//             <Parent 
//                 inputRef={ el => this.inputElement = el} 
//             />
//         );
//     }
// }


// 非受控组件

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handlerSubmit = this.handlerSubmit.bind(this);
//     }

//     handlerSubmit(event) {
//         alert('A name was submitted: ' + this.input.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handlerSubmit} >
//                 <label>
//                     Name:
//                     <input defaultValue="Bob" type="text" ref={(input) => this.input = input} />
//                 </label> 
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }


//性能优化

// class CounterButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 1};
//     }

//     shouldComponentUpdate(nextProps, nexState) {
//         if (this.props.color !== nextProps.color) {
//             return true;
//         }
//         if (this.state.count !== nextState.count) {
//             return true;
//         }
//         return false;
//     }

//     render() {
//         return (
//             <button
//                 color={this.props.color}
//                 onClick={() => this.setState(state => ({count: state.count + 1}))}>
//                 Count: {this.state.count}
//             </button>
//         );
//     }
// }

// class CounterButton extends React.PureComponent {
//     constructor(props) {
//       super(props);
//       this.state = {count: 1};
//     }
  
//     render() {
//       return (
//         <button
//           color={this.props.color}
//           onClick={() => this.setState(state => ({count: state.count + 1}))}>
//           Count: {this.state.count}
//         </button>
//       );
//     }
//   }


// Context的使用

// class Button extends React.Component {
//     render() {
//       return (
//         <button style={{background: this.props.color}}>
//           {this.props.children}
//         </button>
//       );
//     }
//   }
  
//   class Message extends React.Component {
//     render() {
//       return (
//         <div>
//           {this.props.text} <Button color={this.props.color}>Delete</Button>
//         </div>
//       );
//     }
//   }

//   class MessageList extends React.Component {
//     render() {
//       const color = "purple";
//       const children = this.props.messages.map((message) =>
//         <Message text={message.text} color={color} />
//       );
//       return <div>{children}</div>;
//     }
//   }

// const PropTypes = require('prop-types');

// class Button extends React.Component {
//     render() {
//         return (
//             <button style={{background: this.context.color}}>
//                 {this.props.children}
//             </button>
//         );
//     }
// }

// Button.contextTypes = {
//     color: PropTypes.string
// };

// class Message extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.text}
//                 <Button>Delete</Button> 
//             </div>
//         );
//     }
//  }

//  class MessageList extends React.Component {
//      getChildContext() {
//          return {color: "purple"};
//      }

//      render() {
//          const children = this.props.message.map((message) => 
//             <Message text={message.text} />
//         );
//         return <div>{children}</div>;
//      }
//  }

//  MessageList.childContextTypes = {
//      color: PropTypes.string
//  };


//Fragments

// class Colums extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <td>Hello</td>
//                 <td>World!</td>
//             </React.Fragment>
//         );
//     }
// }

// Reference

// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'old'};
//         this.handlerChange = this.handlerChange.bind(this);
//     }

//     handlerChange(e) {
//         this.setState({value: e.target.value});
//         alert(e.target.value);
//         e.preventDefault();
//     }

//     render() {
//         return [
//             <input type="text" onChange={this.handlerChange} />
//         ];
//     }
// }

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// }

// const ele = (
//     <h1>Hello, {formatName(user)} !</h1>
// )

// function Welcome(props) {
//     return <h1>Hello, {props.name.firstName} {props.name.lastName} !</h1> 
// }

// const ele = <Welcome name={{firstName: 'jim', lastName: 'allon'}} />

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world !</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
 
// function tick() {
    
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('app')
//     );
// }
// function tick() {
//     class Clock extends React.Component {

//         constructor(props) {
//             super(props);
//             this.state = {date: new Date()};
//         }

//         render(){
//             return (
//                 <div> 
//                     <h1>Hello, world !</h1>
//                     <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//                 </div>
//             );
//         }
//     }

//     ReactDOM.render(
//                 <Clock />,
//                 document.getElementById('app')
//     );
// }    
// setInterval(tick, 1000);

// class Clock extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount(){
//         this.timerID = setInterval(
//           () => this.tick(),
//           1000
//         )
//     }

//     componentWillMount() {
//         clearInterval(this.timeID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render(){
//         return (
//             <div> 
//                 <h1>Hello, world !</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }

//     return (
//         <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//     )
// }

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }

// class Loggin extends React.Component {
//     handleClick = () => {
//         console.log('this is: ', this);
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}> 
//                 Click me
//             </button>
//         )

//     }
// }

// class Popper extends React.Component {
//     constructor() {
//         super();
//         this.state = {name: 'Hello World !'}
//     }

//     preventPop(name, e) {
//         e.preventDefault();
//         console.log(name);
//     }

//     render() {
//         return (
//             <div>
//                 <p>Hello</p>
//                 <a href="http://www.baidu.com" onClick=
//                     {this.preventPop.bind(this,this.state.n)}>Click</a>
//             </div>
//         )
//     }
// }

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
  
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}> 
//             Logout
//         </button>
//     )
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false}; 
//     }

//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     } 

//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;

//         let button = null;
//         if(isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn = {isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;

//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 && 
//                 <h2>You have {unreadMessages.length} unread messages.</h2>
//             } 
//         </div>
//     );
// }


// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;

//     return (
//         <div>
//             <h1>Hello !</h1>
//             {unreadMessages.length > 0 && 
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>  
//             }
//         </div>
//     )
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];

// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     } 

//     return (
//         <div className="Warning" > 
//             Warning !
//         </div>
//     )
// }

// class Page extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: true};
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick(){
//         this.setState(prevState => ({
//             showWarning: !prevState.showWarning
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.state.handleToggleClick}> 
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button> 
//             </div>
//         )
//     }
// }


// const numbers = [1, 3, 5, 7, 8];
// const listItems = numbers.map((number) => 
//     <li>{number}</li>
// );      

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>第{number}个li</li>  
//     );

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5];

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.id}>
//             {number.value}
//         </li>
//     );

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// } 
// const numbers = [{id: 'a', value: 2}, {id: 'jim', value: 3},
//      {id: 'jack', value: 6}, {id: 'hello', value: 9}];

// function ListItem(props) {
//     return <li>{props.value}</li>; 
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => 
//         <ListItem key={number.toString()} value={number} />
//     )

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )

// }

// const numbers = [1, 2, 5, 3, 4];

// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) => 
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );

//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );

//     return (
//         <div>
//             {sidebar}
//             <br />
//             {content}
//         </div>
//     );
// }

// const posts = [
//     {id: 1, title: 'Hello', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>水烧开了</p>
//     }
//     return <p>水不会烧开</p> 
// }

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// }

// class Temperature extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {temperature: ''};
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.setState({temperature: e.target.value})
//     }

//     render() {
//         const temperature = this.state.temperature;
//         const scale = this.props.scale;

//         return (
//             <form> 
//                 <label>Enter temperature in {scaleNames[scale]}:</label>
//                 <input value={temperature} onChange={this.handleChange} />
//             </form>
//         )
//     }
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {temperature: ' '};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({temperature: e.target.value});
//     }

//     handleSubmit(e) {
//         alert(this.state.temperature);
//         e.preventDefault();
//     }

//     render() {
//         const temperature = this.state.temperature;
        
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>输入一个摄氏温度:</label>
//                 <input text="type" onChange={this.handleChange}
//                     value={temperature} />
//                 <input type="submit" value="提交"/>
//                 < BoilingVerdict celsius={parseFloat(temperature)} />    
//             </form>
//         );
//     }
// }


ReactDOM.render(
    <Calculator />,
    document.getElementById('app')
);