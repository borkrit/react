const CARS = [
    {
        id: 1,
        brand: "Audi",
        models: [
            {
                id: 1,
                name: "A1",
                collection: [
                    {
                        id: 1,
                        version: "Sportback",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    },
                    {
                        id: 2,
                        version: "Citycarver",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    }
                ]
            },
            {
                id: 2,
                name: "Q5",
                collection: [
                    {
                        id: 1,
                        version: "FY 2021",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Sportback",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    }
                ]
            },
            {
                id: 3,
                name: "TT",
                collection: [
                    {
                        id: 1,
                        version: "Coupe",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Roadster",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        brand: "BMW",
        models: [
            {
                id: 1,
                name: "8 series",
                collection: [
                    {
                        id: 1,
                        version: "G1X LCI",
                        year: 2022,
                        horsepower: 333,
                        engine: 2998
                    },
                    {
                        id: 2,
                        version: "G1X",
                        year: 2019,
                        horsepower: 340,
                        engine: 2998
                    }
                ]
            },
            {
                id: 2,
                name: "X6",
                collection: [
                    {
                        id: 1,
                        version: "G06 LCI",
                        year: 2023,
                        horsepower: 530,
                        engine: 4395
                    },
                    {
                        id: 2,
                        version: "G06",
                        year: 2020,
                        horsepower: 286,
                        engine: 2993
                    }
                ]
            }
        ]
    },
];





const Product = <React.Fragment>
<h1>Car Specs</h1>
<table>
<tbody>
  {CARS.map((item, key) => (
    <React.Fragment key={key}>
      <tr className='car__brand'>
        <td colSpan='2' className='car__brand'>{item.brand}</td>
      </tr>

      {Object.keys(item.models).map((k, i) => (
        <React.Fragment key={i}>
          
              {Object.keys(item.models[k].collection).map((e, j) => (
                <React.Fragment key={j}>
                  
                   <tr>
                        {j === 0 ? ( <td rowSpan={2} className="cell__model">{item.models[k].name}</td>) : null }
                        <td className='cell__info' >
                            <ul>
                            {Object.keys(item.models[k].collection[e]).filter(el=>el !== 'id' ).map((el, l) => (
                                <li key={l}>{el} : {item.models[k].collection[e][el]}</li> 
                            ))}
                            </ul>
                        </td>
                    </tr>
                 
                 
                </React.Fragment>
              ))}
         
        </React.Fragment>
      ))}
    </React.Fragment>
  ))}
</tbody>

</table>

</React.Fragment>



const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

root.render(Product);

