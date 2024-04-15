const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  const exist = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {exist ? (
        <>
        <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
        </p>
        <ul className='pizzas'>
          {pizzaData.map((e) => {
            return <Pizza key={e.name} PizzaObj={e} />;
          })}
        </ul>
        </>
      ) : (
        <p>We are currently working on our Menu. Please come back later.</p>
      )}
    </main>
  );
}


function  Pizza({PizzaObj}) {
  return (
    <li className={`pizzas ${PizzaObj.soldOut? "sold-out" : ""}`} >
      <img src={PizzaObj.photoName} alt={PizzaObj.name} />
      <div>  
        <h3>{PizzaObj.name}</h3>
        <p>{PizzaObj.ingredients}</p>
        <span>{PizzaObj.soldOut ? "SOLD OUT" : PizzaObj.price}</span>
      </div>
    </li>
    )
      
  
}

export function App() {
  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  );
}





function Header() {
  return (
  <header className="header">
  <h1>Pizza and company</h1>
  </header>
  )
}

// the footer is below lol
function Footer() {
  const openHours = 8
  const closeHours = 18
  const date = new Date().getHours()
  const time =  ( openHours < date && date < closeHours )
// here we are checking the time at which the shop will be open or not 
  return (
    <footer className='footer'>
      {time ? (
        <Order closeHours = {closeHours} openHours = {openHours} />
      ): (
      <p>
        you can visit us between {openHours}:00 and {closeHours}:00
      </p>)}
    </footer>
  )
}

function Order ({closeHours , openHours}) {
  return (
    <div className="order">
          <p>
            We are open from {openHours}:00 and until {closeHours}:00 , Come visit us or Order online
          </p>
          <button className="btn">Order</button>
    </div>
  )
}