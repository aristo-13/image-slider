
//my function to return a promise
function getImage(){
    return new Promise((resolve,rejct) =>{
        const data = [
            {url:'/image-slider/cars/car3.jpg',
            description:"a four-door passenger car known for its comfortable and spacious interior. It's a popular choice for families and commuters due to its practicality and affordability."
        },
            {url:'/image-slider/cars/car2.jpg',
            description:'designed for high performance and speed. They typically have two seats, a sleek design, and a powerful engine. Sports cars are all about the thrill of driving.'
        },
            {url:'/image-slider/cars/car1.jpg',
            description:' versatile vehicles that combine the features of a car and a truck. They are known for their spacious interiors, higher driving position, and often come with all-wheel drive for off-road capabilities.'
        },
            {url:'/image-slider/cars/car4.jpg',
            description:'have a retractable roof that can be folded down. They provide an open-air driving experience and are perfect for sunny days.'
        },
            {url:'/image-slider/cars/car5.jpg',
            description:'They offer a higher driving position like an SUV but are built on a car platform, making them more fuel-efficient.'
        },
            {url:'/image-slider/cars/car6.jpg',
            description:'They are eco-friendly and have zero tailpipe emissions. Many modern electric cars have impressive ranges and fast-charging capabilities.'
        },
            {url:'/image-slider/cars/car7.jpg',
            description:'They are designed for improved fuel efficiency and reduced emissions.'
        },
            {url:'/image-slider/cars/car8.jpg',
            description:'known for their fuel efficiency and easy maneuverability. They are great for city driving and parking in tight spaces.'
        },
        ]
        resolve(data)
    })
}

//async function to fetch the data from the promise
async function fetchData(){
    try{
       const image_data = await getImage()
       display(image_data)
       console.log(image_data)
    }
    catch(err){
        console.log(err)
    }
}




const showbox = document.querySelector('.show-box')
const dots = document.querySelector('.dots')
const curtain = document.querySelector('.curtain')
const illustration = document.querySelector('.illustration')
const colours = ['rgba(7, 81, 8, 0.74)','rgba(7, 13, 81, 0.74)','rgba(81, 7, 79, 0.74)']
let index = 0;
const describe = []//array to store the description of each car from the promise

// a display function to show image and dots
        function display(data) {
    
            const showbox = document.querySelector('.show-box');
            
            //loop through data and create img and a dot element for each data
            for (let i = 0; i < data.length; i++) {
                const img = document.createElement('img');
                img.src = data[i].url;
                img.className = 'image';
                showbox.appendChild(img);


                let dot = document.createElement('button')
                dot.className = 'dot'
                dot.textContent = i
                dots.appendChild(dot)

                describe.push(data[i].description)//push each car's description to the array[]
            }
            //create a p element to display the description
            let description = document.createElement('p')
            description.className = 'description'
            curtain.appendChild(description)
 
            
            slider(0);//initialize the current showing car to the car at index 0
        }

        
//function to display the cars when called
        function slider(count) {
            index += count;

            const images = document.querySelectorAll('.image');
            const dot = document.querySelectorAll('.dot');
            const description = document.querySelector('.description')
            
            
             changeColor()
//setting index to 0 when index is greater than / less the number of images
            if (index >= images.length) {
                index = 0;
            }
            if (index < 0) {
                index = images.length - 1;
            }

//hiding all the images
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = 'none';
            }

            //displaying current image with the current index
            images[index].style.display = 'block';


            for(let i = 0; i < dot.length; i++){
                dot[i].style.opacity = '0.3'
                dot[i].style.scale = '0.7'

                //when each dot is clicked the image with the correspoding index will show
                dot[i].addEventListener('click', () =>{
                 index = 0
                    slider(i)
                })
            }

            if(index == dot[index].textContent){
                dot[index].style.opacity = '1'
                dot[index].style.scale = '1.0'
            }
          
          let counter = index + 1
          illustration.querySelector('.counter').textContent = `
          ${counter}${(counter == 1)? 'st' : (counter == 2)? 'nd' : (counter == 3)? 'rd' : (counter > 3)? 'th': ''}
          `

          description.textContent = describe[index]
        }

    
        fetchData();//calling the fetchdata() async functionn
   
 function changeColor(){
    let ran = Math.floor(Math.random() * colours.length - 1)
    illustration.style.backgroundColor = colours[ran]
    curtain.style.backgroundColor = colours[ran]
 }

 
