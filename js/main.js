//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//https://api.nasa.gov/planetary/apod?api_key=wY4dK4tPYLqNj0YUnPb3ul8d2a5ZtenxvopS2g0e

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY for all photos

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY for photos by date



document.querySelector('#search').addEventListener('click', getDate)

function getDate(){

    let dateValue = document.querySelector('input').value
    let photoIndex = 0;

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateValue}&api_key=wY4dK4tPYLqNj0YUnPb3ul8d2a5ZtenxvopS2g0e`)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
      
        document.querySelector('img').src = response.photos[photoIndex].img_src;

        document.querySelector('#left').addEventListener('click', photoBefore)
       

        function photoBefore(){
            
            if(photoIndex > 0){
                photoIndex--
                document.querySelector('img').src = response.photos[photoIndex].img_src;
                console.log(photoIndex)
                
            }
        }
        document.querySelector('#right').addEventListener('click', photoAfter)
        function photoAfter(){
            if(photoIndex < photos.length - 1){
                photoIndex++
                document.querySelector('img').src = response.photos[photoIndex].img_src;
                console.log(photoIndex)
            }
        }

        document.querySelector('h2').innerText = `picture from ${dateValue}`;


    
    
    
    
    })
	.catch(err => console.error(err)); 
    
}

