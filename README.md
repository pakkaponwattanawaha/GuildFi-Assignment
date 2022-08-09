# GuildFi assignment Frontend web3

 - Deployment URL: https://guild-fi-assignment.vercel.app/
                  
### Table of content

   - [Application](#application)
     - [Stack Used](#stack-used)
     - [How to run](#how-to-run)
   - [Features](#features)
     - [Terrain Plane](#terrain-plane)
     - [City Region](#city-region)
     - [Model Object](#model-object)
     - [Camera](#camera)
     - [Misc Features](#misc-features)
   - [Improvements](#improvements)
   
 
 ## Application
 
 ### Stack Used
  - Framework - Next.js + Typescript
  - Styling - Tailwind CSS
  - 3D - Three.js + @react-three/fiber + @react-three/drei
  - web3 - ethers.js

 ## How to run

 `npm install`
 
 `npm run dev `
 
   or
   
 `yarn install`
 
 `yarn dev`

 ## Features
 ### Terrain Plane
 use `<meshStandardMaterial/>` component
 
 <img width="500" alt="Screen Shot 2565-08-10 at 00 19 39" src="https://user-images.githubusercontent.com/54467698/183716071-f2f3f281-30e6-4353-8a54-eccb670a8b5b.png">

 ### City Region
 use `<meshStandardMaterial/>` component to render region highlight
 and `<sprite/>` component to render camera facing badge and city name
 
 <img width="400" alt="Screen Shot 2565-08-10 at 00 15 50" src="https://user-images.githubusercontent.com/54467698/183715581-010a92ae-1ef6-4618-a59a-2b6df14377be.png">


 ### Model Object
  render 3d object model on `<meshStandardMaterial/>` and place it on the Terrain Plane
  
 <img width="400" alt="Screen Shot 2565-08-10 at 01 09 43" src="https://user-images.githubusercontent.com/54467698/183728596-784bdfb4-db22-4ef1-bd53-3ef8d88ad28b.png">
 
 ### Camera
 Camera is the perspective view point of the application.It is your point of view when using the application. 
 We can look at it like an object orbiting a point (this point is refer as focus point)
 Camera has its own positional coordination which is referenced to it's original coordinate .
 
 We will need to declare variable for each coordinate value.
 
 let  ` Xc, Yc, Zc = the x,y,z coordinate of the camera relative to its original coordinate`
 
 let  ` Xp, Yp, Zp = the x,y,z coordinate of the camera relative to the Terrain Plane`
 
 let  ` θ is the polar angle of camera to the Z-Axis of the Terrain Plane `
 
 and for this specific setup notice that `Xc = Xp` .
 
 Then we would have something like this.
 
 <img src="https://user-images.githubusercontent.com/54467698/183620787-cfd2d6af-8742-4acc-8c0d-cd252644445a.png" alt="drawing" width="500"/>


  #### Camera Restriction
  For camera position restriction we will defined the restriction boundary cube to limit camera movement.
  When the camera collide with the boundary the position Xp, Yp, Zp will be set to the boundary value.
  
  for camera angle restriction we will be setting the focus target position (coorditation that our camera )
  
  let ` Xf, Yf, Zf = position of focus point relative to the Terrain Plane `
  
   <img src="https://user-images.githubusercontent.com/54467698/183687814-59402fbe-0796-4736-97d6-3a7d861cabb6.png" alt="drawing" width="500"/>
    
  Ex. for Y axis we will be setting Y to the restriction boundary and focus point to `Yf += Yf * Cosθ`
      which in result will create an invinsible boundary effect
             
  #### Camera Movement
  - panning
    
  Normal panning of `<OrbitControls>` work when moving mouse in x and y direction which result in moving the camera in Xc and Yc Axis.
  The problem with this movement is Xc and Yc is not always paraellel to the Terrain plane (which is the behavior we want) .
  We can use camera restriction to solve this problem for now.
   
  - dollying
   
  Dollying action is a combination of Zooming + Focus Point Movement and is trigger when mouse scroll is register.
  Noted that `<OrbitControls>` will always pointing toward the focus point.
    
  <img src="https://user-images.githubusercontent.com/54467698/183734803-4e8b1569-7043-44be-83d7-c237a19baa68.png" alt="drawing" width="700"/>


     
  As described in the figure the focus point will move in the focus point trajectory when mouse scroll is register.
  
  The focus point will continue to move in its trajectory until the camera is collide with the bounary 
  and will only be moving in Yp-Axis untill reached `θ = PI / 3.75 = 38 degree` .
  
  I also added the cosθ and sinθ bias to make the action smoother.
  
  #### Camera Breakpoint
   When the polar angle `θ > 45 degree` the ObjectModel will be shown on the plane instead of CityRegion
  
 ### Misc. features 
  - Sound - Interactive UI sound player
  - Wallet connection - require wallet connection to use the application
  
  <img width="400" alt="Screen Shot 2565-08-10 at 00 20 50" src="https://user-images.githubusercontent.com/54467698/183717140-faa1c7d1-7a36-4fae-a772-d58462321f1a.png">

  
  - Responsive Design - work for all screen size
  
   <img width="150" alt="Screen Shot 2565-08-10 at 00 23 42" src="https://user-images.githubusercontent.com/54467698/183717601-a10df38d-73cc-4c11-9ee4-54d934ed7f15.png">
   
  - Loading Screen - percentage of resource loaded
  
  - Welcome Overlay - Welcome screen for entering the site
  
  <img width="400" alt="Screen Shot 2565-08-10 at 00 20 14" src="https://user-images.githubusercontent.com/54467698/183716910-c844776f-f3c4-4ad8-8ff2-b328c11fc9f3.png">

 


### Improvements
#### Misc. features
 
 - auto zoom to regions -> need state management system like redux to reference camera position
 - mute
 - ocean effect
 - highly detailed terrain -> render higher quality terrain in each area at camera breakpoint 

#### Ideal Camera movement
  As mentioned earlier the panning action of the camera still not perfect. It should be moving in paraellel with the Terrain plane. 
  This could be achieve with cartesian vector 
  
   <img src="https://user-images.githubusercontent.com/54467698/183725321-ecd068e6-109a-4a79-b68a-831f7a426cd2.png" alt="drawing" width="400"/>

 From our setup
 
  `Xc += Xp`
  
  `Yc += Yp * Cosθ + Zp * Sinθ`
  
  `Zc += Zp * Sinθ + Zp * Cosθ`
  
And we will need a way to customized how dragging our mouse in x and y axis behave.
Which I couldn't figure it out yet.
 

